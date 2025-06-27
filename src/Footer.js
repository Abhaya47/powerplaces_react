import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";

function Footer(){
    return(
        <>
        <footer className="mt-10">
        <div className="container lg:flex md:justify-center bg-[#082D46] md:px-4">
                <div className="text-[#FFFF] md:text-left p-3 ">
                    <h2 className="text-3xl font-bold">
                        Subscribe To Our Newsletter
                    </h2>
                    <h5>Sign up to get info on all deals and events</h5>
                </div>
                <div className="FooterForm lg:p-4  pb-2 rounded ">
                    <form className="flex flex-col border-2 rounded-md ml-4 mr-4 bg-slate-50 md:flex-row md:relative md:container md:box-border">
                        <div className="md:box-content border-r-2 border-dotted pl-4 pr-9 pt-1" >
                            <input type="text" placeholder=" Name" className="block py-2.5 px-0 sm:w-full w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></input>
                        </div>
                    
                        <div className="md:box-content *:mb-1  w-full pr-9 pt-1 pl-5 md:pr-4">
                            <input type="text" placeholder="Email" className="block py-2.5 px-0 md:w-9/12 md:mr-12 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></input>
                        </div>
                        
                        <button className=" md:absolute md:bottom-0 md:top-0 md:right-0 md:w-auto md:h-full md:auto text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Subscribe</button>
                    </form>
                </div>
        </div>
            <div className="FooterInfo">
                <div className="FooterInfo bg-[#F9FAF5] py-6 ">
                    <div className="flex mx-auto justify-center mx-5 p-5 bg-[#dad8b5] rounded-lg shadow-x1 space-y-3">
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-left text-[#FDF6F0] font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;">OFFICE</h3>
                            <div className="flex items-start space-x-2">
                            <span>📍</span>
                            <p className="text-gray-800 ">Mumbleberry, Popo, NEPAL</p>
                            </div>
                            <div className="flex items-start space-x-2">
                            <span>📞</span>
                            <a href="tel:987562352" className="text-blue-600 hover:underline">987562352</a>
                            </div>
                            <div className="flex items-start space-x-2">
                            <span>📧</span>
                            <a href="mailto:opiop@gmail.com" className="text-blue-600 hover:underline">opiop@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex-row-reverse ">
                            <h3 className="text-xl font-semibold text-left text-[#FDF6F0] font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;">OUR SOCIALS</h3>
                            <div className="flex justify-center">
                                <a href="facebook.com"><FontAwesomeIcon icon={faSquareFacebook} className="pr-2 text-xl"/></a>
                                <a href="facebook.com"><FontAwesomeIcon icon={faInstagram} className="text-xl"/></a>
                                <a href="facebook.com"><FontAwesomeIcon icon={faStarHalf} className="text-xl"/></a>

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="container lg:flex justify-center bg-[#F9FAF5]"> 
                <div className="CopyRight flex-none lg:pl-2"> 
                    <small>CopyRight © <b>NEPAL POWER PLACES</b>.</small>
                </div>
                <div className="FooterNav container flex justify-center lg:justify-end items-center space-x-4 lg:pr-2">
                    <nav className="flex space-x-4">
                        <button><Link to="/aboutus">About Us</Link></button>
                        <button><Link to="/aboutus">Expeditions</Link></button>
                        <button><Link to="/aboutus">Contact Us</Link></button>
                    </nav>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;