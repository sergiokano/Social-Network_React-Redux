import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { createComment} from "../../../../../features/posts/postsSlice";


const CreateComment = ({ showModal, handleClose, track }) => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  
  function OnCreateComment(e) {
    e.preventDefault();
    const commentData = {
      description,
      track,
     
    };
    console.log(commentData);
    dispatch(createComment(commentData));
    console.log("entras?")
  }

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Post a Song</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={OnCreateComment}>
          <div className="form-group">
            <label htmlFor="description">Write your comment: </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit">Send your comment</button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateComment;