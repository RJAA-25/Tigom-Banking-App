import { useState } from "react";

const Modal = (props) => {
  const { id, valid, trigger, activate, action, allow = true } = props;
  const [checked, setChecked] = useState(false);
  const toggleModal = () => {
    setChecked((state) => !state);
  };

  return (
    <>
      <label
        htmlFor={id}
        className={`btn my-3 ${!valid ? "btn-disabled" : ""}`}
      >
        {trigger}
      </label>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={toggleModal}
        className="modal-toggle"
      />
      <div className="modal absolute min-h-screen backdrop-blur-sm">
        <div className="modal-box bg-white">
          {props.children}
          <div className="divider"></div>
          <div className="modal-action">
            <label htmlFor={id} className="btn-accent btn">
              Cancel
            </label>
            <label
              htmlFor={id}
              onClick={action}
              className={`btn-primary btn ${!allow ? "btn-disabled" : ""}`}
            >
              {activate}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
