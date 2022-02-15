import React from "react";

import HtmlImg from '../../../assets/html.png';
import CssImg from '../../../assets/css.png';
import JavascriptImg from '../../../assets/js.png';
import GitImg from '../../../assets/git.png';
import BootstrapImg from '../../../assets/bootstrap.png';
import ReactImg from '../../../assets/react.png';
import PhpImg from '../../../assets/php.png';
import MysqlImg from '../../../assets/mysql.png';
import CardKnowledge from '../../moleculas/cardKnowledge'

import './Knowledge.scss';

    //Array Knowledge
    const knowledge = [
        {
            id:1,
            name: 'Html',
            imgKnow: HtmlImg,
            percentage: 85,
        },
        {
            id:2,
            name: 'Css',
            imgKnow: CssImg,
            percentage: 75,
        },
        {
            id:3,
            
            name: 'Javascript',
            imgKnow: JavascriptImg,
            percentage: 60,

        },
        {
            id:4,
            name: 'Git',
            imgKnow: GitImg,
            percentage: 60,
        },
        {
            id:5,
            name: 'Bootstrap',
            imgKnow: BootstrapImg,
            percentage: 60,
        },
        {
            id:6,
            name: 'React',
            imgKnow: ReactImg,
            percentage: 55,
        },
        {
            id:7,
            name: 'PHP',
            imgKnow: PhpImg,
            percentage: 50,
        },
        {
            id:8,
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