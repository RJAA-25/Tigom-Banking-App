import { useState } from "react";
import { toast } from "react-hot-toast";
import { checkTransfer } from "../../utilities/validations";
import { approveTransfer } from "../../utilities/actions";
import { formatAmount, formatID } from "../../utilities/format";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faMoneyBills, faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import SearchUser from "../search/SearchUser";
import NumberInput from "../form/NumberInput";
import Modal from "../wrapper/Modal";
import Account from "../card/Account";

const Transfer = (props) => {
  const { user = null } = props;
  const [sender, setSender] = useState(user);
  const [receiver, setReceiver] = useState(null);
  const [transfer, setTransfer] = useState("");
  const [reset, setReset] = useState(false);
  const handleSubmit = () => {
    approveTransfer(sender, receiver, transfer);
    toast.dismiss();
    toast.success("Transfer successful");
    setReset(true);
  };

  return (
    <>
      {!sender && <SearchUser setAccount={setSender} />}
      {sender && <Account account={sender} changeAccount={setSender} />}
      {sender && (
        <div className="my-10 flex justify-center gap-3 text-3xl">
          <Icon icon={faMoneyBills} />
          <Icon icon={faAnglesDown} />
        </div>
      )}
      {sender && !receiver && (
        <SearchUser sender={sender} setAccount={setReceiver} />
      )}
      {receiver && <Account account={receiver} changeAccount={setReceiver} />}
      {sender && receiver && (
        <div className="mx-auto max-w-lg lg:max-w-xl">
          <NumberInput
            id="transfer"
            name="Transfer Amount"
            validation={checkTransfer}
            balance={sender.balance}
            setValidInput={setTransfer}
            reset={reset}
            setReset={setReset}
          />
          <Modal
            id="transfer_modal"
            valid={transfer}
            trigger="Proceed"
            activate="Approve"
            action={handleSubmit}
          >
            <span className="mb-5 block text-xl font-bold">
              Bank Transfer Approval
            </span>
            {/* SENDER */}
            <span className="text-lg">Sender</span>
            <div className="flex justify-between p-3">
              <span>
                {sender.lastName}, {sender.firstName}
              </span>
              <span className="font-bold">{formatID(sender.id)}</span>
            </div>
            <span className="block text-right text-xl font-bold text-error">
              - {formatAmount(transfer)}
            </span>
            {/* RECEIVER */}
            <span className="text-lg">Receiver </span>
            <div className="flex justify-between p-3">
              <span>
                {receiver.lastName}, {receiver.firstName}
              </span>
              <span className="font-bold">{formatID(receiver.id)}</span>
            </div>
            <span className="block text-right text-xl font-bold text-success">
              + {formatAmount(transfer)}
            </span>
          </Modal>
        </div>
      )}
    </>
  );
};

export default Transfer;
