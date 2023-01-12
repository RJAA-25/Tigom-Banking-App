import { useState, useEffect } from "react";

const NumberInput = (props) => {
  const {
    id,
    name,
    delay = 100,
    validation = null,
    balance = null,
    setValidInput,
    reset,
    setReset,
  } = props;
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
    if (reset) {
      setValue("");
      setTouched(false);
      setStatus("neutral");
    }
    if (!touched) return;
    if (!validation) return setValidInput(Number(value));
    const timeout = setTimeout(() => {
      const error = validation(value, balance);
      if (error) {
        setError(error);
        setStatus("invalid");
        setValidInput("");
      } else {
        setError(error);
        setStatus("valid");
        setValidInput(Number(value));
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, reset]);

  return (
    <div className="my-3">
      <label htmlFor={id} className="label">
        <span className="label-text text-lg">{name}</span>
      </label>
      <div className="input-group">
        <span>₱</span>
        <input
          id={id}
          type="number"
          min={0}
          value={value}
          onFocus={() => setTouched(true)}
          onChange={(e) => {
            if (reset) setReset(false);
            setValue(e.target.value);
          }}
          className={`${style[status]} input-bordered input w-full text-right`}
        />
      </div>
      {error && (
        <label htmlFor={id} className="label">
          <span className="label-text-alt text-base text-error">{error}</span>
        </label>
      )}
    </div>
  );
};

export default NumberInput;
