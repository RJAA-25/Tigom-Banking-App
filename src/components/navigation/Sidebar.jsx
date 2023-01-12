import { Link, NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";
import Profile from "../card/Profile";

const Sidebar = (props) => {
  const { account, links, closeSidebar } = props;
  const handleClick = () => {
    localStorage.removeItem("user");
    toast("Signed out");
  };
  return (
    <div className="flex w-80 flex-col bg-base-100 p-5">
      <Profile account={account} />
      <Link to="sign-in" onClick={handleClick} className="btn-accent btn mt-5">
        Sign Out
      </Link>
      <div className="divider"></div>
      <ul className="menu grow gap-1 p-1">
        {links.map((link) => (
          <li key={link[1]} onClick={closeSidebar}>
            <NavLink
              to={link[0]}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link[1]}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
