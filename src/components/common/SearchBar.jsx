import { useContext } from "react";
import SearchContext from "../../context/SearchContext";
import { useNavigate } from "react-router";

const SearchBar = ({ filterSelected, setFilterSelected }) => {
  const [searchValue, setSearchValue] = useContext(SearchContext);
  
  const navigate = useNavigate();

  const handelSearch = () => {
    // if (searchValue !== "") {
      navigate("/explore-movies");
      setFilterSelected(searchValue);
    // }
  };

  return (
    <div className="w-4/10 h-11 bg-(--colorGray) rounded-full flex items-center pl-5 pr-3 py-1.5 text-[16px] font-['Bai_Jamjuree',sans-serif] cursor-text justify-between border-2 border-[#00000010]">
      <input
        type="text"
        placeholder="Search for movies, tv shows..."
        className="w-full outline-none font-normal"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        className="w-20 h-full px-5 bg-(--colorOrange) rounded-full flex justify-center items-center text-(--colorGray) tracking-wider cursor-pointer font-semibold"
        onClick={handelSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
