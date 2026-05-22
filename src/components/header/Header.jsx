import { useState } from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <header className="flex justify-between items-center px-5 md:px-16 py-5 relative">
      <p
        className="fontMuseoModerno font-bold cursor-pointer text-[18px]"
        onClick={() => navigate("/")}
      >
        Movie Hub
      </p>
      <nav
        className={`gap-9 items-center fontInter tracking-widest text-[12px] [&>p]:cursor-pointer md:flex ${hamburgerOpen ? "flex flex-col py-4 justify-center items-center rounded absolute bg-(--colorWarmGray) top-full right-0 z-20 px-3" : "hidden"}`}
      >
        <a href="#section-favorite">FAVORITE</a>
        <a href="#section-movie">MOVIES</a>
        <a href="#section-shows">TV SHOWS</a>
        <div
          
          className="lg:ml-10 bg-(--colorBlue) relative rounded-full px-5 py-2 text-(--colorWarmGray) flex justify-center items-center cursor-pointer overflow-hidden hover:[&>div]:w-full hover:[&>div]:transition-all hover:[&>div]:duration-600"
          onClick={() => navigate("/explore-movies/Random")}
        >
          <p className="relative z-10 text-[14px] fontInter">Explore More</p>
          <div className="absolute top-0 left-0 bg-(--colorOrange) w-0 h-full transition-all duration-600"></div>
        </div>
      </nav>
      <nav className="md:hidden">
        <div
          className="text-2xl font-semibold cursor-pointer"
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
        >
          ☰
        </div>
      </nav>
    </header>
  );
};

export default Header;
