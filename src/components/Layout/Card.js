import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 


export default function Card({ title, description, imageSrc }){
    return(
        <div className="Card m-5 ">
            <div className="flex flex-col flex-grow items-stretch box-border overflow-hidden shadow-xl shadow-gray-300 border rounded-lg md:min-h-[500px] md:max-h-[500px] lg:min-h-[756px] xl:min-h-[756px] 2xl:min-h-[756px] md:hover:transform md:hover:scale-[1.1] bg-slate-500 text-gray-300">
                    <img src={imageSrc} className=" w-full h-96 sm:aspect-3/2 md:aspect-square md:h-full lg:h-full object-cover"/>
                    <div className="p-4 flex flex-col flex-grow">
                        <h1 className="m-2 font-bold text-2xl md:text-3xl lg:text-4xl line-h">{title}</h1>
                        <p className="m-2 mt-2 mb-4 md:text-xl lg:text-2xl flex-grow">{description}</p>
                    </div>
            </div>
        </div>
    )
}