import "./App.css";
import { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { SideNavbar } from "./components/SideNavbar";
import { TopNavbar } from "./components/TopNavbar";
import { AddIncome } from "./components/AddIncome";
import { AddExpense } from "./components/AddExpense";
import { LoginPage } from "./components/LoginPage";
import { Singup } from "./components/Singup";
import { MonthlyIncome } from "./components/MonthlyIncome";
import { MonthlyExpense } from "./components/MonthlyExpense";

function App() {
  return (
    <Fragment>
      <div className="dashboard m-0 row">
        <div className="col-2 p-0 side-navbar-container">
          <SideNavbar />
        </div>
        <div className="div p-0 col-10">
          <TopNavbar />
          <div className="main-route-container">
            <Switch>
              <Route path="/" exact>
                <LoginPage />
              </Route>
              <Route path="/login"></Route>
              <Route path="/signup">
                <Singup />
              </Route>
              <Route path="/add-income">
                {" "}
                <AddIncome />
              </Route>
              <Route path="/add-expense">
                <AddExpense />
              </Route>
              <Route path="/monthly income">
                {" "}
                <MonthlyIncome />
              </Route>

              <Route path="/monthly expense">
                <MonthlyExpense />
              </Route>

              <Route path="/yearly expense">
                <MonthlyIncome />
                <MonthlyExpense />
              </Route>
              <Route path="**">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

const NotFound = () => {
  return <div className="not-found"></div>;
};

export default App;
