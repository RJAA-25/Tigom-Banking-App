import { useState } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchList from "./SearchList";

const SearchUser = (props) => {
  const { setAccount, sender = null } = props;
  let accounts = JSON.parse(localStorage.getItem("accounts")).users;
  if (sender) accounts = accounts.filter((account) => account.id !== sender.id);

  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div className="mx-auto my-10 max-w-lg lg:max-w-xl">
      <label htmlFor="search_user" className="mb-3 block text-lg">
        Select Account
      </label>
      <div className="input-group-lg input-group mb-2">
        <span>
          <Icon icon={faMagnifyingGlass} />
        </span>
        <input
          type="search"
          id="search_user"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShow(true)}
          className="w-full px-3 py-2"
        />
      </div>
      {show && (
        <SearchList
          query={query}
          accounts={accounts}
          setShow={setShow}
          setAccount={setAccount}
        />
      )}
    </div>
  );
};

export default SearchUser;
