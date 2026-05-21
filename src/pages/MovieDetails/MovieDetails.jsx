import { useParams } from "react-router";
import { useEffect, useState } from "react";
import MovieCard from "../../components/common/MovieCard";
import RatingCard from "./RatingCard";
import useFetchMovies from "../../hooks/useFetchMovies";
const apiKey = import.meta.env.VITE_OMDB_API_KEY;

const MovieDetailSection = ({ movieDetails, children }) => {
  return (
    <div>
      {children.map((elem, i) => {
        return (
          <p key={i}>
            {elem}: <span className="font-medium">{movieDetails && movieDetails[elem]}</span>
          </p>
        );
      })}
    </div>
  );
};

const PageMovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, movieLoading, movieError] = useFetchMovies(movieId);

  if (movieLoading) return <p>Loading...</p>;
  if (movieError) {
    if (movieError.message === "Failed to fetch") return <p>{movieError.message}</p>;
    return <p>{movieError}</p>;
  }

  return (
    <section
      id="movie-details"
      className="px-16 pt-20 font-['Bai_Jamjuree',sans-serif] flex flex-col gap-15"
    >
      <div>
        <div className="flex gap-15">
          <div>
            <MovieCard
              isSimple={true}
              imgSize={80}
              poster={movieDetails?.Poster}
              movieId={movieId}
              movie={movieDetails}
            />
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
            <MovieDetailSection movieDetails={movieDetails}>
              {["Released", "Genre", "Runtime"]}
            </MovieDetailSection>

            <MovieDetailSection movieDetails={movieDetails}>
              {["Director", "Writer", "Actors"]}
            </MovieDetailSection>

            <MovieDetailSection movieDetails={movieDetails}>
              {["Language", "Country"]}
            </MovieDetailSection>

            <MovieDetailSection movieDetails={movieDetails}>{["BoxOffice"]}</MovieDetailSection>
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
