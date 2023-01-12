import { useState } from "react";
import { getDateTime } from "../../utilities/datetime";
import { formatAmount, formatID } from "../../utilities/format";

const HistoryItem = (props) => {
  const {
    userID,
    transaction: {
      id = null,
      amount,
      type,
      date,
      sender = null,
      receiver = null,
    },
  } = props;
  const { year, month, date: tdate, hour, min, period } = getDateTime(date);
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((state) => !state);
  };

  return (
    <li
      className={`my-3 rounded-lg border border-secondary bg-white shadow-lg ${
        id || sender ? "hover:cursor-pointer" : ""
      }`}
      onClick={toggleDetails}
    >
      <div className="flex items-center justify-between p-5">
        <div>
          <span className="block uppercase tracking-wide">{type}</span>
          <span className="text-xs lg:text-sm">
            {hour}:{min} {period} - {tdate} {month} {year}
          </span>
        </div>
        <span className="text-lg">{formatAmount(amount)}</span>
      </div>
      {sender && showDetails && (
        <div className="flex justify-between rounded-b-lg bg-accent px-5 py-2 text-sm">
          <div>
            <span className="block">Sender</span>
            <span>{sender === userID ? "You" : formatID(sender)}</span>
          </div>
          <div>
            <span className="block">Receiver</span>
            <span>{receiver === userID ? "You" : formatID(receiver)}</span>
          </div>
        </div>
      )}
      {id && showDetails && (
        <div className="rounded-b-lg bg-accent px-5 py-2 text-sm">
          <div>
            <span className="block">Account</span>
            <span>{formatID(id)}</span>
          </div>
        </div>
      )}
    </li>
  );
};

export default HistoryItem;
