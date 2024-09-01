import useAuth from "../utils/useAuth";
import { useNavigate } from "react-router-dom";

const Protected = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();

  if (isAuthenticated === null) {
    return <h1>Loading...</h1>;
  }

  if (isAuthenticated === false) {
    navigate("/");
    return;
  }

  const handleClick = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="text-center mt-3">
      <h1>This is protected Page</h1>
      <button
        type="button"
        className="btn btn-danger mt-2"
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
};

export default Protected;
