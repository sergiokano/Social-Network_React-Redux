import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../../../features/posts/postsSlice";
import { Card, Button, Form } from "react-bootstrap";

const PostDetail = () => {
  const { _id } = useParams();

  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getById(_id));
  }, []);
  return (
    <Card style={{ margin: "40px 40px", color: "black" }} className=" shadow-sm">
      <Card.Body className="p-3">
        <Card.Title className="font-weight-bold ">
          {post.description}
        </Card.Title>
        <Card.Text className="text-secondary">{post.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PostDetail;
