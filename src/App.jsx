import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router";
import PageHome from "./pages/PageHome";
import PageMovieDetails from "./pages/PageMovieDetails";
import NotFound from "./pages/NotFound";
import PageExploreMovies from "./pages/PageExploreMovies/PageExploreMovies";
import SearchContext from "./context/SearchContext";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <SearchContext.Provider value={[searchText, setSearchText]}>
              <PageHome />
            </SearchContext.Provider>
          }
        />
        <Route path="/movie-details/:movieId" element={<PageMovieDetails />} />
        <Route
          path="/explore-movies"
          element={
            <SearchContext.Provider value={[searchText, setSearchText]}>
              <PageExploreMovies />
            </SearchContext.Provider>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
