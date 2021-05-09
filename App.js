import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses";

function App() {
  // "Expenses" is a list of objects
  const expenses = [
    {
      id: "e1",
      title: "Detergent",
      amount: 700,
      date: new Date(2020, 11, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 25000,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 4000,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 5000,
      date: new Date(2021, 4, 12),
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Expenses
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <Expenses
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <Expenses
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <Expenses
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
