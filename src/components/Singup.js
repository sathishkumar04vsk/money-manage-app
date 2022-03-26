import signup from "./signup.jpg";

export const Singup = () => {
  return (
    <div className="singup-container row m-0">
      <img src={signup} alt="" className="col-6 p-0" />

      <form className="col-6 p-5 mt-5">
        <div className="d-flex flex-column">
          <label for="">User Name</label>
          <input type="text" className="mt-3 p-2 rounded-pill border" />
        </div>
        <div className="d-flex flex-column">
          <label for="">Password</label>
          <input type="password" className="mt-3 p-2 rounded-pill border" />
        </div>
        <div className="d-flex flex-column">
          <label for="">Conform Password</label>
          <input type="password" className="mt-3 p-2 rounded-pill border" />
        </div>
        <div className="d-flex m-2 justify-content-center">
          <button className="bg-dark p-2 mt-3 w-50 text-white rounded-pill border-0">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};
