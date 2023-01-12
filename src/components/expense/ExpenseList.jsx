import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  const { expenseList, setExpenseList, setExpenseTotal } = props;

  return (
    <ul className="my-5 mx-auto max-w-lg lg:max-w-xl">
      {expenseList.map((item) => (
        <ExpenseItem
          key={item.id}
          item={item}
          setExpenseList={setExpenseList}
          setExpenseTotal={setExpenseTotal}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
