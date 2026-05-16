import { useParams } from "react-router";
import MovieCard from "../components/section/movies/MovieCard";
import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_OMDB_API_KEY;

const RatingCard = ({ source, value }) => {
  return (
    <div className="w-60 h-20 bg-[#D9D9D9] rounded-tl-md rounded-tr-md rounded-bl-2xl rounded-br-2xl font-semibold flex flex-col gap-3 text-[19px]">
      <div className="w-full h-7 bg-(--colorBlue) rounded-md text-(--colorGray) flex items-center justify-center">
        {source}
      </div>
      <div className="w-full flex items-center justify-center">{value}</div>
    </div>
  );
};

const PageMovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    (async function fetchMovie() {
      try {
        const response = await fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        setFetchError(error?.message);
      }
    })();
  }, []);

  if (!movieDetails) {
    if (fetchError) return <p>{fetchError}</p>;

    return <p>Loading...</p>;
  }
  
  return (
    <section
      id="movie-details"
      className="px-16 pt-20 font-['Bai_Jamjuree',sans-serif] flex flex-col gap-15"
    >
      <div>
        <div className="flex gap-15">
          <div>
            <MovieCard isSimple={true} imgSize={80} poster={movieDetails?.Poster} />
          </div>
          <div className="w-full flex flex-col gap-3">
            <div className="w-full flex justify-between">
              <p className="text-[12px]">{movieDetails?.Rated}</p>
              <div className="px-3 py-1 bg-(--colorOrange) rounded-full flex justify-center items-center text-[10px] tracking-[0.2em] font-semibold text-(--colorGray)">
                {movieDetails?.Type?.toUpperCase()}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-medium">{movieDetails?.Title}</h2>
              <p className="text-[19px] font-medium">{movieDetails?.Plot}</p>
            </div>

            <div>
              <p>
                Release: <span className="font-medium">{movieDetails?.Released}</span>
              </p>
              <p>
                Genre: <span className="font-medium">{movieDetails?.Genre}</span>
              </p>
              <p>
                Runtime:
                <span className="font-medium">{movieDetails?.Runtime}</span>
              </p>
            </div>

            <div>
              <p>
                Director:
                <span className="font-medium">{movieDetails?.Director}</span>
              </p>
              <p>
                Writer: <span className="font-medium">{movieDetails?.Writer}</span>
              </p>
              <p>
                Actors: <span className="font-medium">{movieDetails?.Actors}</span>
              </p>
            </div>

            <div>
              <p>
                Language:
                <span className="font-medium">{movieDetails?.Language}</span>
              </p>
              <p>
                Country: <span className="font-medium">{movieDetails?.Country}</span>
              </p>
            </div>
            <p>
              BoxOffice: <span className="font-medium">{movieDetails?.BoxOffice}</span>
            </p>
          </div>
        </div>
        <div className="flex justify-around flex-wrap gap-7 mt-15">
          {movieDetails?.Ratings?.map((rate, i) => {
            return <RatingCard key={i} source={rate.Source} value={rate.Value} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default PageMovieDetails;
