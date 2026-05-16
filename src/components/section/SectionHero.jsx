import { useState } from "react";

const SectionHero = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <section id="section-hero" className="bg-(--colorBlue) flex flex-col items-center justify-center py-25 gap-10">
      <h1 className="text-3xl font-['Bai Jamjuree',sans-serif] font-semibold text-(--colorGray) text-center">
        Millions of movies, TV shows and people to discover. <br />
        Explore now.
      </h1>
      <div className="w-4/10 h-11 bg-(--colorGray) rounded-full flex items-center pl-5 pr-3 py-1.5 text-[16px] font-['Bai_Jamjuree',sans-serif] cursor-text justify-between">
        <input
          type="text"
          placeholder="Search for movies, tv shows..."
          className="w-full outline-none font-normal"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="w-20 h-full px-5 bg-(--colorOrange) rounded-full flex justify-center items-center text-(--colorGray) tracking-wider cursor-pointer font-semibold">
          Search
        </button>
      </div>
    </section>
  );
};

export default SectionHero;
