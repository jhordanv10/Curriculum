import React from "react";

import './CardMarvel.scss'

function CardMarvel({ id, title, imgPath, imgExtension, pages }) {
    return (
        <div className="card card_marvel">
            <img src={`${imgPath}.${imgExtension}`} className="card-img-top" alt="img-comic"></img>
            <div className="card-body ">
                <h5 className="card-title">Cómic #{id}</h5>
                <p className="pages">Páginas: {pages}</p>
                <p className="card-text comic_description">{title}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    )
}

export default CardMarvel;
