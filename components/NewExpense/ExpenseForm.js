import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, changeEnteredTitle] = useState("");
  const [enteredAmount, changeEnteredAmount] = useState("");
  const [enteredDate, changeEnteredDate] = useState("");

  // "event" object is generated automatically when an event ("onChange" in this case) is occoured
  const titleChangeHandler = (event) => {
    changeEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    changeEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    changeEnteredDate(event.target.value);
  };

  // Event Handler when the submit button is clicked
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // "OnSaveExpenseData" key is actually a function passed as props
    props.onSaveExpenseData(expenseData);

    // After form submition, the input fields will be reseted.
    changeEnteredTitle("");
    changeEnteredAmount("");
    changeEnteredDate("");
  };

  return (
    // "onSubmit" Event Handler is generated when the submit button is pressed inside the form
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0"
            step="1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button
          type="button"
          value="Cancel"
          onClick={props.onStartCollapsing}>
          Cancel
        </button>
        <button type="submit" value="Add Expense">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
