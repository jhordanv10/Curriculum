import React from "react";
import ArrowImg from '../../../assets/arrow.svg'
import './Arrow.scss';

function Arrow() {
    return (
        <a href="#App" className="arrow">
            <img src={ArrowImg} alt="img arrow"></img>
        </a>
    )
}

export default Arrow;