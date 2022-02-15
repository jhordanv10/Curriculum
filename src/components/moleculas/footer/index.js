import React from "react";
import LogoReact from '../../../assets/LogoReact.png'
import MarvelImg from '../../../assets/Marvel.png';
import YoutubeImg from '../../../assets/Youtube.png';


import './Footer.scss';


function Footer() {
    return (
        <footer className="footer">
            <div className="description_footer">
                <figure>
                    <img className="ReactLogo" src={LogoReact}></img>
                </figure>
                <h4 className="react">Hecho con React.js </h4>
                <h4 className="api">Api's: </h4>
                <figure className="ImagesApis">
                    <a href="https://developer.marvel.com/" target="_blank">
                        <img className="imgM" src={MarvelImg}></img>
                    </a>
                    <a href="https://developers.google.com/youtube/v3" target="_blank">
                        <img className="imgY" src={YoutubeImg}></img>
                    </a>
                </figure>
            </div>

        </footer>
    )
}

export default Footer;