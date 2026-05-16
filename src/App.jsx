import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router";
import PageHome from "./pages/PageHome";
import PageMovieDetails from "./pages/PageMovieDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/movie-details/:movieId" element={<PageMovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
