import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Post.scss";
import Card from "react-bootstrap/Card";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);

  const post = posts.map((post) => {
    return (
      <Card
        style={{ margin: "20px 20px", textDecoration: "none" }}
        key={post._id}
      >
        <Card.Body>
          <Link
            to={"/post/" + post._id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card.Title>{post.description}</Card.Title>
          </Link>
        </Card.Body>
      </Card>
    );
  });
  return <div>{post}</div>;
};

export default Post;
