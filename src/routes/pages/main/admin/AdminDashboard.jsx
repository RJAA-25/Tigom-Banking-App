import { useState } from "react";
import Balance from "../../../../components/card/Balance";
import HistoryList from "../../../../components/history/HistoryList";

const AdminDashboard = () => {
  const bank = JSON.parse(localStorage.getItem("bank"));
  const [showHistory, setShowHistory] = useState(false);
  const toggleHistory = () => {
    setShowHistory((state) => !state);
  };

  return (
    <>
      <h1 className="mb-10 text-3xl font-extrabold lg:text-4xl">Dashboard</h1>
      <Balance
        account={bank}
        showHistory={showHistory}
        toggleHistory={toggleHistory}
      />
      {showHistory && <HistoryList account={bank} />}
    </>
  );
};

export default AdminDashboard;
