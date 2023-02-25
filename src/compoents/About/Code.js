import React from 'react'
import './About.css';
import video from '../Projects/Imgs/record.mp4';
function Code() {
  return (
   
      <div className="card-code">
        <video src={video} autoPlay loop muted></video>
        </div>
  

  )
}

export default Code