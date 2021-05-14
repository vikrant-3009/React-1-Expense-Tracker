import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };

    props.onAddExpenseData(expenseData);

    startCollapsingHandler(true);
  };

  const [isCollapse, setIsCollapse] = useState(true);

  const startCollapsingHandler = () => {
    setIsCollapse(true);
  };

  const stopCollapsingHandler = () => {
    setIsCollapse(false);
  };

  // We are passing function as props and the reference to the above function is stored in "onSaveExpenseData"
  return (
    <div className="new-expense">
      {isCollapse && (
        <button onClick={stopCollapsingHandler}>Add New Expense</button>
      )}
      {!isCollapse && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onStartCollapsing={startCollapsingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
