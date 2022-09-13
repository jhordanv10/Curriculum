import React from "react";

import HtmlImg from '../../../assets/html.png';
import CssImg from '../../../assets/css.png';
import JavascriptImg from '../../../assets/js.png';
import GitImg from '../../../assets/git.png';
import BootstrapImg from '../../../assets/bootstrap.png';
import ReactImg from '../../../assets/react.png';
import PhpImg from '../../../assets/php.png';
import MysqlImg from '../../../assets/mysql.png';
import VueImg from '../../../assets/vue.png'
import VuetifyImg from '../../../assets/vuetify.png'
import TailwindImg from '../../../assets/tailwind.png'
import ThreeImg from '../../../assets/three.png'

import CardKnowledge from '../../moleculas/cardKnowledge'

import './Knowledge.scss';

    //Array Knowledge
    const knowledge = [
        {
            id:1,
            name: 'Html',
            imgKnow: HtmlImg,
            percentage: 90,
        },
        {
            id:2,
            name: 'Css',
            imgKnow: CssImg,
            percentage: 90,
        },
        {
            id:3,
            name: 'Javascript',
            imgKnow: JavascriptImg,
            percentage: 85,
            
        },
        {
            id:4,
            name: 'Git',
            imgKnow: GitImg,
            percentage: 85,
        },
        {
            id:5,
            name: 'Vue js',
            imgKnow: VueImg,
            percentage: 85,
        },
        {
            id:6,
            name: 'React',
            imgKnow: ReactImg,
            percentage: 70,
        },
        {
            id:7,
            name: 'Tailwind',
            imgKnow: TailwindImg,
            percentage: 65,
        },
        {
            id:8,
            name: 'Bootstrap',
            imgKnow: BootstrapImg,
            percentage: 60,
        },
        {
            id:9,
            name: 'Vetify',
            imgKnow: VuetifyImg,
            percentage: 50,
        },
        {
            id:10,
            name: 'ThreeJs',
            imgKnow: ThreeImg,
            percentage: 50,
        },
        {
            id:11,
            name: 'PHP',
            imgKnow: PhpImg,
            percentage: 50,
        },
        {
            id:12,
            name: 'MySql',
            imgKnow: MysqlImg,
            percentage: 40,
        },

    ]

function Knowledge () {
    return (
        <div  id="knowledge">
            <h2>Conocimientos</h2>
            <div className="knowledge_description">
                {knowledge && knowledge.map(know => {
                    return (
                        <CardKnowledge
                            key={know.id}
                            name={know.name}
                            imgKnow={know.imgKnow}
                            percentage = {know.percentage}
                        />
                    )
                })}

            </div>
        </div>
    )
}

export default Knowledge;