import ShowMore from "./ShowMore";
import MovieCard from "./MovieCard";

const MovieContainer = ({ sectionName, moviesData }) => {

  return (
    <div className="font-['Bai_Jamjuree',sans-serif] font-semibold">
      <h2 className="my-4">{sectionName} movies</h2>
      <div className="w-full flex overflow-x-scroll gap-7">
        {moviesData
          ? moviesData.map((movie) => {
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
            })
          : "loading..."}
        <ShowMore />
      </div>
    </div>
  );
};

export default MovieContainer;
