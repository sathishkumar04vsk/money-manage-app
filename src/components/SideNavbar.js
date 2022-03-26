import { useHistory } from "react-router-dom";

export const SideNavbar = () => {
  const history = useHistory();
  return (
    <div className="d-flex side-navbar flex-column pt-5 p-3">
      <p className="fw-bold text-secondary fs-5">MONEY MANAGER</p>
      <button
        onClick={() => history.push("/monthly income")}
        className="mt-3 p-1 border-0 side-bar-btn rounded-pill"
      >
        Monthly Income
      </button>

      <button
        onClick={() => history.push("/monthly expense")}
        className="mt-3 p-1 border-0 side-bar-btn rounded-pill"
      >
        Monthly Expense
      </button>

      <button
        onClick={() => history.push("/yearly expense")}
        className="mt-3 p-1 border-0 side-bar-btn rounded-pill"
      >
        yearly Expense
      </button>
    </div>
  );
};
