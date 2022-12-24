import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="flex h-16 items-center justify-start bg-white px-5 lg:h-20 lg:justify-center">
      <Link to="/" className="space-x-1 text-2xl lg:text-3xl">
        <Icon icon={faSeedling} className="text-lime-500" />
        <span className="font-extrabold lowercase tracking-tight text-stone-700">
          tigom
        </span>
      </Link>
    </header>
  );
};

export default Header;
