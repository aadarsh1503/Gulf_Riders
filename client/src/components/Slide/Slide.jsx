import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Slide.css";
import i2 from "./i2.png";
import i3 from "./i3.png";
import i4 from "./i4.png";
import i5 from "./i5.png";
import i1 from "./i1.png";
import i6 from "./i6.png";

const Slide = () => {
    const images = [i1, i2, i3, i4, i5, i6];
    const names = ["Bootstrap", "HTML5", "JQuery", "Sass", "Gulp", "NPM"]; // Array of names for each image
    const imageLinks = [
    ];

    const [isLoaded, setIsLoaded] = useState(false);
    const sliderRef = useRef(null);

    const preloadImages = (images) => {
        let loadedImages = 0;
        const totalImages = images.length;

        images.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedImages += 1;
                if (loadedImages === totalImages) {
                    setIsLoaded(true);
                }
            };
        });
    };

    useEffect(() => {
        preloadImages(images);
    }, [images]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,  // Adjusting this to 3 for better responsiveness
        slidesToScroll: 1,
        autoplay: true,
        arrows: false, // Disabled arrows
        autoplaySpeed: 2100,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4, // For medium screens, showing 4 slides
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3, // For small screens, showing 3 slides
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, // For very small screens, showing 1 slide
                }
            }
        ]
    };

    return (
        <div className='bg-dblue mb-20 font-poppins py-24'>
            <h1 className='text-center text-white mb-10 text-xl'>Features</h1>
            <h2 className='text-center text-white lg:p-0 p-4 text-3xl'>Features Used in RiderCRM Admin Template</h2>
            <section className="py-10 lg:max-w-6xl ml-40 lg:ml-44 lg:w-full w-[200px] mx-auto">
                <div className="">
                    {isLoaded ? (
                        <Slider ref={sliderRef} {...settings}>
                            {images.map((src, index) => (
                                <div key={index} className="slide-item">
                                    <a href={imageLinks[index]} target="_blank" rel="noopener noreferrer" className="image-link">
                                        <div className="flex justify-center mt-8  items-center bg-dblue  rounded-full p-2 w-20 h-20"> {/* Perfect circle size */}
                                            <img
                                                src={src}
                                                alt={`Slide ${index + 1}`}
                                                className="object-cover w-full h-full rounded-full"  
                                            />
                                        </div>
                                        <p className="text-center text-white mt-2">{names[index]}</p> {/* Name under the image */}
                                    </a>
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <div className="flex justify-center items-center" style={{ height: '300px' }}>
                            <span>Loading...</span>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Slide;
