import { useState, useEffect } from "react";

const TextInput = (props) => {
  const {
    id,
    name,
    delay = 100,
    validation = null,
    setValidInput,
    capitalize = true,
    reset,
    setReset,
  } = props;
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState();
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
    if (!validation) return setValidInput(value);
    const timeout = setTimeout(() => {
      const result = validation(value);
      if (result) {
        setError(result);
        setStatus("invalid");
        setValidInput("");
      } else {
        setError(result);
        setStatus("valid");
        setValidInput(value);
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, reset]);

  return (
    <div className="form-control my-3 w-full">
      <label htmlFor={id} className="label">
        <span className="label-text text-lg">{name}</span>
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onFocus={() => setTouched(true)}
        onChange={(e) => {
          if (reset) setReset(false);
          let current = e.target.value;
          if (current.trim().length === 1)
            capitalize ? (current = current.toUpperCase()) : "";
          setValue(current);
        }}
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

export default TextInput;
