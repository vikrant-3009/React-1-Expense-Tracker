// import { useState } from "react"

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

// "Props" is basically an attribute through which we can pass objects & it's propperties to custom components
function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);

  // Click Handler Function
  // const clickHandler = () => {
  //   setTitle("Updated");
  //   console.log(title);
  // };

  return (
    <li>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">Rs {props.amount}/-</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </div>
    </li>
  );
}

export default ExpenseItem;
