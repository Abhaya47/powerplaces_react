import Card from "./Card"
import Carousel from "./Carousels"

const stuffs=[ 
 { 
   title: "Hello", 
   description: 
     "waaaaaa", 
   getImageSrc: () => require("../../assets/ChatGPT Image May 30, 2025, 09_36_08 AM.png"), 
 }, 
 { 
   title: "Hiiiii", 
   description: 
     ",JUEJAGDHZJB  .KJBB ", 
   getImageSrc: () => require("../../assets/aboutme.jpg"), 
 }, 
 { 
   title: "pop", 
   description: 
     "A saefJKCBdh .wkjeafbdsh kjAEFBSBD", 
   getImageSrc: () => require("../../assets/icons8-facebook.svg"), 
 }, 
 { 
   title: "faskh", 
   description: 
     "i DONT LIKE WRITING", 
   getImageSrc: () => require("../../assets/logo192.png"), 
 },
]




export default function CardThings(){    
    return(
        <div className="">
          <Carousel stuffs={stuffs} display={true}/>

        </div>
    )
}