import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 


export default function Card({ title, description, imageSrc }){
    return(
        <div className="Card m-5 ">
            <div className="border-2 border-solid">
                <img src={imageSrc} className="h-40 w-56"/>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}