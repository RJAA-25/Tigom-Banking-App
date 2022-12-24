import { useState, useEffect } from "react";

const TextInput = (props) => {
  const {
    id,
    name,
    delay = 100,
    validation = null,
    setValidInput,
    capitalize = true,
  } = props;

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
  }, [value]);

  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <input
        id={id}
        type="text"
        value={value}
        onFocus={() => setTouched(true)}
        onChange={(e) => {
          let current = e.target.value;
          if (current.trim().length === 1)
            capitalize ? (current = current.toUpperCase()) : "";
          setValue(current);
        }}
        className={style[status]}
      />
      {error && <span>{error}</span>}
    </div>
  );
};

export default TextInput;
