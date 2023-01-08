import React, { useState } from "react";
import "./ShareSongButton.scss";
import { Button } from "antd";
import Icon from "@ant-design/icons";
import Modal from "react-bootstrap/Modal";

const ShareSongButton = ({ trackUri, trackInfo, track }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="d-flex justify-content-center mb-4">
        <Button onClick={handleClick} className="btn-primary btn-lg">
          <Icon type="share-alt" />
          Share Song
        </Button>
{        console.log(track)}      
</div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Post a Song</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="description">Write your post: </label>
              <textarea className="form-control" id="description" rows="3" />
            </div>
            <div className="song-info">
              <img src={track.albumUrl} alt={track.title} />
              <div className="song-details">
                <div className="song-title">{track.title}</div>
                <div className="song-artist">{track.artist}</div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Compartir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShareSongButton;
