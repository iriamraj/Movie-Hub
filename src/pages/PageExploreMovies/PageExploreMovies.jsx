import { useContext, useEffect, useMemo, useState } from "react";
import MovieCard from "../../components/section/movies/MovieCard";
import movieIcon from "../../assets/icons/movie-icon.svg";
import FilterButton from "./FilterButton";
import SearchBar from "../../components/common/SearchBar";
import useFetchMovies from "../../hooks/useFetchMovies";
import { useParams } from "react-router";
import FilterContext from "../../context/FilterContext";

const apiKey = import.meta.env.VITE_OMDB_API_KEY;

const PageExploreMovies = () => {
  const { movieID, searchKeyword } = useParams();
  const [filterExpand, setFilterExpand] = useState(false);
  const [filterSelected, setFilterSelected] = useContext(FilterContext);

  const [fetchData, fetchLoading, fetchError] = useFetchMovies(searchKeyword, 2);

  if (fetchLoading) {
    {
      const arr = [];
      for (let i = 0; i < 20; i++) {
        arr.push(<MovieCard key={i} poster={movieIcon} imgOpacity="opacity-10" />);
      }
      return <section className="flex flex-wrap px-16 gap-8 gap-x-10">{arr}</section>;
    }
  }

  return (
    <section className="flex flex-wrap px-16 gap-8 gap-x-10">
      <div className="w-full flex justify-between items-center">
        <FilterButton
          searchKeyword={searchKeyword}
          filterExpand={filterExpand}
          setFilterExpand={setFilterExpand}
        />
        <SearchBar filterSelected={filterSelected} setFilterSelected={setFilterSelected} />
      </div>
      {fetchError ? (
        fetchError.message === "Failed to fetch" ? (
          <p>{fetchError}</p>
        ) : fetchError === "Movie not found!" ? (
          <p>{fetchError}</p>
        ) : (
          <p>"Something went wrong!."</p>
        )
      ) : (
        <div className="flex flex-wrap gap-8 gap-x-10">
          {fetchData?.map((movie) => {
            return (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                movieId={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                type={movie.Type}
                poster={movie.Poster}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default PageExploreMovies;
