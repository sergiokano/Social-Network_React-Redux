import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "antd";
import { useDispatch } from "react-redux";

const CreatePost = ({ showModal, handleClose, track }) => {
  const [description, setDescription] = useState("");
  // const [trackPost, setTrackPost] = useState("");
  const dispatch = useDispatch();
  
  function OnCreatePost(e) {
    e.preventDefault();
    const postData = {
      description,
      track,
     
    };
    console.log(postData);
    dispatch(CreatePost(postData));
  }

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Post a Song</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={OnCreatePost}>
          <div className="form-group">
            <label htmlFor="description">Write your post: </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div
            className="song-info"
            // value={trackPost}
            // onChange={(e) => setTrackPost(e.target.value)}
          >
            <img src={track.albumUrl} alt={track.title} />
            <div className="song-details">
              <div className="song-title">{track.title}</div>
              <div className="song-artist">{track.artist}</div>
            </div>
          </div>
          <button type="submit">Post</button>
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

export default CreatePost;