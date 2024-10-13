import React, { useState } from "react";
import Search from "../Search";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import md5 from "crypto-js/md5";
import { MarvelCharacter } from "./interfaces/MarvelCharacter";

const BASE_URL = "https://gateway.marvel.com/v1/public/characters";



const MarvelCharacterFetcher: React.FC = () => {
  // eslint-disable-next-line
  // const [characters, setCharacters] = useState<MarvelCharacter[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(""); // 検索ワードの状態
  // const [randomCharacter, setRandomCharacter] = useState<MarvelCharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const fetchMarvelCharacters = async () => {
    if (!searchTerm) return;

    setLoading(true);
    const ts = Date.now();
    const publicKey = import.meta.env.VITE_MCU_PUBLIC_API_KEY;
    const privateKey = import.meta.env.VITE_MCU_PRIVATE_API_KEY;

    const generateHash = (ts: number, privateKey: string, publicKey: string) => {
      return md5(`${ts}${privateKey}${publicKey}`).toString();
    };

    const hash = generateHash(ts, privateKey, publicKey);

    try {

      const response = await axios.get(`${BASE_URL}?nameStartsWith=${searchTerm}&ts=${ts}&apikey=${publicKey}&hash=${hash}`);
      // 画像が存在するキャラクターのみをフィルタリング
      const filteredCharacters = response.data.data.results.filter((character: MarvelCharacter) => {
        const path = character.thumbnail.path;
        return path && !path.includes("image_not_available"); // ここをチェック
      });

      navigate("/search", { state: { characters: filteredCharacters } });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("API error:", error.response?.data);
      } else {
        console.error("Unexpected error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchMarvelCharacters(); // searchTermを直接渡す
  };

  return (
    <>
      <h1>Marvel Characters</h1>
      <Search
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />
      {loading && <p>Loading...</p>}
    </>
  );
};

export default MarvelCharacterFetcher;
