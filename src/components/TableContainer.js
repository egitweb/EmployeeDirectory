import React, { useState, useEffect } from "react";

const Table = ({ users }) => {
  const [sortedUsers, updateSortedUsers] = useState([]);

  useEffect(() => updateSortedUsers(users), [users]);
  

  return (
    <div>
      {/* Top Column */}
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Phone</th>
            <th scope="col">E-mail</th>
            <th scope="col">Age</th>
            <th scope="col">State</th>
            <th scope="col">Country</th>
            <th scope="col">ZipCode</th> 
          </tr>
        </thead>
        
      </table>
    </div>
  );
};

export default Table;
