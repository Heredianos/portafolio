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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
            <div className="about-img">
                <Picture/>
            </div>
        </div>
    )
};
export default About
