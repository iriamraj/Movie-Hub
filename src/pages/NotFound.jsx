import { useNavigate } from "react-router";
import NotFoundError from "../components/common/NotFoundError";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundError click={() => navigate("/")} content="Page Not Found">
      Return Home Page
    </NotFoundError>
  );
};

export default NotFound;
