import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full flex flex-col items-center justify-center pt-20">
      <p className="text-9xl font-['MuseoModerno',sans-serif] ">404</p>
      <p className="font-['SN_Pro',sans-serif]">Page Not Found</p>
      <button
        className="bg-(--colorOrange) text-(--colorGray) rounded-full px-5 py-2 mt-5 font-['SN_Pro',sans-serif] cursor-pointer"
        onClick={() => navigate("/")}
      >
        Return Home Page
      </button>
    </section>
  );
};

export default NotFound;
