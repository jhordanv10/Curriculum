import React from "react";
import './CardKnowledge.scss';
import 'animate.css';

function CardKnowledge({ key, name, imgKnow, percentage }) {
    return (
        <div className="card_knowledge animate__animated animate__fadeInDown" key={key}>
            <div className="know">
                <div className="datesKnowledge" key={key}>
                    <div className="images">
                        <img className="imgKnow" src={imgKnow} ></img>
                    </div>
                    <div className="descriptions">
                        <h3 className="name"> {name} </h3>
                        <progress className="progress animate__animated animate__backInLeft"
                        max="100"  value={percentage}>  </progress>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardKnowledge;