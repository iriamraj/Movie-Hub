const NotFoundError = ({ click, content, children }) => {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-20">
      <p className="text-9xl font-['MuseoModerno',sans-serif] ">404</p>
      <p className="font-['SN_Pro',sans-serif]">{content}</p>
      <button
        className="bg-(--colorOrange) text-(--colorGray) rounded-full px-5 py-2 mt-5 font-['SN_Pro',sans-serif] cursor-pointer"
        onClick={click}
      >
        {children}
      </button>
    </section>
  );
};

export default NotFoundError;
