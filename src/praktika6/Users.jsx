import React from "react";
import UserCard from "./UserCard";

export default function Users({ users }) {
  let list = users.map((user) => {
    return (
      <UserCard
        key={user.id}
        id={user.id}
        name={user.name}
        username={user.username}
        email={user.email}
        address={user.address}
      />
    );
  });

  return <div>{list}</div>;
}
