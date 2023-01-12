import { useState, useEffect } from "react";

const DateInput = (props) => {
  const { id, name, delay = 100, validation = null, setValidInput } = props;
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("neutral");
  const [touched, setTouched] = useState(false);
  const style = {
    valid: "border-success",
    neutral: "",
    invalid: "border-error",
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
    <div className="form-control my-3 w-full">
      <label htmlFor={id} className="label">
        <span className="label-text text-lg">{name}</span>
      </label>
      <input
        id={id}
        type="date"
        value={value}
        onFocus={() => setTouched(true)}
        onChange={(e) => setValue(e.target.value)}
        className={`${style[status]} input-bordered input`}
      />
      {error && (
        <label htmlFor={id} className="label">
          <span className="label-text-alt text-base text-error">{error}</span>
        </label>
      )}
    </div>
  );
};

export default DateInput;
