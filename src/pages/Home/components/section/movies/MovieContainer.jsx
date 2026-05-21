import ShowMore from "./ShowMore";
import MovieCard from "../../../../../components/common/MovieCard";

const MovieContainer = ({ sectionName, moviesData, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) {
    if (error.message === "Failed to fetch") return <p>{error}</p>;
    if (error === "Movie not found!") return <p>{error}</p>;
  }

  if (moviesData.length === 0)
    return (
      <div>
        <h2 className="my-4 fontSync font-semibold">{sectionName}</h2>
        <p className="text-black/30 m-auto block">
          {sectionName === "Favorite" ? "You have no Favorite Movies!" : "Movies not found!"}
        </p>
      </div>
    );

  return (
    <div className="">
      <h2 className="my-4 fontSync font-semibold">{sectionName}</h2>
      <div className="w-full flex overflow-x-scroll gap-7">
        {moviesData?.map((movie) => {
          return (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              movieId={movie.imdbID}
              imgSize={44}
              title={movie.Title}
              year={movie.Year}
              type={movie.Type}
              poster={movie.Poster}
            />
          );
        })}
        {sectionName !== "Favorite" && <ShowMore sectionName={sectionName} />}
      </div>
    </div>
  );
};

export default MovieContainer;
