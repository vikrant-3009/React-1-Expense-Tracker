import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

// "Props" is basically an attribute through which we can pass objects & it's propperties to custom components
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs {props.amount}/-</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
