import { useContext } from "react";
import MovieContainer from "./MovieContainer";
import useFetchMovies from "../../../hooks/useFetchMovies";
import FavoriteListContext from "../../../context/FavoriteListContext";
import MovieCard from "./MovieCard";

const apiKey = import.meta.env.VITE_OMDB_API_KEY;

const SectionMovies = () => {
  const [favoriteList] = useContext(FavoriteListContext);
  const [marvelData, MarvelLoading, MarvelError] = useFetchMovies("Avengers", 1);
  const [netflixData, NetflixLoading, NetflixError] = useFetchMovies("Netflix", 1);
  const [showsData, ShowsLoading, ShowsError] = useFetchMovies("Shows", 1);

  return (
    <>
      <div
        id="section-favorite"
        className="font-['Bai_Jamjuree',sans-serif] font-semibold px-16 mb-10"
      >
        <h2 className="my-4">Favorite</h2>
        <div className="w-full flex overflow-x-scroll gap-7">
          {(favoriteList || []).map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              movieId={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              type={movie.Type}
              poster={movie.Poster}
            />
          ))}
        </div>
      </div>

      <section id="section-movie" className="px-16 mb-10">
        <MovieContainer
          sectionName="Marvel"
          moviesData={marvelData}
          loading={MarvelLoading}
          error={MarvelError}
        />
        <MovieContainer
          sectionName="Netflix"
          moviesData={netflixData}
          loading={NetflixLoading}
          error={NetflixError}
        />
      </section>

      <section id="section-shows" className="px-16 mb-10">
        <MovieContainer
          sectionName="Shows"
          moviesData={showsData}
          loading={ShowsLoading}
          error={ShowsError}
        />
      </section>
    </>
  );
};

export default SectionMovies;
