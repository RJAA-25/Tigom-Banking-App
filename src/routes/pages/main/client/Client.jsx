import { redirect } from "react-router-dom";
import Layout from "../../../../components/wrapper/Layout";

const Client = () => {
  const links = [
    ["client/dashboard", "Dashboard"],
    ["client/transactions", "Transactions"],
    // ["client/exchange", "Exchange"],
    ["client/expense-tracker", "Expense Tracker"],
  ];
  const user = JSON.parse(localStorage.getItem("user"));

  return <Layout account={user} links={links} />;
};

export const loader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user)
    return user.role !== "client" ? redirect(`/${user.role}/dashboard`) : null;
  return redirect("/sign-in");
};
export default Client;
