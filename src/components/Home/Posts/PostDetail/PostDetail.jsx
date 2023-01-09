import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../../../features/posts/postsSlice";
import { Card, Button, Form, Image } from "react-bootstrap";
import CreateComment from "../Post/CreateComment/CreateComment";

const PostDetail = () => {
  const { _id } = useParams();

  const dispatch = useDispatch();

  const { post } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getById(_id));
  }, []);

  // const [formData, setFormData] = useState({
  //   commentDescription: "",
  // });

  // const { commentDescription } = formData;
  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };
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
          <Card.Subtitle>
            {post.comments?.map((comment) => comment.description)}
          </Card.Subtitle>
        </Card.Title>
        <Card.Text className="text-secondary">{post.body}</Card.Text>
      </Card.Body>
      <CreateComment/>
      {/* <form>
        <input
          type="string"
          name="description"
          value={commentDescription}
          onChange={onChange}
        />

        <button type="submit">Add comment</button>
      </form> */}
    </Card>
  );
};

export default PostDetail;
