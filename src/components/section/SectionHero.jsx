import { useContext } from "react";
import SearchBar from "../common/SearchBar";
import FilterContext from "../../context/FilterContext";

const SectionHero = () => {
  const [filterSelected, setFilterSelected] = useContext(FilterContext);
  return (
    <section
      id="section-hero"
      className="bg-(--colorBlue) flex flex-col items-center justify-center py-25 gap-10"
    >
      <h1 className="text-3xl font-['Bai Jamjuree',sans-serif] font-semibold text-(--colorGray) text-center">
        Millions of movies, TV shows and people to discover. <br />
        Explore now.
      </h1>
      <SearchBar filterSelected={filterSelected} setFilterSelected={setFilterSelected} />
    </section>
  );
};

export default SectionHero;
