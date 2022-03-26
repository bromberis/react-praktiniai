import React from "react";
import CommentsCard from "./CommentsCard";

function CommentsList({ comments }) {
  let list = comments.map((comments) => {
    return (
      <CommentsCard
        key={comments.id}
        id={comments.id}
        userName={comments.name}
        email={comments.email}
        body={comments.body}
      />
    );
  });

  return <>{list}</>;
}

export default CommentsList;
