import Carousel from "../components/Layout/Carousels";
import aboutme from "../assets/aboutme.jpg"
import CardThings from "../components/Layout/CardThings";

const HomePage=()=>{
    return(
        <div className=" ">
            <Carousel />
            <CardThings />
        </div>
         
    );
}

export default HomePage