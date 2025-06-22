import { useState } from "react"

const images=[ 
 { 
   title: "Hello", 
   description: 
     "Ssomething something something hyyyyaaaa I'm bored ", 
   getImageSrc: () => require("../assets/a.jpg"), 
 }, 
 { 
   title: "Hiiiii", 
   description: 
     "I have to write something ", 
   getImageSrc: () => require("../assets/b.jpg"), 
 }, 
 { 
   title: "pop", 
   description: 
     "Black is a very good colour on me", 
   getImageSrc: () => require("../assets/c.jpg"), 
 }, 
 { 
   title: "Kamp", 
   description: 
     "Some dayyyy I will find my way back to your", 
   getImageSrc: () => require("../assets/d.jpg"), 
 },
  { 
   title: "Yorkshire", 
   description: 
     "I got this felling on the summer day", 
   getImageSrc: () => require("../assets/e.jpg"), 
 },
  { 
   title: "Omphf", 
   description: 
     "hello darkness my old friend", 
   getImageSrc: () => require("../assets/f.jpg"), 
 },
   { 
   title: "Omphf", 
   description: 
     "hello darkness my old friend", 
   getImageSrc: () => require("../assets/g.jpg"), 
 },
   { 
   title: "Omphf", 
   description: 
     "hello darkness my old friend", 
   getImageSrc: () => require("../assets/h.jpg"), 
 },
   { 
   title: "Omphf", 
   description: 
     "hello darkness my old friend", 
   getImageSrc: () => require("../assets/i.jpg"), 
 },
   { 
   title: "Omphf", 
   description: 
     "hello darkness my old friend", 
   getImageSrc: () => require("../assets/j.jpg"), 
 },
   { 
   title: "Omphf", 
   description: 
     "hello darkness my old friend", 
   getImageSrc: () => require("../assets/k.jpg"), 
 },
   { 
   title: "Omphf", 
   description: 
     "hello darkness my old friend", 
   getImageSrc: () => require("../assets/l.jpg"), 
 },
    { 
   title: "Omphf", 
   description: 
     "hello darkness my old friend", 
   getImageSrc: () => require("../assets/ChatGPT Image May 30, 2025, 09_36_08 AM.png"), 
 },
]

export default function Gallery(){

  const[desc,setDesc] = useState("hidden");

    return <div className="container box-border">
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 p-4 ">
          {
            images.map((image,index)=>(
              <div className="break-inside-avoid mb-4 relative ">
                <img src={image.getImageSrc()} alt={`photo ${index}`} className=" h-auto max-w-full rounded-lg "/>
                <div className=" opacity-0 hover:opacity-100 focus:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold"> {image.title}</div>
              </div>
            ))}
      </div>
    </div>
}