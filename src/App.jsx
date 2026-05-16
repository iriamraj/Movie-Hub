import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router";
import PageHome from "./pages/PageHome";
import PageMovieDetails from "./pages/PageMovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/movie-details" element={<PageMovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
