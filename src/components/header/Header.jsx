import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center px-16 py-5">
      <p className="font-['MuseoModerno',sans-serif] font-bold">Movie Hub</p>
      <nav className="flex gap-9 items-center font-['SN_Pro',sans-serif] tracking-widest text-[12px] font-medium [&>p]:cursor-pointer">
        <a href="#section-movie">MOVIES</a>
        <a href="#section-shows">TV SHOWS</a>
        <a href="#section-people"> PEOPLE</a>
        <a href="#section-awards">AWARDS</a>
        <div
          id="header-search-bar"
          className="w-40 ml-10 bg-(--colorBlue) relative rounded-full px-5 py-1 text-(--colorGray) flex justify-center items-center cursor-pointer overflow-hidden hover:[&>div]:w-full hover:[&>div]:transition-all hover:[&>div]:duration-600"
          onClick={() => navigate("/explore-movies/Random")}
        >
          <p className="relative z-10">Explore More</p>
          <div className="absolute top-0 left-0 bg-(--colorOrange) w-0 h-full transition-all duration-600"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
