import MovieCard from "../components/section/movies/MovieCard";

const RatingCard = () => {
  return (
    <div className="w-60 h-20 bg-[#D9D9D9] rounded-tl-md rounded-tr-md rounded-bl-2xl rounded-br-2xl font-semibold flex flex-col gap-3 text-[19px]">
      <div className="w-full h-7 bg-(--colorBlue) rounded-md text-(--colorGray) flex items-center justify-center">
        IMD
      </div>
      <div className="w-full flex items-center justify-center">7.6/10</div>
    </div>
  );
};

const PageMovieDetails = () => {
  return (
    <section
      id="movie-details"
      className="px-16 pt-20 font-['Bai_Jamjuree',sans-serif] flex flex-col gap-15"
    >
      <div className="flex gap-15">
        <div>
          <MovieCard isSimple={true} imgSize={50} />
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-full flex justify-between">
            <p className="text-[12px]">PG-13</p>
            <div className="w-16 h-6 bg-(--colorOrange) rounded-full flex justify-center items-center text-[10px] tracking-[0.2em] font-semibold text-(--colorGray)">
              MOVIE
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-medium">Guardians of the Galaxy: Vol. 2</h2>
            <p className="text-[19px] font-medium">
              The Guardians struggle to keep together as a team while dealing with their personal
              family issues, notably Star-Lord's encounter with his father, the ambitious celestial
              being Ego.
            </p>
          </div>

          <div>
            <p>
              Release: <span className="font-medium">05 May 2017</span>
            </p>
            <p>
              Genre: <span className="font-medium">Action, Adventure, Comedy</span>
            </p>
            <p>
              Runtime:
              <span className="font-medium">136 min</span>
            </p>
          </div>

          <div>
            <p>
              Director:
              <span className="font-medium">James Gunn</span>
            </p>
            <p>
              Writer: <span className="font-medium">James Gunn, Dan Abnett, Andy Lanning</span>
            </p>
            <p>
              Actors: <span className="font-medium">Chris Pratt, Zoe Saldaña, Dave Bautista</span>
            </p>
          </div>

          <div>
            <p>
              Language:
              <span className="font-medium">English</span>
            </p>
            <p>
              Country: <span className="font-medium">United States</span>
            </p>
          </div>
          <p>
            BoxOffice: <span className="font-medium">$389,813,101</span>
          </p>
        </div>
      </div>
      <div className="flex justify-around flex-wrap gap-7 ">
        <RatingCard />
        <RatingCard />
        <RatingCard />
        <RatingCard />
        <RatingCard />
      </div>
    </section>
  );
};

export default PageMovieDetails;
