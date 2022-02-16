import React from "react";
import LogoReact from '../../../assets/LogoReact.png'


import './Footer.scss';


function Footer() {
    return (
        <footer className="footer">
            <div className="description_footer">
                <div>
                    <p>Realizado en React.js</p>
                </div>

                <figure className="figureReact">
                    <img className="ReactLogo" src={LogoReact}></img>
                </figure>
            </div>

        </footer>
    )
}

export default Footer;