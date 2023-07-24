import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses(props) {
  return (
    <>
      <ExpenseItem expenses={props.expenseData[0]} />
      <ExpenseItem expenses={props.expenseData[1]} />
      <ExpenseItem expenses={props.expenseData[2]} />
      <ExpenseItem expenses={props.expenseData[3]} />
    </>
  );
}
