import { redirect } from "react-router-dom";
import Layout from "../../../../components/wrapper/Layout";

const Admin = () => {
  const links = [
    ["admin/dashboard", "Dashboard"],
    ["admin/transactions", "Transactions"],
  ];
  const user = JSON.parse(localStorage.getItem("user"));

  return <Layout account={user} links={links}></Layout>;
};

export const loader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user)
    return user.role !== "admin" ? redirect(`/${user.role}/dashboard`) : null;
  return redirect("/sign-in");
};

export default Admin;
