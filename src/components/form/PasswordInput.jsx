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
  const [status, setStatus] = useState("");
  const [touched, setTouched] = useState(false);
  const [value, setValue] = useState("");
  const [confirmValue, setConfirmValue] = useState("");
  const [error, setError] = useState("");

  const style = {
    valid: "this is valid",
    invalid: "this is invalid",
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
    <div>
      <label htmlFor={id}>{name}</label>
      <div className={style[status]}>
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
        />
        <span
          onClick={() => {
            setShow((state) => !state);
          }}
        >
          {show ? <Icon icon={faEye} /> : <Icon icon={faEyeSlash} />}
        </span>
      </div>

      {confirmation && (
        <>
          <label htmlFor={id}>{`${name} Confirmation`}</label>
          <div className={`${confirmValue.length > 0 ? style[status] : ""}`}>
            <input
              id={`${id}Confirmation`}
              type={show ? "text" : "password"}
              value={confirmValue}
              onChange={(e) => {
                const current = e.target.value;
                current.slice(-1) !== " " ? setConfirmValue(current) : null;
              }}
            />
            <span
              onClick={() => {
                setShow((state) => !state);
              }}
            >
              {show ? <Icon icon={faEye} /> : <Icon icon={faEyeSlash} />}
            </span>
          </div>
        </>
      )}

      {error && <span>{error}</span>}
    </div>
  );
};

export default PasswordInput;
