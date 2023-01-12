import { formatAmount } from "../../utilities/format";

const Balance = (props) => {
  const {
    account: { role = "admin", balance },
    showHistory,
    toggleHistory,
  } = props;

  return (
    <div
      className="sticky top-0 my-5 mx-auto max-w-xl rounded-lg border border-secondary bg-white p-10 pb-5 text-center shadow-lg hover:cursor-pointer lg:max-w-2xl"
      onClick={toggleHistory}
    >
      <span className="block text-2xl font-bold lg:text-3xl">
        {formatAmount(balance)}
      </span>
      <span className="lg:text-lg">
        {role === "admin" ? "Tigom Bank" : "Account"} Balance
      </span>
      <p className="mt-5 text-sm text-info lg:text-base">
        {showHistory ? "Hide History" : "Show History"}
      </p>
    </div>
  );
};

export default Balance;
