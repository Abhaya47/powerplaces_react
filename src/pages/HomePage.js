import Carousel from "../components/Layout/Carousels";
import aboutme from "../assets/aboutme.jpg"
import CardThings from "../components/Layout/CardThings";
import CarouselImages from "../components/Layout/CarouselImages";
import Testimonials from "../components/Layout/Testimonials";

const HomePage=()=>{
    return(
        <div className=" ">
            <div className="m-20 h-screen ">
                <CarouselImages />

            </div>
            <div className="mt-96">
                <CardThings />

            </div>

            <div className="mt-100"> 
                <Testimonials/>
            </div>
        </div>
         
    );
}

export default HomePage