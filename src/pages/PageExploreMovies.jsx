import { useEffect, useMemo, useState } from "react";
import MovieCard from "../components/section/movies/MovieCard";
import movieIcon from "../assets/icons/movie-icon.svg";
const apiKey = import.meta.env.VITE_OMDB_API_KEY;

const randomKeyword = [
  "Love",
  "Thriller",
  "Action",
  "Sci-Fi",
  "Drama",
  "Mystery",
  "Rom-Com",
  "Horror",
  "Fantasy",
  "Comedy",
  "Western",
  "Crime",
  "Adventure",
  "Biopic",
  "Musical",
  "Slasher",
  "Noir",
  "Satire",
  "Parody",
  "Epic",
];

const tempMovieList = [];

const PageExploreMovies = () => {
  const [movieList, setMovieList] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const randomWord = Math.round(Math.random() * 10);

    if (tempMovieList.length === 0) {
      (async function fetchMovie() {
        try {
          for (let i = 1; i <= 2; i++) {
            const response = await fetch(
              `https://www.omdbapi.com/?s=${randomKeyword[randomWord]}&page=${i}&apikey=${apiKey}`,
            );
            const data = await response.json();
            tempMovieList.push(...data?.Search);
          }

          setMovieList(tempMovieList);
        } catch (err) {
          console.log(err);
          setError(err.message);
        }
      })();
    } else {
      setMovieList(tempMovieList);
    }
  }, []);

  if (error) return <p>{error}</p>;
  if (!movieList) {
    {
      const arr = [];
      for (let i = 0; i < 20; i++) {
        arr.push(<MovieCard poster={movieIcon} imgOpacity="opacity-10" />);
      }
      return <section className="flex flex-wrap px-16 gap-8 gap-x-10">{arr}</section>;
    }
  }

  return (
    <section className="flex flex-wrap  px-16 gap-8 gap-x-10">
      {movieList?.map((movie) => {
        return (
          <MovieCard
            key={movie.imdbID}
            movieId={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            type={movie.Type}
            poster={movie.Poster}
          />
        );
      })}
    </section>
  );
};

export default PageExploreMovies;
