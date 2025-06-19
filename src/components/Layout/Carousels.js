import React, { useState, useEffect } from 'react';
import aboutme from "../../assets/aboutme.jpg"
import logo from "../../assets/logo192.png"
import something from "../../assets/ChatGPT Image May 30, 2025, 09_36_08 AM.png"
import CardThings from './CardThings';
import Card from './Card';

const items=3;

const Carousel = (props) => {
  const [autoSlide,setAutoSlide]= useState(true); 
  const autoSlideInterval = 5000;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView,setSlidesPerView] = useState(3);

const getVisibleSlides = () => {
  const end = currentIndex + slidesPerView;
  if (end <= props.stuffs.length) {
    return props.stuffs.slice(currentIndex, end);
  } else {
    // wrap around
    return [
      ...props.stuffs.slice(currentIndex),
      ...props.stuffs.slice(0, end % props.stuffs.length)
    ];
  }
};

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % props.stuffs.length);
      }, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval, props.stuffs.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % props.stuffs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + props.stuffs.length) % props.stuffs.length);
  };

  return (
    <div className=" w-full mx-auto">
      <div onMouseOver={()=>{setAutoSlide(false)}} onMouseLeave={()=>setAutoSlide(true)} className={`overflow-hidden relative ${props.display===false? 'h-screen' : 'h-screen'}`}>
        {props.stuffs.map((image, index) => (
          <div key={index} className={`absolute inset-0 transition-transform duration-700 ease-in-out transform ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`}>

          
             {/* props.display?<div className="flex w-full">
             {getVisibleSlides().map((image, index) => (
              <div key={index} className={`min:h-96 max-h-screen flex-shrink-0 justify-stretch lg:w-1/3 lg:h-1/3 px-2`}> {/* 1/3 for 3 slides 
                <Card 
                  key={image.title} 
                  title={image.title} 
                  description={image.description}
                  url="syke.com" 
                  imageSrc={image.getImageSrc()}   
                  className="self-stretch"
                />  
              </div>
            ))}
          </div>: */}
            <div className='container relative'>
              <img src={image.getImageSrc()} alt={`Slide ${index}`} className="min-w-full max-w-full h-screen opacity-80 sm:aspect-9/16 md:aspect-video  md:object-cover" />    
              <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 text-center">
                <div className="italic text-xl md:text-3xl  text-opacity-100 font-extrabold text-blue-400">FALA LALA LA</div>
                <div className="italic text-5xl md:text-6xl text-opacity-100 font-extrabold text-gray-50">{image.description}</div>
              </div>
            </div>
          </div>    
        ))}
      </div>
      {/* <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 "
        onClick={prevSlide}
      >
        O
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        onClick={nextSlide}
      >
        O
      </button> */}
      <div className="relative bottom-10 left-0 right-0 flex justify-center mb-4">
        {props.stuffs.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full mx-1 ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default Carousel;