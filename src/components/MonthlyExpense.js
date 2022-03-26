import { useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "./config";
import { useEffect } from "react";

export const MonthlyExpense = () => {
  const history = useHistory();
  const [expenses, setExpenses] = useState([]);
  const [month, setMonth] = useState("");

  console.log(expenses);
  useEffect(() => {
    fetch(`${API}/expense`, {
      method: "GET",
      // body: JSON.stringify(datas),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((result) => setExpenses(result));
  }, []);
  return (
    <div className="monthly-income-container">
      <h1 className="p-4">Seacrh by Montholy Expense</h1>
      <form action="">
        <select
          onChange={(event) => setMonth(event.target.value)}
          className="p-1 m-5"
        >
          <option value="december">december</option>
          <option value="january">january</option>
          <option value="february">february</option>
          <option value="march">march</option>
        </select>
        <button
          onClick={() => history.push("/monthly expense")}
          className="border-2 bg-dark text-white"
        >
          Onsubmit
        </button>
      </form>
      <div className="container">
        <div className="d-flex">
          <div className="col-3 text-center ">Type of Expense</div>
          <div className="col-3 text-center ">Rupee</div>
          <div className="col-3 text-center ">Month</div>
          <div className="col-3 text-center ">Date</div>
        </div>
        {expenses.map(({ month, rupees, type, date }) => (
          <div className="d-flex mt-2 p-2 bg-light">
            <div className="col-3 m text-center text-danger">{type}</div>
            <div className="col-3 text-center text-warning">{rupees}</div>
            <div className="col-3 text-center text-info">{month}</div>
            <div className="col-3 text-center text-primary">{date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
