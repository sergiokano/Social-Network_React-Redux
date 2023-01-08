import React, { useState } from "react";
import "./ShareSongButton.scss";
import { Button } from "antd";
import Icon from "@ant-design/icons";
import CreatePost from './CreatePost/CreatePost';

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
      </div>
      <CreatePost showModal={showModal} handleClose={handleClose} track={track} />
    </>
    );
  };
  
  export default ShareSongButton;
