import React from "react";
import CardStudies from '../../moleculas/cardStudies'

import Bussines from '../../../assets/bussiness.svg';
import Costs from '../../../assets/costs.svg';
import Developing from '../../../assets/developing.svg';
import LogoSena from '../../../assets/LogoSena.png';
import LogoItm from '../../../assets/LogoItm.png';

import './Academic.scss';

    //Array Academic
    const studies = [
        {
            id: 1,
            name: 'Tecnología en Negocios Internacionales',
            img: Bussines,
            time: '2015 - 2017',
            site: 'Medellín, Antioquia',
            status: 'Terminado',
            imgUniversity: LogoSena,
        },
        {
            id: 2,
            name: 'Tecnología en Costos y presupuestos',
            img: Costs,
            time: '2018 - 2021',
            site: 'Medellín, Antioquia',
            status: 'Terminado',
            imgUniversity: LogoItm,
        },
        {
            id: 3,
            name: 'Tecnología en Desarrollo de software',
            img: Developing,
            time: '2020 - 2022',
            site: 'Itaguí, Antioquia',
            status: 'En curso',
            imgUniversity: LogoSena,
        }
    ]

function Academic() {
    return (
        <div id="academic" >
            <h2>Historial Académico</h2>
            <div className="card">
                {studies && studies.map(study => {
                    return (
                        <CardStudies
                            key={study.id}
                            name={study.name}
                            img={study.img}
                            time={study.time}
                            site={study.site}
                            status={study.status}
                            imgUniversity = {study.imgUniversity}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Academic;