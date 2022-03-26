import { useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "./config";

export const AddIncome = () => {
  const history = useHistory();
  const [rupees, setRupees] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");

  const onSubmithandler = () => {
    const newIncome = {
      month: "march",
      rupees: rupees,
      type: type,
      date: date,
    };
    fetch(`${API}/add-income`, {
      method: "POST",
      body: JSON.stringify(newIncome),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/monthly income"));
  };

  return (
    <div className="add-income-container d-flex flex-column align-items-center">
      <h4 className="fw-bold mt-4">Add Income</h4>
      <p className="mt-3">
        Add income to understand your money habits and take control of your
        spending and savings.
      </p>
      <form action="" className="mt-4 d-flex flex-column">
        <div className="m-2 d-flex flex-column">
          <label for="income" className="fw-bold p-1">
            Enter the Income
          </label>
          <input
            id="rupees"
            name="rupees"
            type="text"
            className="income p-1 rounded"
            placeholder="₹"
            onChange={(event) => setRupees(event.target.value)}
          />
        </div>

        <div className="m-2 d-flex flex-column">
          <label for="income-type" className="fw-bold p-1">
            Type of Income
          </label>
          <select
            name="type "
            id="income-type"
            onChange={(event) => setType(event.target.value)}
          >
            <option value="Basic salary">Basic salary</option>
            <option value="Allowances">Allowances</option>
            <option value="Commission">Commission</option>
            <option value="select">select</option>
            <option value="income from savings">
              Income from Savings & Investments
            </option>
            <option value="Pension">Pension</option>
            <option value="Distribution from Insurance Plan">
              Distribution from Insurance Plan
            </option>
            <option value="Government Assistance">Government Assistance</option>
            <option value="Gifts from family & friends">
              Gifts from family & friends
            </option>
          </select>
        </div>
        <div className="m-2 d-flex flex-column">
          <label for="income-date" className="fw-bold p-1">
            Enter Date
          </label>
          <input
            id="date"
            name="date"
            type="text"
            onChange={(event) => setDate(event.target.value)}
            className="income-date p-1 rounded"
            placeholder="dd-mm-yyyy"
          />
        </div>
      </form>
      <button
        onClick={() => onSubmithandler()}
        className="add-income-button p-1 border border-dark rounded-pill bg-success text-white"
      >
        Add Income
      </button>
    </div>
  );
};
