import React from "react";

import './CardMusic.scss'

function CardMusic({ id, title, imgMusic, publishTime, videoId }) {
    return (
        <a target="_blank" href={`https://www.youtube.com/watch?v=${videoId}`} className="card_youtube">
            <img src={imgMusic}></img>
            <div className="music_description">
                <p className="publish">{publishTime.slice(0, 10)}</p>
                <p className="title">{title}</p>
            </div>
        </a>
    )
}

export default CardMusic;