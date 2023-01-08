import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from "antd";
import Icon from "@ant-design/icons";

const ShareModal = ({ showModal, handleClose, track }) => {
  return (
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
  );
};

export default ShareModal;