import React from "react";
import SearchItem from "./SearchItem";

const SearchList = (props) => {
  const { query, accounts, setShow, setAccount } = props;

  const search = query.toLowerCase() || null;
  const filtered = accounts
    .filter(
      (account) =>
        account.firstName.toLowerCase().includes(search) ||
        account.lastName.toLowerCase().includes(search) ||
        account.id === Number(search)
    )
    .slice(0, 5);

  return (
    <>
      {filtered.length !== 0 ? (
        <ul className="menu rounded-box mt-5 p-2 ">
          {filtered.map((account) => (
            <SearchItem
              key={account.id}
              account={account}
              setShow={setShow}
              setAccount={setAccount}
            />
          ))}
        </ul>
      ) : query.length !== 0 ? (
        <span className="text-error">No account found</span>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchList;
