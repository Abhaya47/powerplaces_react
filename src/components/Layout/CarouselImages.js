import Carousel from "./Carousels";

export default function CarouselImages(){
    const images=[ 
 { 
   getImageSrc: () => require("../../assets/j.jpg"), 
   description:"BOUDHA"
 }, 
 { 
   getImageSrc: () => require("../../assets/k.jpg"), 
   description:"MY O MY"
 }, 
 { 
    getImageSrc: () => require("../../assets/l.jpg"), 
    description:"O MY GOD"

 },
]
    return (
        <Carousel stuffs={images} display={false} />
    );
}



