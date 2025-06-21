import { Link } from "react-router-dom";
import logo from "../src/assets/logo192.png";
import { useState } from "react";

function Header(){

    const [showHam,setShowHam] = useState(false);
    const [changeDisplay,setChangeDisplay] = useState("hidden");
    const [thing,setThing] = useState("=");

    const changeHamState=()=>{
        setShowHam(prev =>!prev);
        showHam===true? setThing("X"): setThing("=");
        showHam===true? setChangeDisplay("block"):setChangeDisplay("hidden");
    }

    return (
        <div>
            <navbar className="relative flex bg-[#333]">
                <div>
                    <img src={logo} className=" aspect-square w-full m-auto h-12 md:h-15 lg:h-18 pt-0 md:pt-0 lg:pt-0 ml-2"/>
                </div>
                <div className="absolute md:hidden right-0 pr-5 text-3xl h-screen items-start justify-center  sm:opacity-100 md:relative flex md:w-full m-auto text-white">
                    <button className="text-4xl font-extrabold text-shadow-lg text-shadow-red-100" onClick={()=>{changeHamState()}}>{thing}</button>
                </div>
                <div className={`absolute ${changeDisplay} md:block lg:block right-0 top-10 md:top-0 z-50 w-1/2 text-3xl h-screen md:h-10 items-start justify-center sm:opacity-100 md:relative flex md:w-full m-auto bg-[#333] md:after:bg-[#333]`}>
                    <div className="flex flex-col md:flex-row gap-y-10 md:gap-y-0 md:gap-x-1 lg:gap-x-5 w-full md:w-full items-center float-right justify-end font-mono font-semibold md:text-xl text-zinc-500">
                        <div className="hover:bg-[#111] md:p-2 pt-2">
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
            </navbar>
        </div>
    );
}

export default Header;