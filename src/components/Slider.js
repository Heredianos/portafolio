import React from 'react'
import Carousel, {autoplayPlugin, slidesToShowPlugin}  from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Slides from "./Slides";
import  "../style/Slider.css";


const Slider = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2> Trabajos destacados </h2>
            </div>
            <div className="slide-container">
                {/*
                <Carousel plugins={[
                        'arrows',
                        'infinite',
                        'centered',
                            {
                            resolve: slidesToShowPlugin,
                            options: {
                            numberOfSlides: 2,
                            },
                        },
                    ]}
                    animationSpeed={1000}
                    >
                        <img src={imagen1} />
                        <img src={imagen2} />
                        <img src={imagen3}  />
                        <img src={imagen4}  />
                        
                        
                </Carousel>
                */}
                <Carousel plugins={[
                    'arrows',
                    'infinite',
                ]
            }
                breakpoints={{
                    960: {
                        plugins: [
                            {
                                slidesPerPage: 1,
                                arrows: false,
                                resolve:slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 1,
                                },
                            },
                        ]
                    }
                }}
                    slides= {Slides}
                />
            </div>
        </div>
    )
}

export default Slider;


