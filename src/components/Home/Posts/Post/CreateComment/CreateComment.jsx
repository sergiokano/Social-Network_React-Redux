import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../../../../features/posts/postsSlice";
import { notification } from "antd";


const CreateComment = () => {
 
  const [commentData, setCommentData] = useState({
    commentDescription: "",
  });

  const { user } = useSelector((state) => state.auth);

  const { commentDescription} = commentData;
  const dispatch = useDispatch();

  const onChange = (e) => {
    setCommentData((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
  };



  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment(commentData));
    notification.success({
      message: "Comment Posted",
    });
    
  };

  return (
    <form onSubmit={onSubmit}>
        <input
          type="string"
          name="commentDescription"
          value={commentDescription}
          onChange={onChange}
        />

        <button type="submit">Add comment</button>
      </form>
  );
};

export default CreateComment;