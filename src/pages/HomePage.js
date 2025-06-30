import CardThings from "../components/Layout/CardThings";
import CarouselImages from "../components/Layout/CarouselImages";
import Testimonials from "./Testimonials";
import f from "../assets/moumntain.jpeg";
import g from "../assets/mountain1.jpg";

import "../css/homepage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HomePage=()=>{

    return(
        <div className=" flex-col">
            
            <div className="h-screen ">
                <CarouselImages />
            </div>


            <div
            className="relative h-screen w-full bg-fixed bg-center bg-cover bg-no-repeat opacity-90"
            style={{ backgroundImage: `url(${g})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-md">
                        Power Places
                    </h1>
                    <p className="mt-4 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto drop-shadow-sm">
                        Where landscapes meet legends. Discover the beauty, the story, and the silence.                    </p>
                    </div>
                </div>
            </div>



            <div className=" mx-0 pb-10 pt-20 px-0 bg-slate-950">
                <h1 className="pb-4 text-3xl md:text-5xl lg:text-6xl font-extrabold font-sans  text-orange-300 leading-tight tracking-tight drop-shadow-sm transition duration-300 hover:text-cyan-100 text-center">Power Places</h1>
                <p className=" text-center text-lg md:text-2xl lg:text-3xl italic text-emerald-200 hover:text-cyan-100 pb-5 md:pb-7">Discover places that change your perspective.</p>
                <CardThings />
                <div className="flex items-center justify-center pt-5">
                <button class=" inline-flex items-center text-center text-xl justify-center p-0.5 mb-2 me-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-900 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span class=" px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    View More <FontAwesomeIcon icon={faArrowRight} className="pr-2 text-xl"/>
                    </span>
                </button>
                </div>
            </div>

            <div
            className="relative h-screen w-full bg-fixed bg-center bg-cover bg-no-repeat opacity-90"
            style={{ backgroundImage: `url(${f})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-md">
                        Every Place Has a Story
                    </h1>
                    <p className="mt-4 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto drop-shadow-sm">
                        These are the memories people carry home, more than photos, more than footsteps.        </p>
                    </div>
                </div>
            </div>

            <div>
                <Testimonials/>
            </div>
        </div>
         
    );
}

export default HomePage
