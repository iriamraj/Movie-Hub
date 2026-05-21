import { useNavigate } from "react-router";

const FilterOption = ({ name }) => {
  const navigate = useNavigate();
  return <div onClick={() => navigate(`/explore-movies/${name}`)}>{name}</div>;
};

const FilterButton = ({ searchKeyword, filterExpand, setFilterExpand }) => {
  return (
    <div
      className={`w-40 h-10 relative border px-3 flex items-center justify-between ${filterExpand ? "rounded-t-2xl" : "rounded-2xl"} bg-(--colorBlue) text-(--colorGray)`}
      onClick={() => setFilterExpand(!filterExpand)}
    >
      <p className="w-30 truncate ">Filter: {searchKeyword}</p>
      <div className="w-5 h-5 rounded-full bg-black"></div>
      <div
        className={`${filterExpand ? "flex" : "hidden"} flex-col justify-center items-center w-full  shadow-inner border-[#00000020] absolute top-full left-0 bg-(--colorGray) z-10 rounded-b-2xl text-black overflow-hidden [&>div]:w-full [&>div]:text-center [&>div]:hover:bg-(--colorBlue) [&>div]:py-2 [&>div]:border-t-[#00000020] [&>div]:border-t-2 [&>div]:hover:text-(--colorGray) [&>div]:transition [&>div]:duration-300`}
      >
        <FilterOption name="Random" />
        <FilterOption name="Love" />
        <FilterOption name="Action" />
        <FilterOption name="Thriller" />
        <FilterOption name="Sci-Fi" />
        <FilterOption name="Drama" />
        <FilterOption name="Crime" />
        <FilterOption name="Musical" />
      </div>
    </div>
  );
};

export default FilterButton;
