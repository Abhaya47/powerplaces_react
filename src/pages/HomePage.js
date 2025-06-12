import Carousel from "../components/Layout/Carousels";
import aboutme from "../assets/aboutme.jpg"
import CardThings from "../components/Layout/CardThings";
import CarouselImages from "../components/Layout/CarouselImages";

function hello(_){}

const HomePage=()=>{
    return(
        <div className="flex-col">
            <div className=" h-screen">
                <CarouselImages />
            </div>

            <div className="mt-10">
                <h1 className="ml-9 text-2xl md:text-4xl font-bold font-mono text-pretty text-cyan-700">Places</h1>
            </div>

            <div className="mb-3">
                <CardThings />
            </div>
        </div>
         
    );
}

export default HomePage
