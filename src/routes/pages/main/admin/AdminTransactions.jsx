import { useState } from "react";
import Deposit from "../../../../components/transactions/Deposit";
import Transfer from "../../../../components/transactions/Transfer";
import Withdraw from "../../../../components/transactions/Withdraw";

const AdminTransactions = () => {
  const [type, setType] = useState("");

  return (
    <>
      <h1 className="mb-10 text-3xl font-extrabold lg:mb-10 lg:text-4xl">
        Transactions
      </h1>
      <div className="btn-group flex justify-center ">
        <button
          className={`btn-accent btn ${type === "deposit" ? "btn-active" : ""}`}
          onClick={() => setType("deposit")}
        >
          Deposit
        </button>
        <button
          className={`btn-accent btn ${
            type === "withdraw" ? "btn-active" : ""
          }`}
          onClick={() => setType("withdraw")}
        >
          Withdraw
        </button>
        <button
          className={`btn-accent btn ${
            type === "transfer" ? "btn-active" : ""
          }`}
          onClick={() => setType("transfer")}
        >
          Transfer
        </button>
      </div>
      {type === "deposit" ? (
        <Deposit />
      ) : type === "withdraw" ? (
        <Withdraw />
      ) : type === "transfer" ? (
        <Transfer />
      ) : (
        <div className="mx-auto my-5 grid h-48 max-w-lg place-content-center rounded-lg border-2 border-dashed border-secondary p-5 lg:max-w-xl">
          <span className="text-xl font-bold">Select transaction</span>
        </div>
      )}
    </>
  );
};

export default AdminTransactions;
