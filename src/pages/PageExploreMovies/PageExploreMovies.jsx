import { useEffect, useMemo, useState } from "react";
import MovieCard from "../../components/section/movies/MovieCard";
import movieIcon from "../../assets/icons/movie-icon.svg";
import FilterButton from "./FilterButton";
import SearchBar from "../../components/common/SearchBar";
import useFetchMovies from "../../hooks/useFetchMovies";
import NotFoundError from "../../components/common/NotFoundError";
const apiKey = import.meta.env.VITE_OMDB_API_KEY;

// import useFetchMovies from "../../hooks/useFetchMovies";

// const randomKeyword = [
//   "Love",
//   "Thriller",
//   "Action",
//   "Sci-Fi",
//   "Drama",
//   "Mystery",
//   "Rom-Com",
//   "Horror",
//   "Fantasy",
//   "Comedy",
//   "Western",
//   "Crime",
//   "Adventure",
//   "Biopic",
//   "Musical",
//   "Slasher",
//   "Noir",
//   "Satire",
//   "Parody",
//   "Epic",
// ];

const PageExploreMovies = () => {
  const [movieList, setMovieList] = useState(null);
  const [error, setError] = useState(null);
  const [filterExpand, setFilterExpand] = useState(false);
  const [filterSelected, setFilterSelected] = useState("Random");

  const [fetchData, fetchLoading, fetchError] = useFetchMovies(filterSelected, 2);

  const retry = () => {
    location.reload()
  };

  if (fetchLoading) {
    {
      const arr = [];
      for (let i = 0; i < 20; i++) {
        arr.push(<MovieCard key={i} poster={movieIcon} imgOpacity="opacity-10" />);
      }
      return <section className="flex flex-wrap px-16 gap-8 gap-x-10">{arr}</section>;
    }
  }

  if (fetchError) {
    if (fetchError.message === "Failed to fetch") return <p>{fetchError}</p>;
    if (fetchError === "Movie not found!")
      return (
        <NotFoundError click={retry} content="Movie Not Found">
          Retry
        </NotFoundError>
      );
    return (
      <NotFoundError click={retry} content="Something went wrong!.">
        Retry
      </NotFoundError>
    );
  }

  return (
    <section className="flex flex-wrap px-16 gap-8 gap-x-10">
      <div className="w-full flex justify-between items-center">
        <FilterButton
          filterSelected={filterSelected}
          setFilterSelected={setFilterSelected}
          filterExpand={filterExpand}
          setFilterExpand={setFilterExpand}
        />
        <SearchBar filterSelected={filterSelected} setFilterSelected={setFilterSelected} />
      </div>
      <div className="flex flex-wrap gap-8 gap-x-10">
        {fetchData?.map((movie) => {
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
      </div>
    </section>
  );
};

export default PageExploreMovies;
