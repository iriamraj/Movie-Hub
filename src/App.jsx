import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Header from "./components/header/Header";
import PageHome from "./pages/PageHome";
import PageMovieDetails from "./pages/PageMovieDetails";
import NotFound from "./pages/NotFound";
import PageExploreMovies from "./pages/PageExploreMovies/PageExploreMovies";

import SearchContext from "./context/SearchContext";
import FilterContext from "./context/FilterContext";

import FavoriteListContext from "./context/FavoriteListContext";

function App() {
  const [searchText, setSearchText] = useState("");
  const [filterSelected, setFilterSelected] = useState("Random");
  const [favoriteList, setFavoriteList] = useState(() => {
    return JSON.parse(localStorage.getItem("favoriteList")) || [];
  });
  
  useEffect(() => {
    localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
  }, [favoriteList]);

  return (
    <SearchContext.Provider value={[searchText, setSearchText]}>
      <FilterContext.Provider value={[filterSelected, setFilterSelected]}>
        <FavoriteListContext.Provider value={[favoriteList, setFavoriteList]}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<PageHome />} />
              <Route path="/movie-details/:movieId" element={<PageMovieDetails />} />
              <Route path="/explore-movies/:searchKeyword" element={<PageExploreMovies />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </FavoriteListContext.Provider>
      </FilterContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
