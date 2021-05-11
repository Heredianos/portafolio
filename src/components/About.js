import React from 'react';
import "../style/About.css"
//import ImagePicture from "../images/perfil.png"
import Picture from '../components/Picture';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Te cuento sobre mi</h3>
                <p>
                Me defino como una persona imparable capaz de encontrar solución a los desafíos que se ponen frente a mí con creatividad y trabajo.                                    </p>
                <br/>
                <p>
                Adicionalmente me enorgullezco de considerarme una persona extremadamente eficiente, alguien que detesta el retrabajo, no hay necesidad de hacer las cosas más de una vez, a menos que sea para mejorar.                </p>
            </div>
            <div className="about-img">
                <Picture/>
            </div>
        </div>
    )
};
export default About
