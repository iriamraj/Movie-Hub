import { useState } from "react";
import { useParams } from "react-router";
import MovieCard from "../../components/common/MovieCard";
import MovieIcon from "../../assets/icons/MovieIcon.svg";
import FilterButton from "./FilterButton";
import SearchBar from "../../components/common/SearchBar";
import useFetchMovies from "../../hooks/useFetchMovies";

const apiKey = import.meta.env.VITE_OMDB_API_KEY;

const PageExploreMovies = () => {
  const { movieID, searchKeyword } = useParams();
  const [filterExpand, setFilterExpand] = useState(false);

  const [fetchData, fetchLoading, fetchError] = useFetchMovies(searchKeyword, 2);

  //Showing 20 dummy movie cards when loading.
  if (fetchLoading) {
    {
      const arr = [];
      for (let i = 0; i < 20; i++) {
        arr.push(<MovieCard key={i} poster={MovieIcon} imgOpacity="opacity-10" isDemo={true} />);
      }
      return <section className="flex flex-wrap px-16 gap-8 gap-x-10">{arr}</section>;
    }
  }

  return (
    <section className="flex flex-wrap px-5 md:px-16 gap-8 gap-x-10">
      <div className="w-full flex flex-col md:flex-row gap-6 justify-between items-center">
        <FilterButton
          searchKeyword={searchKeyword}
          filterExpand={filterExpand}
          setFilterExpand={setFilterExpand}
        />
        <SearchBar />
      </div>
      {fetchError ? (
        fetchError.message === "Failed to fetch" ? (
          <p>{fetchError.message}</p>
        ) : fetchError === "Movie not found!" ? (
          <p>{fetchError}</p>
        ) : (
          <p>"Something went wrong!."</p>
        )
      ) : (
        <div className="flex flex-wrap gap-8 xl:gap-x-10 justify-center items-center lg:justify-">
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
