import CardThings from "../components/Layout/CardThings";
import CarouselImages from "../components/Layout/CarouselImages";
import Testimonials from "./Testimonials";
import f from "../assets/h.jpg";
import "../css/homepage.css"

const HomePage=()=>{

    return(
        <div className=" flex-col">
            <div className="h-screen ">
                <CarouselImages />
            </div>


            <div className=" mx-0 px-0 bg-slate-950">
                <h1 className="ml-9 text-2xl md:text-4xl font-bold font-mono text-pretty text-cyan-700">Places</h1>
                <CardThings />
            </div>

            <div className=" m-auto mt-20 w-full h-20 md:h-1/3">
                <img src={f} className="image opacity-50 h-20 md:h-40 w-full" alt="0"/>
            </div>

            <div>
                {/* <Testimonials/> */}
            </div>
        </div>
         
    );
}

export default HomePage
