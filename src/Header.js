import { Link } from "react-router-dom";
import logo from "../src/assets/logo192.png";
import { useState } from "react";

function Header(){

    const [showHam,setShowHam] = useState('hidden');

    return (
        <div>
            <navbar className="relative flex bg-[#333]">
                <div>
                    <img src={logo} className=" aspect-square w-full m-auto h-10 md:h-15 lg:h-18 pt-0 md:pt-0 lg:pt-0"/>
                </div>
                <div className="absolute right-0 pr-10 text-3xl h-screen items-start justify-center sm:opacity-100 md:relative flex md:w-full m-auto text-white" onClick={()=>set}>
                    X
                </div>
                <div className="absolute right-0 top-10 z-50 w-1/2 text-3xl h-screen items-start justify-center sm:opacity-100 md:relative flex md:w-full m-auto bg-[#333] md:after:bg-[#333]">
                    <div className="flex flex-col md:flex-row gap-y-10 md:gap-y-0 md:gap-x-1 lg:gap-x-5 w-full md:w-full items-center float-right justify-end font-mono font-semibold md:text-xl text-zinc-500">
                        <div className="hover:bg-[#111] md:p-2 pt-2">
                            <Link to="/" className="hover:bg-[#111] p-2 w-full">HOME</Link>
                        </div>
                        <div className="hover:bg-[#111] md:p-2">
                            <Link to="/aboutus" className="hover:bg-[#111] p-2 w-full">ABOUT US</Link>
                        </div>
                        <div className="hover:bg-[#111] md:p-2">
                            <Link to="/places" className="hover:bg-[#111] p-2">PLACES</Link>
                        </div>
                        <div className="hover:bg-[#111] md:p-2">
                            <Link to="/gallery" className="hover:bg-[#111] p-2">GALLERY</Link>
                        </div>
                        <div className="hover:bg-[#111] md:p-2">
                            <Link to="/contact" className="hover:bg-[#111] p-2">CONTACT</Link>
                        </div>
                    </div>
                </div>
            </navbar>
        </div>
    );
}

export default Header;