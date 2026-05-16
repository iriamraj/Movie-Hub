import { useNavigate } from "react-router";

const MovieCard = ({ isSimple, movieId, title, year, type, poster }) => {
  const navigate = useNavigate();
  const redirectMoviePage = () => {
    navigate(`/movie-details/${movieId}`);
  };
  return (
    <div
      className="w-fit h-fit bg-[#D9D9D9] rounded-[10px] p-2.5 shrink-0 cursor-pointer hover:bg-(--colorBlue) hover:text-(--colorGray) transition duration-300"
      onClick={redirectMoviePage}
    >
      <div
        className={`min-h-65 flex justify-center items-center overflow-hidden rounded-[10px] ${isSimple ? "w-65" : "w-44"}`}
      >
        <img
          src={poster}
          alt="Poster"
          loading="lazy"
          className={`rounded-[10px] hover:scale-[1.1] transition duration-300 ${isSimple ? "w-65" : "w-44"}`}
        />
      </div>
      <div className={`${isSimple ? "hidden" : "block"} mt-2 max-w-44`}>
        <p className="truncate">{title}</p>
        <div className="flex justify-between mt-1">
          <p>{year}</p>
          <div className="bg-(--colorOrange) rounded-full w-25 h-6 flex justify-center items-center">
            <p className="tracking-widest text-[13px] font-bold text-(--colorGray) leading-0">{type?.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
