import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const destination = user ? `/${user.role}/dashboard` : "/";
  return (
    <header className="z-10 flex h-16 items-center justify-start border-b border-b-secondary bg-white px-5 lg:h-20 lg:justify-center">
      <Link
        to={destination}
        className="space-x-1 text-2xl transition hover:scale-105 lg:text-3xl"
      >
        <Icon icon={faSeedling} className="text-lime-500" />
        <span className="font-extrabold lowercase tracking-tight text-stone-700">
          tigom
        </span>
      </Link>
    </header>
  );
};

export default Header;
