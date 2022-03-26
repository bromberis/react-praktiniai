import React from "react";
function PostCard({ title, body, id }) {
  return (
    <div className="border-bottom border-2 border-warning ">
      <div className="col">
        <div className=" my-2">
          <div className="card-body">
            <h5 className="card-title">
              {id + ". "}
              {title}
            </h5>
            <p className="card-text">{body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PostCard;
