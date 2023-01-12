import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import SignIn from "../routes/pages/session/SignIn";
import SignUp from "../routes/pages/registration/SignUp";

import Root, { loader as root } from "../routes/Root";
import Error from "../components/error/Error";
import Landing from "../routes/pages/landing/Landing";
import Client, { loader as client } from "../routes/pages/main/client/Client";
import ClientDashboard from "../routes/pages/main/client/ClientDashboard";
import ClientTransactions from "../routes/pages/main/client/ClientTransactions";
import ClientExchange from "../routes/pages/main/client/ClientExchange";
import ClientExpense from "../routes/pages/main/client/ClientExpense";
import Admin, { loader as admin } from "../routes/pages/main/admin/Admin";
import AdminDashboard from "../routes/pages/main/admin/AdminDashboard";
import AdminTransactions from "../routes/pages/main/admin/AdminTransactions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route index element={<Landing />} loader={root} />
      <Route path="sign-in" element={<SignIn />} loader={root} />
      <Route path="sign-up" element={<SignUp />} loader={root} />
      <Route element={<Client />} loader={client}>
        <Route path="client/dashboard" element={<ClientDashboard />} />
        <Route path="client/transactions" element={<ClientTransactions />} />\
        <Route path="client/exchange" element={<ClientExchange />} />
        <Route path="client/expense-tracker" element={<ClientExpense />} />
      </Route>
      <Route element={<Admin />} loader={admin}>
        <Route path="admin/dashboard" element={<AdminDashboard />} />
        <Route path="admin/transactions" element={<AdminTransactions />} />
      </Route>
    </Route>
  )
);

export default router;
