import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { formatAmount } from "../../utilities/format";
import { removeExpense } from "../../utilities/actions";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Modal from "../wrapper/Modal";

const ExpenseItem = (props) => {
  const { item, setExpenseList, setExpenseTotal } = props;
  const user = JSON.parse(localStorage.getItem("user"));
  const [touched, setTouched] = useState(false);
  const [checked, setChecked] = useState(true);
  const handleClick = () => {
    removeExpense(user, item, setExpenseList, setExpenseTotal);
    toast.dismiss();
    toast("Expense item removed");
  };
  useEffect(() => {
    if (touched) {
      checked
        ? setExpenseTotal((state) => state + item.amount)
        : setExpenseTotal((state) => state - item.amount);
    }
  }, [checked]);

  return (
    <li className="my-3 rounded-lg border border-secondary bg-white p-5">
      <div className="flex items-center gap-5 ">
        <input
          type="checkbox"
          name={`expense_${item.id}`}
          id={`expense_${item.id}`}
          checked={checked}
          onChange={() => {
            setTouched(true);
            setChecked((state) => !state);
          }}
          className="checkbox"
        />
        <div className="flex grow items-center justify-between gap-5">
          <span>{item.name}</span>
          <span>{formatAmount(item.amount)}</span>
        </div>
        <Modal
          id={`remove_expense_${item.id}_modal`}
          valid={true}
          trigger={<Icon icon={faTrashCan} />}
          activate="Remove"
          action={handleClick}
        >
          <span className="mb-5 block text-xl font-bold">
            Remove Expense Item
          </span>
          <span>{item.name}</span>
          <span className="block text-right text-xl font-bold text-error">
            {formatAmount(item.amount)}
          </span>
        </Modal>
      </div>
    </li>
  );
};

export default ExpenseItem;
