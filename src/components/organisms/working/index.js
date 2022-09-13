import React from "react";
import CardWorking from '../../moleculas/cardWorking'

import ImgDyna from '../../../assets/LogoDyna.png';
import ImgGraphic from '../../../assets/LogoGraphic.png';
import './Working.scss';

//Array Working
const works = [
    {
        id: 1,
        imgWork: ImgDyna,
        name: 'Dyna y Cía S.A',
        load: 'Analista de inventarios',
        time: 'Octubre 2019 - Agosto 2020',
        activities: `Inventarios físicos,
        Informes de inventarios, 
        Ajustes de inventarios,
        Saneamiento y posicionamiento de productos en bodega.`,          
    },
    {
        id: 2,
        imgWork: ImgDyna,
        name: 'Dyna y Cía S.A',
        load: 'Practicante Negocios Internacionales',
        time: 'Septiembre 2016 - Enero 2017',
        activities: `Realizar órdenes de compra,
        Infomes de abastecimiento (CEDI),
        Liqudación de importaciones,
        Contacto con agentes aduaneros.`,

    },
    {
        id: 3,
        imgWork: ImgGraphic,
        name: 'Graphic Market Company S.A.S',
        load: 'Desarrollador Frontend',
        time: 'Mayo 2022 - Actualmente',
        activities: `Dar soporte y optimizar aplicaciones web de la compañía,
        Desarrollar sitios web,
        Desarrollar aplicaciones con React js y frameworks de JavaScript,
        Consumo de web services y api rest,
        Implementación de arquitectura de software y patrones de diseño.
        `,

    }
]

function Working() {

    return (
        <div id="working" >
            <h2>Experiencia laboral</h2>
            <div className="card">
                {works && works.map(work => {
                    return (
                        <CardWorking
                            key={work.id}
                            name={work.name}
                            imgWork={work.imgWork}
                            load = {work.load}
                            time= {work.time}
                            activities ={work.activities}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Working;