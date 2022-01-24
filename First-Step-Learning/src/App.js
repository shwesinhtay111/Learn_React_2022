
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance 1",
      amount: 234.55,
      date: new Date(2020, 6, 17),
    },
    {
      id: "e2",
      title: "Car Insurance 2",
      amount: 234.55,
      date: new Date(2020, 7, 17),
    },
    {
      id: "e3",
      title: "Car Insurance 3",
      amount: 234.55,
      date: new Date(2022, 8, 17),
    },
    {
      id: "e4",
      title: "Car Insurance 4",
      amount: 234.55,
      date: new Date(2022, 9, 17),
    },
    {
      id: "e5",
      title: "Car Insurance 5",
      amount: 234.55,
      date: new Date(2022, 7, 17),
    },
  ];
  const addExpenseHandler = expense => {
    console.log("app.js");
    console.log(expense);
  }
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}></NewExpenses>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
