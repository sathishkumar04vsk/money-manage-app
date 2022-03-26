import { useHistory } from "react-router-dom";

export const TopNavbar = () => {
  const history = useHistory();
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom d-flex justify-content-evenly">
      <input
        type="text"
        className="search-input rounded-pill border border-secondary p-1 "
        placeholder="Search.."
      />
      <button
        onClick={() => history.push("add-income")}
        className="border-0 nav-income-button text-success bg-white"
      >
        Add Income
      </button>
      <button
        onClick={() => history.push("add-expense")}
        className="text-danger nav-expense-button border-0 bg-white "
      >
        Add Expense
      </button>
      <button
        onClick={() => history.push("/")}
        className="border-0 bg-primary text-white rounded-pill btn"
      >
        Logout
      </button>
    </nav>
  );
};
