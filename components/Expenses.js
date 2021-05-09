import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

function Expenses(props) {
  return (
    <div class="expenses">
      <ExpenseItem
        title={props.title}
        amount={props.amount}
        date={props.date}
      />
    </div>
  );
}

export default Expenses;
