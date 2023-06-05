import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import ReviewStars from "./ReviewStars";
const Rating = ({ value, text }) => {
    const totalNumOfStars = 5; 

    const review = (num) =>{

        for(let i = 0; i < num; i++){
        return( <ReviewStars value={value} starIndex={i + 1} />);
        }
    }

  return (
    <div className="rating">
    {review(5)}
    
     {/* <ReviewStars value = {value} starIndex={1}/>
     <ReviewStars value = {value} starIndex={2}/>
     <ReviewStars value = {value} starIndex={3}/>
     <ReviewStars value = {value} starIndex={4}/>
     <ReviewStars value = {value} starIndex={5}/> */}

    </div>
  );
};
export default Rating;
