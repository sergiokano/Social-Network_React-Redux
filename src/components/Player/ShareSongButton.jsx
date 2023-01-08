import React from 'react';
import "./ShareSongButton.scss"
import { Button } from 'antd';
import Icon from '@ant-design/icons';

const ShareSongButton = ({ trackUri }) => {
    const handleClick = () => {
      window.open(`https://open.spotify.com/track/${trackUri}`, '_blank');
    };
  
    return (
        <div className="d-flex justify-content-center mb-4">
        <Button onClick={handleClick} className="btn-primary btn-lg">
          <Icon type="share-alt" />
          Share Song
        </Button>
      </div>
    );
  };

  export default ShareSongButton;


