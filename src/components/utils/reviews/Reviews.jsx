import React from "react";
import Ratings from "../ratings/Ratings";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const Reviews = () => {
  return (
    <div className="w-full border border-gray-200 p-5 shadow-md ">
      <div className="flex flex-row gap-5 mb-2">
        <h1 className="font-semibold">Rahul Patil</h1>
        <h1>
          <Ratings rating={4.5} />
        </h1>
      </div>

      <h1 className="mb-5">
        "I absolutely adore this rose! It adds so much color to my balcony
        garden."
      </h1>

      <div className="flex flex-row gap-5">
        <h1>
          <AiOutlineLike /> 32 Likes
        </h1>{" "}
        <h1>
          <AiOutlineDislike />
          Dislikes
        </h1>
      </div>
    </div>
  );
};

export default Reviews;
