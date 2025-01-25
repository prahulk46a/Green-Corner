import PropTypes from "prop-types";
import Ratings from "../ratings/Ratings";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const Reviews = ({ reviews }) => {
  console.log(reviews);
  if (!reviews || reviews.length === 0) {
    return <p>No reviews available for this product.</p>;
  }

  return (
    <div className="w-full">
      {reviews.map((review) => (
        <div
          key={review.dateTime}
          className="w-full border border-gray-200 p-5 shadow-md mb-5"
        >
          <div className="flex flex-row gap-5 mb-2">
            <h1 className="font-semibold">{review.username}</h1>
            <h1>
              <Ratings rating={review.rating} />
            </h1>
          </div>

          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h1 className="mb-5">"{review.comment}"</h1>

          <div className="flex flex-row gap-5">
            <h1>
              <AiOutlineLike /> {review.likes} Likes
            </h1>
            <h1>
              <AiOutlineDislike /> {review.dislikes} Dislikes
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

// Added PropTypes validation
Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired, // Name of the reviewer
      rating: PropTypes.number.isRequired, // Rating given by the reviewer
      comment: PropTypes.string.isRequired, // Review text
      likes: PropTypes.number.isRequired, // Number of likes
      dislikes: PropTypes.number.isRequired, // Number of dislikes
    })
  ).isRequired,
};

export default Reviews;
