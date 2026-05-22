import { useNavigate } from "react-router";
import RightArrow from "../../../../../assets/icons/RightArrow";

const ShowMore = ({ sectionName }) => {
  const navigate = useNavigate();
  const ShowMoreMovies = () => {
    navigate(`/explore-movies/${sectionName}`);
  };

  return (
    <div className="w-44 h-75 flex flex-col justify-center items-center text-nowrap">
      <div
        className="w-10 h-10 bg-(--colorOrange) rounded-full flex justify-center items-center cursor-pointer"
        onClick={ShowMoreMovies}
      >
        <RightArrow />
      </div>
      <p>Show more</p>
    </div>
  );
};

export default ShowMore;
