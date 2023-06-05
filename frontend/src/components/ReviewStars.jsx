import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ReviewStars = ({value,starIndex}) => {
  return (
    <span>
      {value >= starIndex ? (
        <FaStar />
      ) : value >= (starIndex - 0.5) ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar />
      )}
    </span>
  );
};
export default ReviewStars;
