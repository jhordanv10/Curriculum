import React, { useState } from "react";

//Organisms
import Profile from '../../organisms/profile';
import Academic from '../../organisms/academic';
import Working from '../../organisms/working';
import Knowledge from '../../organisms/knowledge';
import Hobbies from '../../organisms/hobbies';
import Footer from '../../moleculas/footer';

//Images
import ProfileImg from '../../../assets/profile.svg';
import AcademicImg from '../../../assets/academic.svg';
import WorkingImg from '../../../assets/working.svg';
import KnowledgeImg from '../../../assets/knowledge.svg';
import HobbiesImg from '../../../assets/hobbies.svg';

//Sass
import './Bar.scss'

function Bar() {

    const [option, setOption] = useState({
        profile: false,
        academic: false,
        working: false,
        knowledge: false,
        hobbies: false,

        footer: false,
    })

    const onChangeOption = (name) => {
        Object.keys(option).forEach(key => {
            option[key] = false;
        });

        setOption({
            ...option,
            [name]: true,
            footer: true,
        })
    }


    return (
        <>
            <section className="academicBar">
                <a href="#profile" className={`profile ${!!option.profile && 'active'} `}
                    onClick={() => onChangeOption('profile')}
                    setOption={setOption}
                >
                    <img className="profile" src={ProfileImg} />
                    {/* <p className="knowledge_description">Conocimientos</p> */}
                </a>

                <a href="#academic" className={`academic ${!!option.academic && 'active'} `}
                    onClick={() => onChangeOption('academic')}
                >
                    <img className="academic" src={AcademicImg} />
                    {/* <p className="academic_description">Historia académica</p> */}
                </a>

                <a href="#working" className={`working ${!!option.working && 'active'} `}
                    onClick={() => onChangeOption('working')}
                >
                    <img className="working" src={WorkingImg} />
                    {/* <p className="working_description">Experiencia laboral</p> */}
                </a>

                <a href="#knowledge" className={`knowledge ${!!option.knowledge && 'active'} `}
                    onClick={() => onChangeOption('knowledge')}
                >
                    <img className="knowledge" src={KnowledgeImg} />
                    {/* <p className="knowledge_description">Conocimientos</p> */}
                </a>

                <a href="#hobbies" className={`hobbies ${!!option.hobbies && 'active'} `}
                    onClick={() => onChangeOption('hobbies')}
                >
                    <img className="hobbies" src={HobbiesImg} />
                    {/* <p className="knowledge_description">Conocimientos</p> */}
                </a>

            </section>

            {(option.profile && option.footer) && (
                <>
                    <Profile />
                    <Footer />
                </>
            )}
            {(option.academic && option.footer) && (
                <>
                <Academic />
                <Footer />
            </>

            )}
            {(option.working && option.footer) && (
                <>
                    <Working />
                    <Footer />
                </>


            )}
            {(option.knowledge && option.footer) && (
                <>
                    <Knowledge />
                    <Footer />
                </>
            )}
            {(option.hobbies && option.footer) && (
                <>
                    <Hobbies />
                    <Footer />
                </>
            )}
        </>
    )
}
export default Bar;