import Card from "./Card"
import { useState,useEffect } from "react"
import image from "../../assets/i.jpg"
const stuffs=[ 
 { 
   title: "Hello", 
   description: 
     "Ssomething something something hyyyyaaaa I'm bored ", 
   getImageSrc: () => require("../../assets/a.jpg"), 
 }, 
 { 
   title: "Hiiiii", 
   description: 
     "I have to write something ", 
   getImageSrc: () => require("../../assets/b.jpg"), 
 }, 
 { 
   title: "pop", 
   description: 
     "Black is a very good colour on me", 
   getImageSrc: () => require("../../assets/c.jpg"), 
 }, 
 { 
   title: "Kamp", 
   description: 
     "Some dayyyy I will find my way back to your", 
   getImageSrc: () => require("../../assets/d.jpg"), 
 },
  { 
   title: "Yorkshire", 
   description: 
     "I got this felling on the summer day", 
   getImageSrc: () => require("../../assets/e.jpg"), 
 },
  { 
   title: "Omphf", 
   description: 
     "hello darkness my old friend", 
   getImageSrc: () => require("../../assets/f.jpg"), 
 },
]


export default function CardThings({visibleStuff}){   
    return(
        <div className="grid grid-cols-1 justify-center items-stretch mx-5 px-0 gap-y-2 md:mt-2 md:grid-cols-2 md:gap-x-10 md:px-5 md:gap-y-5 md:mx-5 lg:mt-2 lg:grid-cols-3 lg:gap-x-3 lg:px-0 lg:gap-y-3 xl:grid-cols-4 bg-gray-950">
            {visibleStuff.map((image, index) => (
                <Card 
                  key={image.title} 
                  title={image.title} 
                  description={image.description}
                  url="tch.com" 
                  imageSrc={stuffs[0].getImageSrc()}   
                />  
            ))}
        </div>
    )
}