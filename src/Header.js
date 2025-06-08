import { Link } from "react-router-dom";
import logo from "../src/assets/aboutme.jpg";

function Header(){
    console.log("Header LOaded");
    return (
        <>
        <div className="Header hidden md:flex bg-amber-300">
            hiiiiiiiiiiii heheheh
            <button onClick={Header}>check check</button>
        </div>
        <nav>
            <div>
                <img src={logo} alt="" width="10%"/>
            </div>
            <Link to="/contact">Contact Us</Link>
            <Link to="/aboutus">About</Link>
        </nav>
        </>
    );
}

export default Header;