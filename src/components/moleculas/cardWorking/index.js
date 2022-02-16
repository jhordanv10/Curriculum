import React from "react";
import './CardWorking.scss'

import 'animate.css';

function CardWorking({ key, name, imgWork, time, load, activities }) {
    return (
        <div className="card_working animate__animated animate__fadeInDownBig" key={key}>
            <div className="working">
                <div className="datesWork" key={key}>
                    <img className="img" src={imgWork}></img>
                    <h3 className="name">  {name} <br></br>  </h3>
                    <p className="load"> <strong>Cargo:</strong>  {load}</p>
                    <p className="activities"> <strong>Fecha:</strong> {time} <br></br> <br></br> 
                    <strong>Actividades:</strong> {activities}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default CardWorking;