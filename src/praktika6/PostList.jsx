import React from "react";
import PostCard from "./PostCard";

function PostsList({ posts }) {
  let list = posts.map((post) => {
    return (
      <PostCard
        key={post.id}
        id={post.id}
        title={post.title}
        body={post.body}
      />
    );
  });

  return <>{list}</>;
}

export default PostsList;
