import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../../../features/posts/postsSlice";
import { Card, Button, Form, Image } from "react-bootstrap";
import CreateComment from "../Post/CreateComment/CreateComment";
import EditPost from "../EditPost/EditPost";

const PostDetail = () => {
  const { _id } = useParams();

  const dispatch = useDispatch();

  const { post } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getById(_id));
    setIsModalVisible(true);

  }, []);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <Card
      style={{ margin: "40px 40px", color: "black" }}
      className=" shadow-sm"
    >
      <Card.Body className="p-3">
        <Card.Title className="font-weight-bold ">
          {console.log("post", post)}
          {post.description}
          {post.track ? (
            <>
              <Card.Subtitle>{post.track.title}</Card.Subtitle>
              <Card.Subtitle>{post.track.artist}</Card.Subtitle>
              <Image src={post.track.albumUrl} />
            </>
          ) : (
            ""
          )}
          <Card.Subtitle style={{ margin: "40px 40px" }}>
            {post.comments?.map((comment) => (
              <Card.Text>{comment.description}</Card.Text>
            ))}
          </Card.Subtitle>
        </Card.Title>
        <Card.Text className="text-secondary">{post.body}</Card.Text>
      </Card.Body>
      <div>
            {/* {element} */}
            <EditPost visible={isModalVisible} setVisible={setIsModalVisible} />
          </div>
      <CreateComment _id={_id} />
    </Card>
  );
};

export default PostDetail;
