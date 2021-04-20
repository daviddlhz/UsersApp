import React from "react";

export const UsersRow = ({ user }) => {
  return (
    <tr>
      <th>{user.id}</th>
      <th>{user.email}</th>
      <th>
        {user.first_name} {user.last_name}
      </th>
      <th>
        <img
          className="img-thumbnail"
          style={{ width: 60 }}
          src={user.avatar}
          alt={user.first_name}
        />
      </th>
    </tr>
  );
};
