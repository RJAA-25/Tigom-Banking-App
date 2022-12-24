import { useState, useEffect } from "react";

const DateInput = (props) => {
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
        setValidInput(value);
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <input
        id={id}
        type="date"
        value={value}
        onFocus={() => setTouched(true)}
        onChange={(e) => setValue(e.target.value)}
        className={style[status]}
      />
      {error && <span>{error}</span>}
    </div>
  );
};

export default DateInput;
