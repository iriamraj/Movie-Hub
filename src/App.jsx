import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Header from "./components/header/Header";

//Pages
import PageHome from "./pages/Home/Home";
import PageMovieDetails from "./pages/MovieDetails/MovieDetails";
import NotFound from "./pages/NotFound/NotFound";
import PageExploreMovies from "./pages/ExploreMovies/ExploreMovies";

//Contexts
import SearchContext from "./context/SearchContext";
import FilterContext from "./context/FilterContext";
import FavoriteListContext from "./context/FavoriteListContext";
import useFetchLocalStorage from "./hooks/useFetchLocalStorage";

function App() {
  const [searchBarText, setSearchBarText] = useState("");
  const [filterSelected, setFilterSelected] = useState("Random");

  const [favoriteList, setFavoriteList] = useFetchLocalStorage("favoriteList");

  return (
    <SearchContext.Provider value={[searchBarText, setSearchBarText]}>
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
