import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../../components/navigation/Header";
import DateInput from "../../../components/form/DateInput";
import EmailInput from "../../../components/form/EmailInput";
import PasswordInput from "../../../components/form/PasswordInput";
import TextInput from "../../../components/form/TextInput";

import { registerAccount } from "../../../utilities/actions";
import {
  checkEmail,
  checkFirstName,
  checkLastName,
  checkPassword,
  checkUsername,
  checkAge,
  checkAddress,
} from "../../../utilities/validations";

const SignUp = () => {
  const navigate = useNavigate();

  const [formValid, setFormValid] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const data = {
    firstName,
    lastName,
    username,
    email,
    password,
    birthdate,
    city,
    state,
    country,
  };

  useEffect(() => {
    Object.values(data).includes("") ? setFormValid(false) : setFormValid(true);
  }, Object.values(data));

  const handleSubmit = (e) => {
    e.preventDefault();
    const account = registerAccount(data);
    navigate(`/${account.role}`);
  };

  return (
    <div className="flex h-full flex-col">
      <Header />
      <form onSubmit={handleSubmit}>
        <TextInput
          id="register_firstName"
          name="First Name"
          validation={checkFirstName}
          setValidInput={setFirstName}
        />
        <TextInput
          id="register_lastName"
          name="Last Name"
          validation={checkLastName}
          setValidInput={setLastName}
        />
        <TextInput
          id="register_username"
          name="Username"
          validation={checkUsername}
          setValidInput={setUsername}
          capitalize={false}
        />
        <EmailInput
          id="register_email"
          name="Email"
          validation={checkEmail}
          setValidInput={setEmail}
        />
        <PasswordInput
          id="register_password"
          name="Password"
          confirmation={true}
          validation={checkPassword}
          setValidInput={setPassword}
        />
        <DateInput
          id="register_birthdate"
          name="Birthdate"
          validation={checkAge}
          setValidInput={setBirthdate}
        />
        <TextInput
          id="register_city"
          name="City"
          validation={checkAddress}
          setValidInput={setCity}
        />
        <TextInput
          id="register_state"
          name="State"
          validation={checkAddress}
          setValidInput={setState}
        />
        <TextInput
          id="register_country"
          name="Country"
          validation={checkAddress}
          setValidInput={setCountry}
        />
        <button disabled={!formValid} className="btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
