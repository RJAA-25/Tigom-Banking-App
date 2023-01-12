import { useState } from "react";
import { toast } from "react-hot-toast";
import { addExpense } from "../../utilities/actions";
import {
  checkExpenseName,
  checkExpenseAmount,
} from "../../utilities/validations";
import NumberInput from "../form/NumberInput";
import TextInput from "../form/TextInput";
import Modal from "../wrapper/Modal";

const AddExpense = (props) => {
  const { setExpenseList, setExpenseTotal } = props;
  const user = JSON.parse(localStorage.getItem("user"));
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [reset, setReset] = useState(false);
  const handleSubmit = () => {
    const expense = {
      id: Math.round(Math.random() * 10_000_000_000),
      name,
      amount,
    };
    addExpense(user, expense);
    setExpenseList((state) => [expense, ...state]);
    setExpenseTotal((state) => state + amount);
    toast.dismiss();
    toast.success("Expense item added");
    setReset(true);
  };

  return (
    <div className="mx-auto max-w-xl lg:max-w-2xl">
      <Modal
        id="add_expense_modal"
        valid={true}
        trigger="Add Expense"
        activate="Add"
        action={handleSubmit}
        allow={name && amount ? true : false}
      >
        <span className="mb-5 block text-xl font-bold">Add Expense Item</span>
        <TextInput
          id="expense_name"
          name="Name"
          validation={checkExpenseName}
          setValidInput={setName}
          reset={reset}
          setReset={setReset}
        />
        <NumberInput
          id="expense_amount"
          name="Amount"
          validation={checkExpenseAmount}
          setValidInput={setAmount}
          reset={reset}
          setReset={setReset}
        />
      </Modal>
    </div>
  );
};

export default AddExpense;
