import React from "react";
import { useUsers } from "../hooks/useUsers";
import { UsersRow } from "../components/UsersRow";

export const UserPage = () => {
  const users = useUsers();
  return (
    <div className="container mt-5">
      <h1>Users</h1>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>EMAIL</th>
            <th>NAME</th>
            <th>AVATR</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UsersRow key={user.email} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
