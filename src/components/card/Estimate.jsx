import { formatAmount } from "../../utilities/format";

const Estimate = (props) => {
  const { amount } = props;
  return (
    <div className="sticky top-0 my-5 mx-auto max-w-xl rounded-lg border border-secondary bg-white p-10 text-center shadow-lg lg:max-w-2xl">
      <span
        className={`block text-2xl font-bold lg:text-3xl ${
          amount <= 0 ? "text-error" : ""
        }`}
      >
        {formatAmount(amount)}
      </span>
      <span className="lg:text-lg">Estimated Balance</span>
    </div>
  );
};

export default Estimate;
