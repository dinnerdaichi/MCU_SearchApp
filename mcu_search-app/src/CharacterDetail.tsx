import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import md5 from "crypto-js/md5";
import axios from "axios";
import CharacterInfo from "./components/CharacterInfo";
import BackButton from "./components/BackButton";
import { MarvelCharacter } from "./components/interfaces/MarvelCharacter";
import MovieFetcher from "./components/MovieFetcher";
import { Skeleton } from "@mui/material";



const BASE_URL = "https://gateway.marvel.com/v1/public/characters";


const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<MarvelCharacter | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const fetchCharacterDetail = async (characterId: string) => {
    setLoading(true);
    const ts = Date.now();
    const publicKey = "10a7b1e2e36a7af44b45b670370bb4b7";
    const privateKey = "abde8a432425925a22eb7566fe09397a6fe7af8b";

    const generateHash = (ts: number, privateKey: string, publicKey: string) => {
      return md5(`${ts}${privateKey}${publicKey}`).toString();
    };

    const hash = generateHash(ts, privateKey, publicKey);

    try {
      const response = await axios.get(`${BASE_URL}/${characterId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
      setCharacter(response.data.data.results[0]);
    } catch (error) {
      if(axios.isAxiosError(error)) {
        console.error("API error:", error);
        console.error("Error details:", error.response?.data);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchCharacterDetail(id);
    }
  }, [id]);

  if (loading) {
    return <div>
      <Skeleton variant="rectangular" width="100%" height="500px" />
      <Skeleton variant="rectangular" width="100%" height="500px" />
      <Skeleton variant="rectangular" width="100%" height="500px" />
    </div>;
  }

  if (!character) {
    return <div>No character found.</div>;
  }

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="inner">
        <BackButton handleBack={handleBack} />
        <CharacterInfo character={character} />
        <MovieFetcher characterName={character.name} />
      </div>
    </div>
  );
};

export default CharacterDetail;
