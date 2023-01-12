import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { registerAccount } from "../../../utilities/actions";
import {
  checkEmail,
  checkFirstName,
  checkLastName,
  checkPassword,
  checkAge,
  checkAddress,
} from "../../../utilities/validations";
import Header from "../../../components/navigation/Header";
import DateInput from "../../../components/form/DateInput";
import EmailInput from "../../../components/form/EmailInput";
import PasswordInput from "../../../components/form/PasswordInput";
import TextInput from "../../../components/form/TextInput";

const SignUp = () => {
  const [formValid, setFormValid] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const data = {
    firstName,
    lastName,
    email,
    password,
    birthdate,
    city,
    state,
    country,
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = registerAccount(data);
    navigate(`/${account.role}/dashboard`);
    toast.success("Signed up successfully");
  };
  useEffect(() => {
    Object.values(data).includes("") ? setFormValid(false) : setFormValid(true);
  }, Object.values(data));

  return (
    <>
      <Header />
      <div className="flex grow bg-sign bg-cover bg-center bg-no-repeat">
        <div className="grow bg-base-200 bg-opacity-50 p-5 backdrop-blur-sm lg:p-10">
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-lg rounded-lg bg-white p-5 shadow-lg"
          >
            <h1 className="mb-5 text-2xl font-extrabold lg:text-3xl">
              Sign Up
            </h1>
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
            <button disabled={!formValid} className="btn-primary btn my-3">
              Sign Up
            </button>
            <div className="text-right">
              <p>Have an account?</p>
              <Link to="/sign-in" className="link">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
