import { useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "./config";

export const AddExpense = () => {
  const history = useHistory();
  const [rupees, setRupees] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");

  const onSubmithandler = () => {
    const newExpense = {
      month: "march",
      rupees: rupees,
      type: type,
      date: date,
    };
    fetch(`${API}/add-expense`, {
      method: "POST",
      body: JSON.stringify(newExpense),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/monthly expense"));
  };
  return (
    <div className="add-expense-container d-flex flex-column align-items-center">
      <h4 className="fw-bold mt-4">Add Expense</h4>
      <p className="mt-3">
        Add Expense to understand your money habits and take control of your
        spending and savings.
      </p>
      <form action="" className="mt-4 d-flex flex-column">
        {" "}
        <div className="m-2 d-flex flex-column">
          <label for="basic-salary" className="fw-bold p-1">
            Enter Expense
          </label>
          <input
            type="text"
            placeholder="₹"
            onChange={(event) => setRupees(event.target.value)}
            className="expense p-1 rounded"
          />{" "}
        </div>
        <div className="m-2 d-flex flex-column">
          <label for="expense-type" className="fw-bold p-1">
            Type of Expense
          </label>
          <select
            name="expense-type"
            onChange={(event) => setType(event.target.value)}
            id="expense-type"
          >
            <option value="select">select</option>
            <option value="Household">Household</option>
            <option value="Transport">Transport</option>
            <option value="Food and Drinks">Food and Drinks</option>
            <option value="Family & Friends">Family & Friends</option>
            <option value="Shopping">Shopping</option>
            <option value="Education">Education</option>
          </select>
        </div>
        <div className="m-2 d-flex flex-column">
          <label for="expense-date">Enter Date</label>
          <input
            type="text"
            onChange={(event) => setDate(event.target.value)}
            className="expense-date p-1 rounded"
            placeholder="dd-mm-yyyy"
          />
        </div>
      </form>
      <button
        onClick={() => onSubmithandler()}
        className=" p-1 add-expense-button border border-dark rounded-pill bg-danger text-white"
      >
        Add Expense
      </button>
    </div>
  );
};
