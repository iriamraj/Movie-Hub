import ShowMore from "./ShowMore";
import MovieCard from "./MovieCard";

const MovieContainer = () => {
  return (
    <div className="font-['Bai Jamjuree',sans-serif] font-semibold">
      <h2 className="my-4">Marvel movies</h2>
      <div className="w-full flex overflow-x-scroll gap-7">
        <MovieCard imgSize={44}/>
        <MovieCard imgSize={44}/>
        <MovieCard imgSize={44}/>
        <MovieCard imgSize={44}/>
        <MovieCard imgSize={44}/>
        <MovieCard imgSize={44}/>
        <MovieCard imgSize={44}/>
        <MovieCard imgSize={44}/>
        <MovieCard imgSize={44}/>
        <ShowMore />
      </div>
    </div>
  );
};

export default MovieContainer;
