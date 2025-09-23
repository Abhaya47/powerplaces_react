import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 


export default function Card({ title, description, imageSrc }){
    return(
        <div className="Card m-5 ">
        <div className="flex flex-col flex-grow items-stretch box-border overflow-hidden shadow-md shadow-gray-300 border rounded-lg md:min-h-[500px] lg:min-h-[550px] xl:min-h-[500px] 2xl:min-h-[700px] md:hover:transform md:hover:-translate-y-5 md:hover:delay-300 md:hover:ease-linear bg-slate-700 text-gray-100">
        <img 
            src={imageSrc} 
            className="w-full aspect-3/2 md:aspect-square md:h-full lg:h-full object-center object-cover"
        />
        <div className="flex flex-col flex-grow justify-between gap-y-3 p-6">
            <h1 className="uppercase font-bold tracking-wider text-xl md:text-2xl lg:text-3xl leading-snug transition-colors duration-300 hover:text-emerald-300">
                {title}
            </h1>
            <p className="capitalize text-base md:text-lg lg:text-xl leading text-balance text-gray-200/90 transition-all duration-300 group-hover:text-gray-100 group-hover:tracking-wide">
                {description}
            </p>
        </div>
        </div>
        </div>
    )
}