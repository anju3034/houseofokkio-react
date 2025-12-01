import React from "react"
import "./Videobanner.css";

export default function Videobanner() {
    return(
        <div className="">
          <video
        className="video-full"
        src="/Web-House-Of-Okkio-2580x1080-02-1.mp4" 
        autoPlay
        loop
        muted
        playsInline
      ></video>
        </div>
    );
}