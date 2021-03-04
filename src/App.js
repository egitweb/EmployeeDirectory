import React, { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
import Table from "./components/TableContainer";
import {getUsers} from "./utils/API";
import "./App.css";

function App() {
  const [initialUsers, updateAvailableUsers] = useState([]);
  const [usersToRender, updateUsersToRender] = useState([]);


  useEffect(() => {
    getUsers().then(({ data: { results } }) => updateAvailableUsers(results));
  }, []);

  return (
    <div className="App">
      <div className="banner text-center">
      <h1><i className="fa fa-address-book" aria-hidden="true" /> Employee Directory</h1>
      <SearchInput users={initialUsers} updateUsers={updateUsersToRender} />
      </div>
      <Table users={usersToRender} />
    </div>
  );
}

export default App;

