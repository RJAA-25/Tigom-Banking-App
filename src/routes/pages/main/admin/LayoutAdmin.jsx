import { Outlet } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Header from "../../../../components/navigation/Header";

const LayoutAdmin = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center">
        <label htmlFor="client-drawer" className="px-5 text-xl lg:hidden">
          <Icon icon={faBars} />
        </label>
        <div className="grow">
          <Header />
        </div>
      </div>
      <div className="drawer-mobile drawer">
        <input id="client-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="client-drawer" className="drawer-overlay"></label>
          <ul className="menu w-80 bg-base-100 p-4 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
