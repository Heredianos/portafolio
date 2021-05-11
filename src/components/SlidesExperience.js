import React from 'react';
import imagen1 from '../images/PortfolioPictures/image-Portfolio10.jpg';
import imagen2 from '../images/PortfolioPictures/image-Portfolio11.jpg';
import imagen3 from '../images/PortfolioPictures/image-Portfolio12.jpg';
import imagen4 from '../images/PortfolioPictures/image-Portfolio13.jpg';
import imagen5 from '../images/PortfolioPictures/image-Portfolio14.jpg';
import imagen6 from '../images/PortfolioPictures/image-Portfolio15.jpg';

import '../style/Slider.css';

const slidesInfo = [
    {
        src: imagen1,
        alt: "Imagen 1",
        desc: "2012-2018, Graduado UASLP",
    },
    {
        src: imagen2,
        alt: "Imagen 2.0",
        desc: "2018-2019, Integradora Industrial",
    },
    {
        src: imagen3,
        alt: "Imagen 3",
        desc: "Certificado B2 TOEFL",
    },
    {
        src: imagen4,
        alt: "Imagen 4",
        desc: "2020-Actualidad, Catedratico",
    },
    {
        src: imagen5,
        alt: "Imagen 5",
        desc: "2019-Actualidad, Educación online",
    },
    {
        src: imagen6,
        alt: "Imagen 6",
        desc: "Leer y escribir Braille",
    },

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