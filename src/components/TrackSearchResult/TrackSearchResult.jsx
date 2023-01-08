import React from "react";

export default function TrackSearchResult({ track, chooseTrack }) {
  if (!track) {
    return <div>Error: track is not defined</div>;
  }
  function handlePlay(){
    chooseTrack(track)
  }
  return (
    <div
      className="d-flex m-2 align-items-center"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <img
        src={track.albumUrl}
        style={{ height: "64px", width: "64px", marginRight: "16px" }}
      />
      <div className="ml-3">
        <div>{track.title}</div>
        <div className="text-muted">{track.artist}</div>
      </div>
    </div>
  );
}
