import React from "react";

function CommentsCard({ id, userName, email, body }) {
  return (
    <div className="border-bottom border-2 border-secondary my-2 p-2">
      <div className="col-12">
        <div className="my-2">
          <div className="card-body">
            <h5 className="card-title text-info">{id + ". " + userName}</h5>
            <p className="card-text">{email}</p>
            <p className="card-text">{body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentsCard;
