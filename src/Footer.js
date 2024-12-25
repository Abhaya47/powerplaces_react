import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
        <footer>
            <div className="CopyRight"> 
                <>CopyRight © <b>NEPAL POWER PLACES</b>.</>
            </div>
            <div className="FooterNav">
                <nav>
                <button ><Link to="/aboutus">About Us</Link></button>
                    
                </nav>
            </div>
        </footer>
        </>
    );
}

export default Footer;