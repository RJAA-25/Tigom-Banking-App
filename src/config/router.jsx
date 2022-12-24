import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import SignIn from "../routes/pages/session/SignIn";
import SignUp from "../routes/pages/registration/SignUp";

import Root from "../routes/Root";

import Landing from "../routes/pages/landing/Landing";
import Client from "../routes/pages/main/client/Client";
import Admin from "../routes/pages/main/admin/Admin";
import LayoutClient from "../routes/pages/main/client/LayoutClient";
import LayoutAdmin from "../routes/pages/main/admin/LayoutAdmin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Landing />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route element={<LayoutClient />}>
        <Route path="client" element={<Client />} />
      </Route>
      <Route element={<LayoutAdmin />}>
        <Route path="admin" element={<Admin />} />
      </Route>
    </Route>
  )
);

export default router;
