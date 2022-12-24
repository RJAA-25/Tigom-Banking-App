import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../../components/navigation/Header";
import PasswordInput from "../../../components/form/PasswordInput";
import TextInput from "../../../components/form/TextInput";

import { loginAccount } from "../../../utilities/actions";

const SignIn = () => {
  const navigate = useNavigate();

  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { identity, password };
    const account = loginAccount(data);
    if (account) {
      setError("");
      navigate(`/${account.role}`);
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex h-full flex-col">
      <Header />
      Sign In
      <form onSubmit={handleSubmit}>
        <TextInput
          id="sesion_emailUsername"
          name="Email / Username"
          setValidInput={setIdentity}
          capitalize={false}
        />
        <PasswordInput
          id="session_password"
          name="Password"
          setValidInput={setPassword}
        />
        {error && <span>{error}</span>}
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
