import { useState } from "react";
import Balance from "../../../../components/card/Balance";
import HistoryList from "../../../../components/history/HistoryList";
const ClientDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [showHistory, setShowHistory] = useState(false);
  const toggleHistory = () => {
    setShowHistory((state) => !state);
  };

  return (
    <>
      <h1 className="my-5 text-3xl font-extrabold lg:text-4xl">Dashboard</h1>
      <Balance
        account={user}
        showHistory={showHistory}
        toggleHistory={toggleHistory}
      />
      {showHistory && <HistoryList account={user} />}
    </>
  );
};

export default ClientDashboard;
