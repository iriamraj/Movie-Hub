const ShowMore = () => {
  return (
    <div className="w-44 h-75 flex flex-col justify-center items-center text-nowrap">
      <div className="w-10 h-10 bg-(--colorOrange) rounded-full flex justify-center items-center cursor-pointer">
        <img src="https://www.svgrepo.com/show/535161/arrow-right-from-line.svg" alt="" width={25}/>
      </div>
      <p>Show more</p>
    </div>
  );
};

export default ShowMore;
