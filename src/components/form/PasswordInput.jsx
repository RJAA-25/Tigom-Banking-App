import { useState, useEffect } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const PasswordInput = (props) => {
  const {
    id,
    name,
    delay = 0,
    validation = null,
    setValidInput,
    confirmation = false,
  } = props;
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("neutral");
  const [touched, setTouched] = useState(false);
  const [value, setValue] = useState("");
  const [confirmValue, setConfirmValue] = useState("");
  const [error, setError] = useState("");
  const style = {
    valid: "border-success",
    neutral: "",
    invalid: "border-error",
  };
  useEffect(() => {
    if (!touched) return;
    if (!validation) return setValidInput(value);
    const timeout = setTimeout(() => {
      const error = validation(value, confirmValue);
      if (error) {
        setError(error);
        setStatus("invalid");
        setValidInput("");
      } else {
        setError(error);
        setStatus("valid");
        setValidInput(value);
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, confirmValue]);

  return (
    <div className="my-3">
      <div className="mb-3">
        <label htmlFor={id} className="label">
          <span className="label-text text-lg">{name}</span>
        </label>
        <div className="input-group">
          <input
            id={id}
            type={show ? "text" : "password"}
            value={value}
            onFocus={() => {
              setTouched(true);
            }}
            onChange={(e) => {
              const current = e.target.value;
              current.slice(-1) !== " " ? setValue(current) : null;
            }}
            className={`${style[status]} input-bordered input w-full`}
          />
          <span
            onClick={() => {
              setShow((state) => !state);
            }}
            className="hover:cursor-pointer"
          >
            {show ? <Icon icon={faEye} /> : <Icon icon={faEyeSlash} />}
          </span>
        </div>
      </div>

      {confirmation && (
        <div className="mt-3">
          <label htmlFor={`${id}Confirmation`} className="label">
            <span className="label-text text-lg">{name} Confirmation</span>
          </label>
          <div className="input-group">
            <input
              id={`${id}Confirmation`}
              type={show ? "text" : "password"}
              value={confirmValue}
              onChange={(e) => {
                const current = e.target.value;
                current.slice(-1) !== " " ? setConfirmValue(current) : null;
              }}
              className={`${
                confirmValue.length > 0 ? style[status] : ""
              } input-bordered input w-full`}
            />
            <span
              onClick={() => {
                setShow((state) => !state);
              }}
              className="hover:cursor-pointer"
            >
              {show ? <Icon icon={faEye} /> : <Icon icon={faEyeSlash} />}
            </span>
          </div>
        </div>
      )}
      {error && (
        <label htmlFor={id} className="label">
          <span className="label-text-alt text-base text-error">{error}</span>
        </label>
      )}
    </div>
  );
};

export default PasswordInput;
