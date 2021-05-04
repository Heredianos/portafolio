import React from 'react'
import "../style/Cover.css"
import coverVideo from "../images/videoCover.mp4";


const Cover = () => {
    return <div className="cover-container">
        <video className="video" src={coverVideo} autoPlay loop muted />
        <h1> Juan Heredia</h1>
        <p> Ing. Mecatrónico | I+D </p>
    </div>
}

export default Cover
