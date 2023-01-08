import React from "react";

export default function TrackSearchResult({ track }) {
    if (!track) {
      return <div>Error: track is not defined</div>;
    }
  
    return (
      <div className="d-flex m-2 align-items-center">
        <div>{track.title}</div>
      </div>
    );
  }