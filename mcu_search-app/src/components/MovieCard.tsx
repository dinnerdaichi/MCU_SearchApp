import React from "react";

interface Movie {
  id: number;
  title: string;
  overview: string;
  cover_url: string;
}

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <div
      key={movie.id}
      className="border rounded-md p-6 width-30 movie__item"
    >
      <img
        src={movie.cover_url} // サムネイル画像のURL
        alt={movie.title}
        className="rounded-md mb-2"
        width={200}
        height={300}
      />
      <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
    </div>
  );
};

export default MovieCard;
