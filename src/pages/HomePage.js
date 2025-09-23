import { useState,useEffect } from "react"
import { Link } from "react-router-dom";

import useFetch from "../hooks/usefetch"

import CardThings from "../components/Layout/places";
import CarouselImages from "../components/Layout/CarouselImages";
import f from "../assets/moumntain.jpeg";
import g from "../assets/mountain1.jpg";
import "../css/homepage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Testimonials from "../components/Layout/Testimonials";



function ElementNumber(){
    const [data,setData] = useState(null);
    const [visibleCount,setVisibleCount] = useState(0);
    const apiData=useFetch("http://127.0.0.1:8000/blogpost/blogs/", 'GET')
    useEffect(() => {
    if (apiData!= null){ // still loading

    apiData.then((res) => {
        setData(res);

        // set initial visible count
        const updateVisibleCount = () => {
        const width = window.innerWidth;
        if (width < 768) setVisibleCount(3);
        else if (width < 976) setVisibleCount(4);
        else if (width < 1440) setVisibleCount(6);
        else if (width > 1440) setVisibleCount(4);
        else setVisibleCount(res.length);
        };

        updateVisibleCount();
        window.addEventListener("resize", updateVisibleCount);

        // cleanup
        return () => window.removeEventListener("resize", updateVisibleCount);
    });}
    }, [apiData]);

// slice the visible stuff
if(data!=null)
{
    const visibleStuffs = data.slice(0, visibleCount);
    return visibleStuffs;
}
}


const HomePage=()=>{
 const visibleStuffs = ElementNumber();
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
                {visibleStuffs!=null?<CardThings visibleStuff={visibleStuffs}/>:<div className="text-6xl text-white">LOADING</div>}
                
                
                <div className="flex items-center justify-center pt-5">
                <button class=" inline-flex items-center text-center text-xl justify-center p-0.5 mb-2 me-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-0 from-purple-950 to-pink-900  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-950 dark:focus:ring-purple-950">
                    <span class=" px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                        <Link to='/pages' className=" hover:scale-100 p-2 w-full">View More <FontAwesomeIcon icon={faArrowRight} className="pr-2 text-xl"/></Link>
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

            <div className="">
                <Testimonials/>
            </div>
        </div>
    );
}

export default HomePage
