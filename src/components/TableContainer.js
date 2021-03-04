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
        <tbody>
          {/* Data to Show on Columns */}
          {sortedUsers.map(
            ({
              picture: { thumbnail },
              name: { first, last },
              gender,
              phone,
              email,
              dob:{age},
              location: {  state, country, postcode }
            }) => (
              <tr key={email}>
                <td><img src={thumbnail} alt=""/></td>
                <th>{first} {last}</th>
                <td>{gender}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>{age}</td>
                <td>{state}</td>
                <td>{country}</td>
                <td>{postcode}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
