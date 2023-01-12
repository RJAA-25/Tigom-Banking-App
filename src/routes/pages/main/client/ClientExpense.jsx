import { useState } from "react";
import AddExpense from "../../../../components/expense/AddExpense";
import ExpenseList from "../../../../components/expense/ExpenseList";
import Estimate from "../../../../components/card/Estimate";

const ClientExpense = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const balance = user.balance;
  const total = user.expenses.reduce((total, item) => total + item.amount, 0);
  const [expenseList, setExpenseList] = useState(user.expenses);
  const [expenseTotal, setExpenseTotal] = useState(total);

  return (
    <>
      <h1 className="my-5 text-3xl font-extrabold lg:mb-10 lg:text-4xl">
        Expense Tracker
      </h1>
      <Estimate amount={balance - expenseTotal} />
      <AddExpense
        setExpenseList={setExpenseList}
        setExpenseTotal={setExpenseTotal}
      />
      <ExpenseList
        expenseList={expenseList}
        setExpenseList={setExpenseList}
        setExpenseTotal={setExpenseTotal}
      />
    </>
  );
};

export default ClientExpense;
