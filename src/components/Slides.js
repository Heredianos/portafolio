import React from 'react';
import imagen1 from '../images/PortfolioPictures/image-Portfolio1.jpg';
import imagen2 from '../images/PortfolioPictures/image-Portfolio2.jpg';
import imagen3 from '../images/PortfolioPictures/image-Portfolio3.jpg';
import imagen4 from '../images/PortfolioPictures/image-Portfolio4.jpg';
import imagen5 from '../images/PortfolioPictures/image-Portfolio5.jpg';
import imagen6 from '../images/PortfolioPictures/image-Portfolio6.jpg';
import imagen7 from '../images/PortfolioPictures/image-Portfolio7.jpg';

import '../style/Slider.css';

const slidesInfo = [
    {
        src: imagen1,
        alt: "Imagen 1",
        desc: "Especialidad en Redes Industriales",
    },
    {
        src: imagen2,
        alt: "Imagen 2.0",
        desc: "CAMs Autocad/SolidWorks",
    },
    {
        src: imagen3,
        alt: "Imagen 3",
        desc: "Desarollo HMI",
    },
    {
        src: imagen4,
        alt: "Imagen 4",
        desc: "Planos industriales",
    },
    {
        src: imagen5,
        alt: "Imagen 5",
        desc: "Instalación PLC",
    },
    {
        src: imagen6,
        alt: "Imagen 6",
        desc: "Desarrollo Sitios web",
    },
    {
        src: imagen7,
        alt: "Imagen 7",
        desc: "Desarrollo Apps",
    }
]

const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt}/>
        <div className="slide-desc">
            <span> {slide.desc} </span>
        </div>
    </div>
));

export default slides;