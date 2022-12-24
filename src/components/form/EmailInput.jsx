import { useState, useEffect } from "react";

const EmailInput = (props) => {
  const { id, name, delay = 100, validation = null, setValidInput } = props;

  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [touched, setTouched] = useState(false);

  const style = {
    valid: "this is valid",
    invalid: "this is invalid",
  };

  useEffect(() => {
    if (!touched) return;
    if (!validation) return setValidInput(value);
    const timeout = setTimeout(() => {
      const error = validation(value);
      if (error) {
        setError(error);
        setStatus("invalid");
        setValidInput("");
      } else {
        setError(error);
        setStatus("valid");
        setValidInput(value.toLowerCase());
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <input
        id={id}
        type="email"
        value={value}
        onFocus={() => setTouched(true)}
        onChange={(e) => {
          const current = e.target.value;
          current.slice(-1) !== " " ? setValue(current) : null;
        }}
        className={style[status]}
      />
      {error && <span>{error}</span>}
    </div>
  );
};

export default EmailInput;
