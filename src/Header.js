import { Link } from "react-router-dom";
import logo from "../src/assets/logo192.png";
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

    return (
        <>
            <nav className="relative bg-[#1c1c1c]/90 px-4 py-2 flex items-center justify-between shadow-md">
                <div>
                    <img src={logo} className=" aspect-square object-contain m-auto h-12 md:h-20 lg:h-30 pt-0 md:pt-0 lg:pt-0 "/>
                </div>
                <div className="md:hidden">
                    <button className="text-4xl text-white font-extrabold text-shadow-lg text-shadow-red-100" onClick={()=>{changeHamState()}}> <FontAwesomeIcon icon={showHam? faHamburger:faTimes} /></button>
                </div>
                <div className={`absolute ${changeDisplay} md:block lg:block right-0 top-14 md:top-0 z-50 w-4/6 text-3xl h-screen md:h-full lg:h-full items-start justify-center sm:opacity-100 md:relative flex md:w-full m-auto bg-[#333] md:after:bg-[#333]`}>
                    <div className="flex flex-col md:flex-row gap-y-10 md:gap-y-0 md:gap-x-1 lg:gap-x-5 w-full h-auto md:w-full items-center float-right justify-end font-mono font-semibold md:text-2xl text-zinc-500">
                        <div className="hover:bg-[#111] md:p-2 pt-4 h-full">
                            <Link to="/" className="hover:bg-[#111] p-2 w-full" onClick={()=>{changeHamState()}}>HOME</Link>
                        </div>
                        <div className="hover:bg-[#111] md:p-2">
                            <Link to="/aboutus" className="hover:bg-[#111] p-2 w-full" onClick={()=>{changeHamState()}}>ABOUT US</Link>
                        </div>
                        <div className="hover:bg-[#111] md:p-2">
                            <Link to="/places" className="hover:bg-[#111] p-2" onClick={()=>{changeHamState()}}>PLACES</Link>
                        </div>
                        <div className="hover:bg-[#111] md:p-2">
                            <Link to="/gallery" className="hover:bg-[#111] p-2" onClick={()=>{changeHamState()}}>GALLERY</Link>
                        </div>
                        <div className="hover:bg-[#111] md:p-2">
                            <Link to="/contact" className="hover:bg-[#111] p-2" onClick={()=>{changeHamState()}}>CONTACT</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;