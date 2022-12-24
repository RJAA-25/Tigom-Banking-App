import { Outlet } from "react-router-dom";
import { initializeApp } from "../utilities/actions";

const Root = () => {
  initializeApp();

  return (
    <div className="h-screen min-h-screen w-screen">
      <Outlet />
    </div>
  );
};

export default Root;
