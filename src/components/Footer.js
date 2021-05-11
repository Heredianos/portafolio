import React from 'react'
import "../style/Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-info">
                <h1>
                    Juan Heredia
                </h1>
                <p>
                    San Luis Potosí 
                </p>
            </div>
            <div className="footer-contact">
                <h3>
                    Contactame 
                </h3>
                <p>
                    Empecemos a trabajar
                </p>
            </div>
            <div className="footer-sns">
                <div className="desing-by">
                    Diseñado por Juan Heredia
                </div>
                <div className="sns-links">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"> </i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter twitter"> </i>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" >
                        <i className="fab fa-facebook facebook"> </i>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Footer
