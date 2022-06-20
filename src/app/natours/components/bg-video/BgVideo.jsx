import React from "react";
import "./_BgVideo.scss";

const BgVideo = ({ mp4URL, webmURL }) => {
  return (
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        {/* coverr.co */}
        <source src={mp4URL} type="video/mp4" />
        <source src={webmURL} type="video/webm" />
        Your browser is not supported!
      </video>
    </div>
  );
};

export default BgVideo;
