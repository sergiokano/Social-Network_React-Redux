import React from "react";
import { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import ShareSongButton from "./ShareSongButton";

const Player = ({ accessToken, trackUri, trackInfo, track }) => {
  const [play, setPlay] = useState(false);
  useEffect(() => setPlay(true), [trackUri]);

  if (!accessToken) return null;
  return (
    <div>
      {trackUri && (
        <ShareSongButton trackUri={trackUri} trackInfo={trackInfo} track={track}/>
      )}
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
