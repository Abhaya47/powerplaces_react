import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf, faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const Testimonials = ({box1, box2}) => {
        const containerStyle = {
            display: "flex",
        };

    const StarRating = ({ rating = 0 }) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          stars.push(
            <span
              key={i}
              size={16}
              style={{ color: "gold", marginRight: "2px" }}
            >
            <FontAwesomeIcon icon={i <= rating ? faStarSolid : faStarRegular} size={16} />
            </span>
          );
        }
        return <div style={{ display: "flex" }}>{stars}</div>;
      };

    const boxStyle = {
        width: "200px",
        height: "200px",
        backgroundColor: "lightblue",
        margin: "50px",
        position: "relative",
        padding: "30px 20px 20px 20px",
    };

    const circleStyle = {
        width: "50%",
        height: "20px",
        backgroundColor: "pink",
        borderRadius: "50%",
        position: "",
    };

    const imageStyle = {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    };

    return <div className="flex flex-col md:flex-row" style={containerStyle} >
            <div className="flex flex-col"style={boxStyle}>
                <div style={circleStyle}>
                  <img src="" alt="testimonial1" style={imageStyle}/>
                </div>
                <StarRating rating={4.5} />
                <p>heheheh</p>
                {box1}
            </div>
            <div style={boxStyle}>
                <div style={circleStyle}>
                  <img src="" alt="testimonial2" />
                </div>
                <div><StarRating rating={3} /></div>
                <p>ooooooOOOooooo</p>
                {box2}
            </div>
    </div>;
};

export default Testimonials;