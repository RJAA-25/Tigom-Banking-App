import { formatID } from "../../utilities/format";

const SearchItem = (props) => {
  const { account, setShow, setAccount } = props;

  return (
    <li
      onClick={() => {
        setAccount(account);
        setShow(false);
      }}
      className="my-1"
    >
      <div className="flex justify-between border border-secondary bg-white shadow-lg">
        <span>
          {account.lastName}, {account.firstName}
        </span>
        <span className="font-bold">{formatID(account.id)}</span>
      </div>
    </li>
  );
};

export default SearchItem;
