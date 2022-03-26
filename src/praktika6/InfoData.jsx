import React, { useState, useEffect } from "react";
import PostList from "./PostList";
import CommentList from "./CommentList";
import Users from "./Users";

function InfoData() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
    //   .then(console.log(posts));
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => setComments(json));
    //   .then(console.log(comments));
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
    //   .then(console.log(comments));
  }, [page]);

  return (
    <>
      <div className="text-center py-3">
        <button
          onClick={() => setPage("posts")}
          className="btn btn-outline-info me-3 "
        >
          Posts
        </button>
        <button
          onClick={() => setPage("users")}
          className="btn btn-outline-info me-3"
        >
          Users
        </button>
        <button
          onClick={() => setPage("comments")}
          className="btn btn-outline-info me-3"
        >
          Comments
        </button>
      </div>
      <div>
        {page === "posts" && <PostList posts={posts} />}
        {page === "users" && <Users users={users} />}
        {page === "comments" && <CommentList comments={comments} />}
      </div>
    </>
  );
}

export default InfoData;
