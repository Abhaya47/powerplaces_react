import Card from "./Card"

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
        <div className="flex  m-5 mt-8 h-screen m-auto">
            {stuffs.map((stuff) => ( 
         <Card 
           key={stuff.title} 
           title={stuff.title} 
           description={stuff.description} 
           url="syke.com" 
           imageSrc={stuff.getImageSrc()} 
         /> 
       ))} 
        </div>
    )
}