import React from "react";

export default function UserCard(props) {
  let { id, name, username, email, address } = props;
  return (
    <div className="border-bottom border-2 border-secondary my-2 p-2">
      <div className="col">
        <div className="text-secondary fs-4 fw-bold">{id + ". " + name}</div>
        <div>
          <p>
            <span className="text-info fw-bold">Username: </span> {username}
          </p>
          <p>
            <span className="text-info fw-bold">E-mail:</span> {email}
          </p>
        </div>
        <p className="text-success fw-bold">{`Address: ${address.street} suite: ${address.suite} city: ${address.city}. Zipcode: ${address.zipcode}`}</p>
      </div>
    </div>
  );
}
