import React from "react";
import CardWorking from '../../moleculas/cardWorking'

import ImgDyna from '../../../assets/LogoDyna.png';
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