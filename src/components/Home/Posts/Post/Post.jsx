import React from "react";
import { useSelector } from "react-redux";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);

  const post = posts.map((post) => {
    return (
      <div className="post" key={post._id}>
        <p> {post.description}</p>
      </div>
    );
  });
  return <div>
    {post}</div>;
};

export default Post;