import { useState } from "react";
import { toast } from "react-hot-toast";
import { formatAmount } from "../../utilities/format";
import { checkWithdraw } from "../../utilities/validations";
import { approveWithdraw } from "../../utilities/actions";
import SearchUser from "../search/SearchUser";
import NumberInput from "../form/NumberInput";
import Modal from "../wrapper/Modal";
import Account from "../card/Account";

const Withdraw = (props) => {
  const { user = null } = props;
  const [account, setAccount] = useState(user);
  const [withdraw, setWithdraw] = useState("");
  const [reset, setReset] = useState(false);
  const handleSubmit = () => {
    approveWithdraw(account, withdraw);
    toast.dismiss();
    toast.success("Withdrawal successful");
    setReset(true);
  };

  return (
    <>
      {!account && <SearchUser setAccount={setAccount} />}
      {account && (
        <div>
          <Account account={account} changeAccount={setAccount} />
          <div className="mx-auto max-w-lg lg:max-w-xl">
            <NumberInput
              id="withdraw"
              name="Withdraw Amount"
              validation={checkWithdraw}
              balance={account.balance}
              setValidInput={setWithdraw}
              reset={reset}
              setReset={setReset}
            />
            <Modal
              id="withdraw_modal"
              valid={withdraw}
              trigger="Proceed"
              activate="Approve"
              action={handleSubmit}
            >
              <span className="mb-5 block text-xl font-bold">
                Bank Withdraw Approval
              </span>
              <span className="text-lg">Savings Account</span>
              <div className="flex justify-between p-3">
                <span>
                  {account.lastName}, {account.firstName}
                </span>
                <span className="font-bold">{account.id}</span>
              </div>
              <span className="block text-right text-xl font-bold text-error">
                - {formatAmount(withdraw)}
              </span>
            </Modal>
          </div>
        </div>
      )}
    </>
  );
};

export default Withdraw;
