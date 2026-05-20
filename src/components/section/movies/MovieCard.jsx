import { useNavigate } from "react-router";
import favoriteOff from "../../../assets/icons/favorite-off.svg";
import favoriteOn from "../../../assets/icons/favorite-on.svg";
import { useContext } from "react";
import FavoriteListContext from "../../../context/FavoriteListContext";

const MovieCard = ({ isSimple, movie, movieId, title, year, type, poster, imgOpacity }) => {
  const [favoriteList, setFavoriteList] = useContext(FavoriteListContext);
  const navigate = useNavigate();

  const isFavorite = favoriteList?.some((elem) => elem.imdbID === movieId);

  const redirectMoviePage = () => {
    !isSimple && navigate(`/movie-details/${movieId}`);
  };

  const handleFavorite = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      setFavoriteList((prev) => prev.filter((elem) => elem.imdbID !== movieId));
    } else {
      setFavoriteList((prev) => (prev ? [...prev, movie] : [movie]));
    }
  };

  return (
    <div
      className="w-fit h-fit bg-[#D9D9D9] rounded-[10px] p-2.5 shrink-0 cursor-pointer hover:bg-(--colorBlue) hover:text-(--colorGray) transition duration-300"
      onClick={redirectMoviePage}
    >
      <div
        className={`min-h-65 flex justify-center items-center overflow-hidden rounded-[10px] ${isSimple ? "w-65" : "w-44"} relative`}
      >
        <div
          className="w-7 h-7 bg-(--colorGray) absolute top-[3%] right-[5%] z-20 rounded flex items-center justify-center shadow-[0_0_5px_1px_#00000040]"
          onClick={handleFavorite}
        >
          <img src={isFavorite ? favoriteOn : favoriteOff} alt="favorite" className="w-6" />
        </div>
        <img
          src={poster}
          alt="Poster"
          loading="lazy"
          className={`${imgOpacity || ""} rounded-[10px] hover:scale-[1.1] transition duration-300 ${isSimple ? "w-65" : "w-44"}`}
        />
      </div>
      <div className={`${isSimple ? "hidden" : "block"} mt-2 max-w-44`}>
        <p className="truncate">{title}</p>
        <div className="flex justify-between mt-1">
          <p>{year}</p>
          <div className="bg-(--colorOrange) rounded-full w-25 h-6 flex justify-center items-center">
            <p className="tracking-widest text-[13px] font-bold text-(--colorGray) leading-0">
              {type?.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;