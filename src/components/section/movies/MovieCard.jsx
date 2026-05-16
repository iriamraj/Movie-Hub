const MovieCard = ({ isSimple, imgSize }) => {
  return (
    <div className="w-fit h-fit bg-[#D9D9D9] rounded-[10px] p-2.5 shrink-0">
      <div>
        <img
          src="https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg"
          alt=""
          className={`rounded-[10px] w-${imgSize}`}
        />
      </div>
      <div className={`${isSimple ? "hidden" : "block"} mt-2`}>
        <p>Avengers End Game</p>
        <div className="flex justify-between mt-1">
          <p>2019</p>
          <p className="block bg-(--colorOrange) rounded-full px-4">7.9</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
