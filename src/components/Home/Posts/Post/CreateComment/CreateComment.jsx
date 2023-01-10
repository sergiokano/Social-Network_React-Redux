import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../../../../features/comments/commentsSlice";
import { notification } from "antd";
import { useParams } from "react-router-dom";
import "./CreateComment.scss"

const CreateComment = () => {
  const { _id } = useParams();
  const [commentData, setCommentData] = useState({
    description: "",
    postId: _id,
  });

  const { user } = useSelector((state) => state.auth);

  const { description } = commentData;
  const dispatch = useDispatch();

  const onChange = (e) => {
    setCommentData((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment({ ...commentData, _id }));
    notification.success({
      message: "Comment Posted",
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="string"
        name="description"
        value={description}
        onChange={onChange}
      />

      <button type="submit" className="btn-">
        Add comment
      </button>
    </form>
  );
};

export default CreateComment;
