import ShowMore from "./ShowMore";
import MovieCard from "./MovieCard";

const MovieContainer = ({ sectionName, moviesData, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) {
    if (error.message === "Failed to fetch") return <p>{error}</p>;
    if (error === "Movie not found!") return <p>{error}</p>;
  }

  return (
    <div className="font-['Bai_Jamjuree',sans-serif] font-semibold">
      <h2 className="my-4">{sectionName}</h2>
      <div className="w-full flex overflow-x-scroll gap-7">
        {moviesData?.map((movie) => {
          return (
            <MovieCard
              key={movie.imdbID}
              movieId={movie.imdbID}
              imgSize={44}
              title={movie.Title}
              year={movie.Year}
              type={movie.Type}
              poster={movie.Poster}
            />
          );
        })}
        <ShowMore sectionName={sectionName} />
      </div>
    </div>
  );
};

export default MovieContainer;
