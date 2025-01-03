import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
        <footer className="mt-10">
            <div className="container lg:flex md:justify-center bg-[#082D46] ">
                <div className="text-[#FFFF] text-left p-4">
                    <h2 className="text-3xl font-bold">
                        Subscribe To Our Newsletter
                    </h2>
                    <h5>Sign up to get info on all deals and events</h5>
                </div>
                <div className="FooterForm p-2 pb-2 rounded">
                    <form className="flex flex-col border-2 rounded-md ml-4 mr-4 bg-slate-50 md:flex-row">
                    <div className="md:box-content border-r-2 border-dotted w-full pl-5 pr-9 pt-1 " >
                        <input type="text" placeholder=" Name" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></input>
                    </div>
                    
                    <div className="mb-4 md:mb-4 w-full pr-9 pt-1 pl-5">
                        <input type="text" placeholder="Email" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></input>
                    </div>
                        <button className="md:auto text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="FooterInfo">
                <div className="ml-5 mr-5 bg-slate-300 border-2 border-solid">
                    <div className="Location">
                        <p>Office</p>
                        <p>Mumbleberry, Popo, NEPAL</p>
                        <p>Phone: 987562352</p>
                        <p>Email: opiop@gmail.com</p>


                    </div>
                </div>
            </div>
            <div className="CopyRight"> 
                <small>CopyRight © <b>NEPAL POWER PLACES</b>.</small>
            </div>
            <div className="FooterNav">
                <small>
                    <nav>
                        <button ><Link to="/aboutus">About Us</Link></button>
                    </nav>
                </small>
            </div>
        </footer>
        </>
    );
}

export default Footer;