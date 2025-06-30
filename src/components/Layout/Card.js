import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 


export default function Card({ title, description, imageSrc }){
    return(
        <div className="Card m-5 ">
            <div className="flex flex-col flex-grow items-stretch box-border overflow-hidden shadow-md shadow-gray-300 border rounded-lg md:min-h-[500px] lg:min-h-[600px] xl:min-h-[500px] 2xl:min-h-[700px] md:hover:transform md:hover:scale-[1.1] bg-slate-500 text-gray-300">
                    <img src={imageSrc} className=" w-full aspect-3/2 md:aspect-square md:h-full lg:h-full object-center object-cover"/>
                    <div className="flex flex-col flex-grow justify-between gap-y-2 p-4 mb-4">
                        <h1 className="font-bold text-2xl md:text-2xl lg:text-3xl mb-2">{title}</h1>
                        <p className=" text-base md:text-xl lg:text-2xl flex-grow">{description}</p>
                    </div>
            </div>
        </div>
    )
}