import React, { useState, useEffect } from 'react';
import aboutme from "../../assets/aboutme.jpg"
import logo from "../../assets/logo192.png"
import something from "../../assets/ChatGPT Image May 30, 2025, 09_36_08 AM.png"
import CardThings from './CardThings';
import Card from './Card';



// const props.stuffs=[aboutme,logo,something];
const items=3;
let temp=items;

// {title,description,imageSrc}

const Carousel = (props) => {
  const [autoSlide,setAutoSlide]= useState(true); 
  const autoSlideInterval = 5000;
  const [currentIndex, setCurrentIndex] = useState(0);
  // props.stuffs.map((image, index) =>(
    console.log("hellooo");
  // ));
  // console.log(props.stuffs.length)

  // if (autoSlide) {
  //     const poop=()=>
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % props.stuffs.length);
      
  //     const slideInterval = setInterval(poop,autoSlideInterval);
  //   }

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
      <div onMouseOver={()=>{setAutoSlide(false)}} onMouseLeave={()=>setAutoSlide(true)} className={`overflow-hidden relative h-screen `}>
        {props.stuffs.map((image, index) => (
          
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out transform ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          >

          {props.display?<div className="flex  m-5 mt-8 h-screen m-auto">
            <Card 
                  key={props.stuffs[0].title} 
                  title={props.stuffs[0].title} 
                  description={props.stuffs[0].description}
                  url="syke.com" 
                  imageSrc={props.stuffs[0].getImageSrc()} 
                /> 
                <Card 
                  key={props.stuffs[index].title} 
                  title={props.stuffs[index].title} 
                  description={props.stuffs[index].description}
                  url="syke.com" 
                  imageSrc={props.stuffs[index].getImageSrc()} 
                /> 
                <Card 
                  key={props.stuffs[2].title} 
                  title={props.stuffs[2].title} 
                  description={props.stuffs[2].description}
                  url="syke.com" 
                  imageSrc={props.stuffs[2].getImageSrc()} 
                /> 
          </div>:
          
            <img src={image.getImageSrc()} alt={`Slide ${index}`} className="lg:w-auto w-full h-auto sm:aspect-9/16 lg:aspect-video sm:object-cover" />    
          }      
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
      <div className="relative bottom-0 left-0 right-0 flex justify-center mb-4">
        {props.stuffs.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};



export default Carousel;