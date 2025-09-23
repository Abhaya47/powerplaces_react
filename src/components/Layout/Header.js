import { Link } from "react-router-dom";
import logo from "../../../src/assets/logo192.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faTimes } from "@fortawesome/free-solid-svg-icons";

function Header(){

    const [showHam,setShowHam] = useState(true); //dont know how bt the logic is opposite. works tho.
    const [changeDisplay,setChangeDisplay] = useState("hidden");

    const changeHamState=()=>{
        setShowHam(prev =>!prev);
        showHam? setChangeDisplay("block"):setChangeDisplay("hidden");
    }

    const navHeadings=[
        {"to":"/", "link":"HOME"},
        {"to":"/aboutus", "link":"ABOUTUS"},
        {"to":"/places", "link":"PLACES"},
        {"to":"/blog", "link":"BLOG"},
        {"to":"/gallery", "link":"GALLERY"},
        {"to":"/contact", "link":"CONTACT"},


        
    ]

    return (
        <>
            <nav className="relative bg-[#0f1a1c] px-4 py-0 flex items-center justify-between shadow-md ">
                <div className="">
                    <img src={logo} className=" aspect-square object-contain m-auto w-full h-12 md:h-19 lg:h-30 pt-0 md:pt-0 lg:pt-0 "/>
                </div>
                <div className="md:hidden">
                    <button className="text-4xl text-[#e0f2f1] font-extrabold text-shadow-lg text-shadow-red-100" onClick={()=>{changeHamState()}}> <FontAwesomeIcon icon={showHam? faHamburger:faTimes} /></button>
                </div>
                <div className={`absolute ${changeDisplay} md:block lg:block right-0 top-12 md:top-0 z-50 w-4/6 text-3xl h-screen md:h-full lg:h-full items-start justify-center sm:opacity-100 md:relative flex flex-col md:w-full m-auto bg-[#0f1a1c] md:bg-transparent md:after:bg-[#333]`}>
                    <div className="flex flex-col md:flex-row gap-y-10 md:gap-y-0 md:gap-x-1 lg:gap-x-5 w-full h-auto md:w-full items-center float-right justify-end font-mono font-semibold md:text-2xl text-[#e0f2f1]">
                        {
                            navHeadings.map((navHeading)=>(
                                <div key={navHeading.link} className="hover:bg-[#14445a] md:p-2 pt-4 h-full">
                                    <Link to={navHeading.to} className=" hover:scale-100 p-2 w-full" onClick={()=>{changeHamState()}}>{navHeading.link}</Link>
                                </div>
                            ))
                        }

                    </div>
                    <div className="md:hidden mt-auto text-sm w-full text-center pb-4 text-gray-500 ">
                        CopyRight © NEPAL POWER PLACES.
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;