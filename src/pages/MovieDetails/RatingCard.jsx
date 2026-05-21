const RatingCard = ({ source, value }) => {
  return (
    <div className="w-60 h-20 bg-[#D9D9D9] rounded-tl-md rounded-tr-md rounded-bl-2xl rounded-br-2xl font-semibold flex flex-col gap-3 text-[19px]">
      <div className="w-full h-7 bg-(--colorBlue) rounded-md text-(--colorGray) flex items-center justify-center">
        {source}
      </div>
      <div className="w-full flex items-center justify-center">{value}</div>
    </div>
  );
};

export default RatingCard;
