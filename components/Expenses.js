import { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const saveSelectedYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpensesList = props.items.filter((expense) => {
    // getFullYear returns the date in a number format, but the filtered year is string
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          activeYear={filteredYear}
          onSelectedYear={saveSelectedYear}
        />
        <ExpensesChart expenses={filteredExpensesList}/>
        <ExpensesList items={filteredExpensesList} />
      </div>
    </div>
  );
}

export default Expenses;
