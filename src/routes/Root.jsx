import { Outlet, redirect } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { initializeApp } from "../utilities/actions";

const Root = () => {
  initializeApp();

  return (
    <div className="max-w-screen flex min-h-screen flex-col">
      <Toaster position="bottom-right" />
      <Outlet />
    </div>
  );
};

export const loader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? redirect(`/${user.role}/dashboard`) : null;
};

export default Root;
