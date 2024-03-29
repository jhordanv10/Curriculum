import React from "react";
import Cv from '../../../assets/CVJhordan.pdf';
import CvImg from '../../../assets/CVJhordan.png';
import 'animate.css';
import './Profile.scss';

function Profile() {
    return (
        <section id="profile">
            <h2>Perfil</h2>
            <articule className="my_profile animate__animated animate__fadeIn" >
                <div className="description">
                    <p className="description_p"> Tengo 24 años, y actualmente vivo en la ciudad de Medellín, Colombia. <br></br>
                        Soy una persona responsable, aplicada y dedicada a cada cosa que hago en mi día a día.
                        Me gusta mucho aprender; Para mí el conocimiento tiene un valor fundamental en la vida.
                    </p>
                </div>
                <div className="link_cv">
                    <a target="_blank" href={Cv} rel="noopener noreferrer">
                        <p>Ver CV en formato PDF</p>
                        <img className="cv_img" src={CvImg} alt="img Cv"></img>
                    </a>
                </div>
            </articule>
        </section>
    )
}
export default Profile;