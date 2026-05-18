import React from "react";

const FilterButton = ({ filterSelected, setFilterSelected, filterExpand, setFilterExpand }) => {
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
        <div onClick={() => setFilterSelected("Random")}>Random</div>
        <div onClick={() => setFilterSelected("Love")}>Love</div>
        <div onClick={() => setFilterSelected("Action")}>Action</div>
        <div onClick={() => setFilterSelected("Thriller")}>Thriller</div>
        <div onClick={() => setFilterSelected("Sci-Fi")}>Sci-Fi</div>
        <div onClick={() => setFilterSelected("Drama")}>Drama</div>
        <div onClick={() => setFilterSelected("Crime")}>Crime</div>
        <div onClick={() => setFilterSelected("Musical")}>Musical</div>
      </div>
    </div>
  );
};

export default FilterButton;
