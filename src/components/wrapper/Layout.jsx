import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import DateTime from "../datetime/DateTime";
import Header from "../navigation/Header";
import Sidebar from "../navigation/Sidebar";

const Layout = (props) => {
  const { account, links } = props;
  const [checked, setChecked] = useState(false);
  const toggleSidebar = () => {
    setChecked((state) => !state);
  };
  const closeSidebar = () => {
    setChecked(false);
  };

  return (
    <>
      <div className="z-10 flex items-center">
        <label
          htmlFor="drawer"
          className="btn-accent no-animation btn h-16 rounded-none border-b border-b-secondary p-5 text-xl lg:hidden"
        >
          <Icon icon={faBars} />
        </label>
        <div className="grow">
          <Header />
        </div>
      </div>
      <div className="drawer-mobile drawer grow ">
        <input
          id="drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={checked}
          onChange={toggleSidebar}
        />
        <div className="drawer-content flex -scale-100 bg-main bg-cover bg-center bg-no-repeat">
          <div className="relative grow -scale-100 overflow-y-auto bg-base-200 bg-opacity-50 p-5 backdrop-blur-sm md:px-10 lg:px-20">
            <DateTime />
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="drawer" className="drawer-overlay"></label>
          <Sidebar
            closeSidebar={closeSidebar}
            account={account}
            links={links}
          />
        </div>
      </div>
    </>
  );
};

export default Layout;
