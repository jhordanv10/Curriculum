import React from "react";
import './CardStudies.scss'

import 'animate.css';

function CardStudies({ key, name, img, time, site, status, imgUniversity }) {
    return (
        <div className="card_studies animate__animated animate__fadeInDown" key={key}>
            <div className="studies">
                <div className="datesCarrer">
                    <h3 className="name"> {name} </h3>
                    <img className="img" src={img} ></img>
                    <p className="time">{time}</p>
                    <p className="site">{site}</p>
                </div>

                <div className={`university ${ status === 'Terminado' && 'green'}
                ${ status === 'En curso' && 'orange'} `} >
                    <img className="imgUniversity" src={imgUniversity}></img>
                    <p className="status">{status}</p>
                </div>
            </div>
        </div>
    )
}
export default CardStudies;