import React from "react";
import LogoReact from '../../../assets/LogoReact.png'
import MarvelImg from '../../../assets/Marvel.png';
import YoutubeImg from '../../../assets/Youtube.png';


import './Footer.scss';


function Footer() {
    return (
        <footer className="footer">
            <div className="description_footer">
                <figure className="figureReact">
                    <img className="ReactLogo" src={LogoReact}></img>
                </figure>
                {/* <figure className="figureMarvel">
                    <a className="link_marvel" href="https://developer.marvel.com/" target="_blank">
                        <img className="imgM" src={MarvelImg}></img>
                    </a>
                </figure>
                <figure className="figureYoutube">
                    <a className="link_youtube" href="https://developers.google.com/youtube/v3" target="_blank">
                        <img className="imgY" src={YoutubeImg}></img>
                    </a>
                </figure> */}
            </div>

        </footer>
    )
}

export default Footer;