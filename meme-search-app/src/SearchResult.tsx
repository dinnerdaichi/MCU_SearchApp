import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BackButton from "./components/BackButton";
import { MarvelCharacter } from "./components/interfaces/MarvelCharacter";


const SearchResult: React.FC<{ characters: MarvelCharacter[] }> = () => {



  const location = useLocation();
  const { characters } = location.state || { characters: [] };

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Search Result</h1>
      <BackButton handleBack={handleBack}/>
      <ul className="result__list">
        {characters.map((character:MarvelCharacter) => (
          <li key={character.id}>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
            <h2>{character.name}</h2>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
