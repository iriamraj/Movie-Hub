import { useContext } from "react";
import { useNavigate } from "react-router";

//Contexts
import SearchContext from "../../context/SearchContext";
import FilterContext from "../../context/FilterContext";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useContext(SearchContext);
  const navigate = useNavigate();

  const handelSearch = () => {
    if (searchValue !== "") {
      navigate(`/explore-movies/${searchValue}`);
    }
  };

  return (
    <div className="order-1 lg:order-2 w-9/10 sm:w-7/10 md:w-6/10 lg:w-5/10 xl:w-4/10 h-11 bg-(--colorWarmGray) rounded-full flex items-center pl-5 pr-3 py-1.5 text-[16px] fontInter cursor-text justify-between border-2 border-[#00000010]">
      <input
        type="text"
        placeholder="Search for movies, tv shows..."
        className="w-full outline-none font-normal truncate"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        className="w-20 h-full px-5 bg-(--colorOrange) rounded-full flex justify-center items-center text-(--colorWarmGray) tracking-wider cursor-pointer font-semibold"
        onClick={handelSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
