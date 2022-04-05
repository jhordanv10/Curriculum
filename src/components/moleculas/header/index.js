import React from "react";
import Foto from '../../../assets/Foto.jpg';
import Redes from "../../atoms/redes";
import './Header.scss';


function Header() {
    return (
        <header className="header">
            <Redes />
            <div className="info">
                <figure>
                    <img src={Foto} alt="foto"></img>
                </figure>
                <div className="description">
                    <h2> Jhordan Villamil Acevedo</h2>
                    <h4>Desarrollo de software - Análisis de costos y presupuestos</h4>
                    <p> ¡Hola, Bienvenid@ a mi perfil! <br></br><br></br>
                        {/* Soy una persona responsable, aplicada y dedicada a cada cosa que hago en mi día a día.
                        Me gusta mucho aprender; Para mí el conocimiento tiene un valor fundamental en la vida. */}
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header;