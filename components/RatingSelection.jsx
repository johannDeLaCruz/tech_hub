"use client";
import { useState } from "react";

const ItemRating = ({ rating, onStarClick }) => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleStarClick = (starNumber) => {
    setSelectedRating(starNumber);
    onStarClick(starNumber);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="flex flex-row-reverse">
        {[1, 2, 3, 4, 5].map((starNumber) => (
          <svg
            key={starNumber}
            className={`text-gray-600 cursor-pointer peer peer-hover:text-primary-500 hover:text-primary-500 duration-100 ${
              starNumber <= selectedRating ? "text-primary-500" : ""
            }`}
            width="23"
            height="23"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            onClick={() => handleStarClick(starNumber)}
          >
            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
          </svg>
        ))}
      </span>
      <span className="text-caption">{rating}</span>
      <span className="text-caption">(12)</span>
    </div>
  );
};

export default ItemRating;
