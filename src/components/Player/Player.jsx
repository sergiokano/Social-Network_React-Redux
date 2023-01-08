import React from "react";
import { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import ShareSongButton from "./ShareSongButton";

const Player = ({ accessToken, trackUri }) => {
  const [play, setPlay] = useState(false);
  useEffect(() => setPlay(true), [trackUri]);

  if (!accessToken) return null;
  return (
    <div>
        {trackUri && <ShareSongButton trackUri={trackUri} />}
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        callback={(state) => {
          if (!state.isPlaying) setPlay(false);
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
      />
    </div>
  );
};

export default Player;
