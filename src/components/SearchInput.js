import React, { useEffect, useState } from "react";

const SearchInput = ({ users, updateUsers }) => {
  const [inputValue, updateInput] = useState("");

  useEffect(() => {
    const filteredUsers =
      inputValue === "" ? users: users.filter(({ name: { first } }) =>
              first.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
          );

    updateUsers(filteredUsers); // eslint-disable-next-line
  }, [inputValue, users]);

  return (
    <input className="search-bar text-center" placeholder="Start Your Search Here" value={inputValue} onChange={e => updateInput(e.target.value)} />
  );
};

export default SearchInput;
