import { useNavigate } from "react-router";

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
        <img
          src="https://www.svgrepo.com/show/535161/arrow-right-from-line.svg"
          alt="Arrow"
          width={25}
          loading="lazy"
        />
      </div>
      <p>Show more</p>
    </div>
  );
};

export default ShowMore;
