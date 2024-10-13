import React from "react";
import MarvelCharacterFetcher from "./components/MarvelCharacterFetcher";
import RandomMarvelCharacterFetcher from "./components/RandomMarvelCharacterFetcher";

// const BASE_URL = "https://gateway.marvel.com/v1/public/characters";

const Front: React.FC = () => {
  // eslint-disable-next-line
  // const [characters, setCharacters] = useState<MarvelCharacter[]>([]);

  return (
    <div>

    <MarvelCharacterFetcher />
    <RandomMarvelCharacterFetcher />
    </div>
  );
};

export default Front;
