import { useHistory } from "react-router-dom";
import loginpng from "./loginpage.jpg";

export const LoginPage = () => {
  const history = useHistory();
  return (
    <div
      className="login-container d-flex
     "
    >
      <img src={loginpng} alt="" className="col-6" />
      <form action="" className="col-6 mt-5 p-5 login-page-image">
        <div className="d-flex mt-5  flex-column">
          <label for="">User Id</label>
          <input type="text" className="mt-3 p-2 border rounded-pill" />
        </div>
        <div className="d-flex flex-column">
          <label for="">Password</label>
          <input type="password" className="mt-3 p-2 border rounded-pill" />
        </div>
        <div className="d-flex m-2 justify-content-center">
          <button className="bg-dark w-50 p-2 mt-5 text-white rounded-pill border-0">
            Login
          </button>
        </div>
        <p className="d-flex mt-3 justify-content-center">
          Not on Money Manager?{" "}
          <span
            onClick={() => history.push("/signup")}
            className="fw-bold border-bottom border-dark"
          >
            Create an account
          </span>
        </p>
      </form>
    </div>
  );
};
