const NotFoundError = ({ click, content, children }) => {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-20">
      <p className="text-9xl fontMuseoModerno ">404</p>
      <p className="fontInter">{content}</p>
      <button
        className="bg-(--colorOrange) text-(--colorWarmGray) rounded-full px-5 py-2 mt-5 fontInter cursor-pointer"
        onClick={click}
      >
        {children}
      </button>
    </section>
  );
};

export default NotFoundError;
