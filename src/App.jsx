import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router";
import PageHome from "./pages/PageHome";
import PageMovieDetails from "./pages/PageMovieDetails";
import NotFound from "./pages/NotFound";
import PageExploreMovies from "./pages/PageExploreMovies/PageExploreMovies";
import SearchContext from "./context/SearchContext";
import FilterContext from "./context/FilterContext";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  const [filterSelected, setFilterSelected] = useState("Random");
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <SearchContext.Provider value={[searchText, setSearchText]}>
              <FilterContext.Provider value={[filterSelected, setFilterSelected]}>
                <PageHome />
              </FilterContext.Provider>
            </SearchContext.Provider>
          }
        />
        <Route path="/movie-details/:movieId" element={<PageMovieDetails />} />
        <Route
          path="/explore-movies/:searchKeyword"
          element={
            <SearchContext.Provider value={[searchText, setSearchText]}>
              <FilterContext.Provider value={[filterSelected, setFilterSelected]}>
                <PageExploreMovies />
              </FilterContext.Provider>
            </SearchContext.Provider>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
