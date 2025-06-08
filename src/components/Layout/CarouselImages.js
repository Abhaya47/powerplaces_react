import Carousel from "./Carousels";

export default function CarouselImages(){
    const images=[ 
 { 
   getImageSrc: () => require("../../assets/ChatGPT Image May 30, 2025, 09_36_08 AM.png"), 
 }, 
 { 
   getImageSrc: () => require("../../assets/aboutme.jpg"), 
 }, 
 { 

   getImageSrc: () => require("../../assets/logo192.png"), 
 },
]
    return (
        <Carousel stuffs={images} display={false}/>
    );
}