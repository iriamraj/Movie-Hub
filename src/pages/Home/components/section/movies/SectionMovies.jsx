import { useContext } from "react";
import MovieContainer from "./MovieContainer";
import useFetchMovies from "../../../../../hooks/useFetchMovies";
import FavoriteListContext from "../../../../../context/FavoriteListContext";
import MovieCard from "../../../../../components/common/MovieCard";

//API Keys
const apiKey = import.meta.env.VITE_OMDB_API_KEY;

const SectionMovies = () => {
  const [favoriteList, setFavoriteList] = useContext(FavoriteListContext);

  //Calling 'useFetchMovies' hook
  const [marvelData, MarvelLoading, MarvelError] = useFetchMovies("Avengers", 1);
  const [netflixData, NetflixLoading, NetflixError] = useFetchMovies("Netflix", 1);
  const [showsData, ShowsLoading, ShowsError] = useFetchMovies("Shows", 1);

  return (
    <>
      <section id="section-favorite" className="px-3 xl:px-16 mb-10">
        <MovieContainer
          sectionName="Favorite"
          moviesData={favoriteList}
        />
      </section>

      <section id="section-movie" className="px-3 xl:px-16 mb-10">
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

      <section id="section-shows" className="px-3 xl:px-16 mb-10">
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
