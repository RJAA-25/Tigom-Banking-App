import { useState } from "react";
import { toast } from "react-hot-toast";
import { approveDeposit } from "../../utilities/actions";
import { checkDeposit } from "../../utilities/validations";
import { formatAmount, formatID } from "../../utilities/format";
import SearchUser from "../search/SearchUser";
import NumberInput from "../form/NumberInput";
import Modal from "../wrapper/Modal";
import Account from "../card/Account";

const Deposit = (props) => {
  const { user = null } = props;
  const [account, setAccount] = useState(user);
  const [deposit, setDeposit] = useState("");
  const [reset, setReset] = useState(false);
  const handleSubmit = () => {
    approveDeposit(account, deposit);
    toast.dismiss();
    toast.success("Deposit succesful");
    setReset(true);
  };

  return (
    <>
      {!account && <SearchUser setAccount={setAccount} />}
      {account && (
        <>
          <Account account={account} changeAccount={setAccount} />
          <div className="mx-auto max-w-lg lg:max-w-xl">
            <NumberInput
              id="deposit"
              name="Deposit Amount"
              validation={checkDeposit}
              setValidInput={setDeposit}
              reset={reset}
              setReset={setReset}
            />
            <Modal
              id="deposit_modal"
              valid={deposit}
              trigger="Proceed"
              activate="Approve"
              action={handleSubmit}
            >
              <span className="mb-5 block text-xl font-bold">
                Bank Deposit Approval
              </span>
              <span className="text-lg">Savings Account</span>
              <div className="flex justify-between p-3">
                <span>
                  {account.lastName}, {account.firstName}
                </span>
                <span className="font-bold">{formatID(account.id)}</span>
              </div>
              <span className="block text-right text-xl font-bold text-success">
                + {formatAmount(deposit)}
              </span>
            </Modal>
          </div>
        </>
      )}
    </>
  );
};

export default Deposit;
