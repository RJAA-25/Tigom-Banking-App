import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { loginAccount } from "../../../utilities/actions";
import Header from "../../../components/navigation/Header";
import PasswordInput from "../../../components/form/PasswordInput";
import TextInput from "../../../components/form/TextInput";

const SignIn = () => {
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { identity, password };
    const account = loginAccount(data);
    if (account) {
      setError("");
      navigate(`/${account.role}/dashboard`);
      toast.dismiss();
      toast.success("Signed in");
    } else {
      setError("Invalid credentials");
      toast.dismiss();
      toast.error("Invalid credentials");
    }
  };

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
              Sign In
            </h1>
            <TextInput
              id="sesion_email"
              name="Email"
              setValidInput={setIdentity}
              capitalize={false}
            />
            <PasswordInput
              id="session_password"
              name="Password"
              setValidInput={setPassword}
            />
            {error && <span className="block text-error">{error}</span>}
            <button className="btn-primary btn my-3">Sign In</button>
            <div className="text-right">
              <p>Create an account?</p>
              <Link to="/sign-up" className="link">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
