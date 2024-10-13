import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";


// 映画の型定義
interface Movie {
  id: number;
  title: string;
  overview: string;
  genre_ids: number[];
  cover_url: string;
}
interface MovieFecherProps {
  characterName: string;
}

const MovieFetcher: React.FC<MovieFecherProps> = ({ characterName }) => {
  // const MCU_API_URL = "https://mcuapi.herokuapp.com/api/v1/movies?filter=title%3Dthor"; // 例としてTMDBを使用
  // const API_KEY = "aaf2e8e1050a637ba2284dd280b5d1c8"; // TMDB APIキーを設定z

  const [movies, setMovies] = useState<Movie[]>([]); // 初期値を空の配列に設定

  const fetchMovies = async (characterName: string) => {
    const firstWord = characterName.split(" ")[0];
    console.log(firstWord);
    const MCU_API_URL = `https://mcuapi.herokuapp.com/api/v1/movies?filter=title%3D${firstWord}`;
    try {
      const response = await axios.get(MCU_API_URL);
      const filteredMovies = response.data.data.map((movie: Movie) => ({
        id: movie.id, // 映画のID
        title: movie.title, // 映画のタイトル
        cover_url: movie.cover_url, // カバー画像のURL
      }));
      setMovies(filteredMovies); // resultsがundefinedの場合に空の配列を設定
    } catch (error) {
      console.error("Movie API error:", error);
      setMovies([]);
    }
  };

  useEffect(() => {
    if (characterName) {
      fetchMovies(characterName); // characterNameが変更されたときにfetchMoviesを呼び出す
    }
  }, [characterName]);

  useEffect(() => {
    console.log("Updated movies:", movies); // moviesが更新された後にログを出力
  }, [movies]); // moviesが更新されたときに実行

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Movies</h2>
      <div className="grid gap-6 lg:grid-cols-4 lg:gap-12 movie__item-wrap">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))
        ) : (
          <p>No movies found for this character.</p>
        )}
      </div>
    </section>
  );
};

export default MovieFetcher;