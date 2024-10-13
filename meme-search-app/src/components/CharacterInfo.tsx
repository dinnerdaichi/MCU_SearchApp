import React from "react";
import { MarvelCharacter } from "./interfaces/MarvelCharacter";

interface CharacterInfoProps {
  character: MarvelCharacter; // MarvelCharacterを持つcharacterプロパティを定義
}


const CharacterInfo: React.FC<CharacterInfoProps> = ({ character }) => {

  return (
    <>
      <section className="mb-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 detail__wrap">
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            className="rounded-lg shadow-lg mx-auto lg:mx-0"
          />
          <div className="detail__content">
            <h1 className="text-4xl font-bold mb-4">{character.name}</h1>
            <p className="text-xl mb-4">Also known as: {character.realName}</p>
            <p className="text-lg mb-6">{character.description}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
          </div>
        </div>
      </section>
      <section className="detail__description">
        <h2 className="text-3xl font-bold mb-6">Character Description</h2>
        <div className="border rounded-md p-6">
          <p className="text-lg">{character.description}</p>
          <p className="mt-4 text-gray-500">
            {character.name} has been a central figure in the Marvel Universe, appearing in numerous comics and movies. Known for his genius-level intellect and advanced technology, {character.realName} continues to be one of Marvel's most popular and enduring characters.
          </p>
        </div>
      </section>
    </>
  );
};


export default CharacterInfo;