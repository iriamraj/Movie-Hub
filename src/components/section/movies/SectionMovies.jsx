import { useEffect, useState } from "react";
import MovieContainer from "./MovieContainer";
const apiKey = import.meta.env.VITE_OMDB_API_KEY;

const SectionMovies = () => {
  const [marvelMovies, setMarvelMovies] = useState(null);
  const [netflixMovies, setNetflixMovies] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=Marvel&page=1&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setMarvelMovies(data.Search);
      });

    fetch(`https://www.omdbapi.com/?s=Netflix&page=1&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setNetflixMovies(data.Search);
      });
  }, []);

  return (
    <section id="section-movie" className="px-16 mb-30">
      <MovieContainer sectionName="Marvel" moviesData={marvelMovies} />
      <MovieContainer sectionName="Netflix" moviesData={netflixMovies} />
    </section>
  );
};

export default SectionMovies;
