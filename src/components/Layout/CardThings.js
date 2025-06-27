import Card from "./Card"
import Carousel from "./Carousels"

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


export default function CardThings(){    
    return(
        <div className="grid grid-cols-1 justify-center mx-0 px-0 gap-y-2 md:mt-2 md:grid-cols-2 md:gap-x-3 md:px-0 md:gap-y-2 md:mx-3 lg:mt-2 lg:grid-cols-3 lg:gap-x-3 lg:px-0 lg:gap-y-3 bg-gray-950">
            {stuffs.map((image, index) => (
                <Card 
                  key={image.title} 
                  title={image.title} 
                  description={image.description}
                  url="syke.com" 
                  imageSrc={image.getImageSrc()}   
                />  
            ))}
        </div>
    )
}