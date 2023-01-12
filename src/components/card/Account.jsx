import { formatAmount, formatID } from "../../utilities/format";

const AccountCard = (props) => {
  const {
    account: { id, lastName, firstName, balance },
    changeAccount,
  } = props;
  const current = JSON.parse(localStorage.getItem("user"));
  const showBalance = current.role === "admin" || current.id === id;
  const showButton = current.role === "admin" || current.id !== id;

  const handleClick = () => {
    changeAccount(null);
  };

  return (
    <div className="mx-auto mt-5 mb-10 flex max-w-lg flex-col rounded-lg border border-secondary bg-white p-5 shadow-lg lg:max-w-xl">
      <span className="text-xl font-bold">{formatID(id)}</span>
      <span>
        {lastName}, {firstName}
      </span>
      {showBalance && (
        <>
          <span className="mt-5 text-lg">{formatAmount(balance)}</span>
          <span>Account Balance</span>
        </>
      )}
      {showButton && (
        <button onClick={handleClick} className="btn-sm btn self-end">
          Change
        </button>
      )}
    </div>
  );
};

export default AccountCard;
