import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Slide.css"; // We will put all our new sexy styles here

// Image imports remain the same
import i1 from "./i1.png";
import i2 from "./i2.png";
import i3 from "./i3.png";
import i4 from "./i4.png";
import i5 from "./i5.png";
import i6 from "./i6.png";

const Slide = () => {
    const images = [i1, i2, i3, i4, i5, i6];
    const names = ["Bootstrap", "HTML5", "JQuery", "Sass", "Gulp", "NPM"];
    // Add links if you have them, otherwise it's fine
    const imageLinks = [
        "https://getbootstrap.com/",
        "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
        "https://jquery.com/",
        "https://sass-lang.com/",
        "https://gulpjs.com/",
        "https://www.npmjs.com/"
    ];

    const [isLoaded, setIsLoaded] = useState(false);
    const sliderRef = useRef(null);

    // This preloading logic is good, let's keep it.
    useEffect(() => {
        const preloadImages = (srcArray) => {
            const promises = srcArray.map((src) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });

            Promise.all(promises).then(() => {
                setIsLoaded(true);
            });
        };
        preloadImages(images);
    }, [images]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 5000, // Slower speed for a smoother, continuous float
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 0, // Set to 0 for a seamless transition with cssEase
        cssEase: "linear",
        pauseOnHover: true, // Let's enable pause on hover, it's a better user experience
        responsive: [
            {
                breakpoint: 1280, // xl screens
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024, // lg screens
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768, // md screens
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640, // sm screens
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        // Main container with a new ID for specific styling
        <div id="tech-showcase" className='bg-dblue font-poppins py-24 relative overflow-hidden'>
            <div className="text-center mb-16">
                <h1 className='text-cyan-400 mb-4 text-lg font-semibold tracking-widest uppercase'>Core Technologies</h1>
                <h2 className='text-white text-4xl lg:text-5xl font-bold'>The Powerhouse Behind RiderCRM</h2>
            </div>
            
            {/* The main content area */}
            <section className="max-w-7xl mx-auto px-4">
                {isLoaded ? (
                    <Slider ref={sliderRef} {...settings}>
                        {images.map((src, index) => (
                            <div key={index} className="tech-card-container">
                                <a 
                                    href={imageLinks[index] || '#'} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="tech-card"
                                >
                                    <div className="tech-icon-wrapper">
                                        <img
                                            src={src}
                                            alt={names[index]}
                                            className="tech-icon"
                                        />
                                    </div>
                                    <p className="tech-name">{names[index]}</p>
                                </a>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <div className="flex justify-center items-center h-48">
                        <span className="text-white text-xl">Initializing Tech Matrix...</span>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Slide;