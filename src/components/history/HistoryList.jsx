import HistoryItem from "../history/HistoryItem";

const HistoryList = (props) => {
  const {
    account: { transactions, id },
  } = props;

  return (
    <ul className="my-5 mx-auto max-w-lg lg:max-w-xl">
      {transactions.map((transaction) => (
        <HistoryItem
          key={Math.round(Math.random() * 10_000_000_000)}
          userID={id}
          transaction={transaction}
        />
      ))}
    </ul>
  );
};

export default HistoryList;
