import Carousel from "./Carousels";

export default function CarouselImages(){
    const images=[ 
 { 
   getImageSrc: () => require("../../assets/g.jpg"), 
   description:"BOUDHA"
 }, 
 { 
   getImageSrc: () => require("../../assets/f.jpg"), 
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



