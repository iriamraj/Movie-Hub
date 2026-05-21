const RatingCard = ({ source, value }) => {
  return (
    <div className="h-20 bg-[#D9D9D9] rounded-tl-md rounded-tr-md rounded-bl-2xl rounded-br-2xl font-semibold flex flex-col gap-3 text-[19px]">
      <div className="w-full h-7 bg-(--colorBlue) rounded-md text-(--colorWarmGray) flex items-center justify-center fontSync px-2">
        {source}
      </div>
      <div className="w-full flex items-center justify-center fontInter font-medium">{value}</div>
    </div>
  );
};

export default RatingCard;
