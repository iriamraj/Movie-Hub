const Footer = () => {
  return (
    <div className="bg-(--colorBlue) w-full h-60 text-(--colorWarmGray) px-16 py-10 flex flex-col justify-around">
      <div className="flex items-center justify-around">
        <div>
          <p className="fontMuseoModerno font-bold cursor-pointer text-2xl">Movie Hub</p>
          <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 text-[14px] fontInter [&>a]:hover:text-(--colorOrange)">
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
