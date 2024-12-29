import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
        <footer className="mt-10">
            <div className="container flex md:flex-row letter mb-4  pb-4 bg-rose-200 text-yellow-100">
                <h2>
                    Get email updates
                </h2>
                <h5>Sign up to get info on all deals and events</h5>
                <div className="container FooterForm p-0">
                    <form className="flex flex-col border-2 ml-4 mr-4 bg-slate-50 md:flex-row">
                    <div className="mb-4" >
                        <input type="text" placeholder="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></input>
                    </div>
                    <div className="mb-4">
                        <input type="text" placeholder="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></input>
                    </div>
                    <div>
                        <button className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Subscribe</button>
                    </div>
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