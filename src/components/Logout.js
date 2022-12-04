import { useNavigate } from "react-router-dom";

const Logout = () => {
  localStorage.removeItem("token");
  const navigate = useNavigate("");
  return (
    <>
      {!localStorage.getItem("token") ? navigate("/login") : <p>not logout</p>}
    </>
  );
};

export default Logout;
