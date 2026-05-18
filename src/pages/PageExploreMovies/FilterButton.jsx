import React from "react";
import { useNavigate } from "react-router";
const FilterButton = ({ filterSelected, setFilterSelected, filterExpand, setFilterExpand }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`w-40 h-10 relative border px-3 flex items-center justify-between ${filterExpand ? "rounded-t-2xl" : "rounded-2xl"} bg-(--colorBlue) text-(--colorGray)`}
      onClick={() => setFilterExpand(!filterExpand)}
    >
      <p>Filter: {filterSelected}</p>
      <div className="w-5 h-5 rounded-full bg-black"></div>
      <div
        className={`${filterExpand ? "flex" : "hidden"} flex-col justify-center items-center w-full  shadow-inner border-[#00000020] absolute top-full left-0 bg-(--colorGray) z-10 rounded-b-2xl text-black overflow-hidden [&>div]:w-full [&>div]:text-center [&>div]:hover:bg-(--colorBlue) [&>div]:py-2 [&>div]:border-t-[#00000020] [&>div]:border-t-2 [&>div]:hover:text-(--colorGray) [&>div]:transition [&>div]:duration-300`}
      >
        <div onClick={() => navigate("/explore-movies/Random")}>Random</div>
        <div onClick={() => navigate("/explore-movies/Love")}>Love</div>
        <div onClick={() => navigate("/explore-movies/Action")}>Action</div>
        <div onClick={() => navigate("/explore-movies/Thriller")}>Thriller</div>
        <div onClick={() => navigate("/explore-movies/Sci-Fi")}>Sci-Fi</div>
        <div onClick={() => navigate("/explore-movies/Drama")}>Drama</div>
        <div onClick={() => navigate("/explore-movies/Crime")}>Crime</div>
        <div onClick={() => navigate("/explore-movies/Musical")}>Musical</div>
      </div>
    </div>
  );
};

export default FilterButton;
