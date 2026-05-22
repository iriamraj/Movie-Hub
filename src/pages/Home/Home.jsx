import Footer from "./components/footer/Footer";
import SectionHero from "./components/section/hero/SectionHero";
import SectionMovies from "./components/section/movies/SectionMovies";

const PageHome = () => {
  return (
    <>
      <SectionHero />
      <SectionMovies />
      <Footer/>
    </>
  );
};

export default PageHome;
