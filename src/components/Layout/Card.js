import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 


export default function Card({ title, description, imageSrc }){
    return(
        <div className="Card m-5 ">
            <div className="flex flex-col flex-grow items-stretch box-border overflow-hidden shadow-xl shadow-gray-300 border rounded-lg md:min-h-[500px] md:max-h-[500px] lg:min-h-[756px] md:hover:transform md:hover:scale-[1.25] bg-slate-900 text-gray-500">
                    <img src={imageSrc} className=" w-full h-96 sm:aspect-3/2 lg:aspect-square lg:h-screen  object-cover"/>
                    <h1 className="font-bold text-2xl lg:text-4xl line-h">{title}</h1>
                    <p className="mt-2 mb-4 lg:text-xl flex-grow">{description}</p>
            </div>
        </div>
    )
}