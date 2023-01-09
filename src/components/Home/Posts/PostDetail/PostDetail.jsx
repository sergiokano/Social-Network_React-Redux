import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../../../features/posts/postsSlice";
import { Card, Button, Form, Image } from "react-bootstrap";

const PostDetail = () => {
  const { _id } = useParams();

  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getById(_id));
  }, []);
  return (
    <Card
      style={{ margin: "40px 40px", color: "black" }}
      className=" shadow-sm"
    >
      <Card.Body className="p-3">
        <Card.Title className="font-weight-bold ">
          {console.log(post.track)}
          {post.description}
        </Card.Title>
        <Card.Text className="text-secondary">{post.body}</Card.Text>
      </Card.Body>
      {post.track ? (
        <Card.Body>
          <Card.Subtitle>{post.track.title}</Card.Subtitle>
          <Card.Subtitle>{post.track.artist}</Card.Subtitle>
          <Image src={post.track.albumUrl} />
        </Card.Body>
      ) : (
        <p className="welcome-message">Error getting track</p>
      )}
    </Card>
  );
};

export default PostDetail;
