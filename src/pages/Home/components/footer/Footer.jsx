const Footer = () => {
  return (
    <div className="bg-(--colorBlue) w-full  text-(--colorWarmGray) sm:px-16 py-10 flex flex-col justify-around text-center gap-4">
      <div className="flex flex-col gap-5 sm:flex-row items-center justify-around">
        <div>
          <p className="fontMuseoModerno font-bold cursor-pointer text-2xl">Movie Hub</p>
          <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1.5 sm:gap-3 text-[14px] fontInter [&>a]:hover:text-(--colorOrange)">
          <a href="#section-favorite">FAVORITE</a>
          <a href="#section-movie">MOVIES</a>
          <a href="#section-shows">TV SHOWS</a>
        </div>
      </div>
      <p className="text-center">Made with love ❤️ </p>
    </div>
  );
};

export default Footer;
