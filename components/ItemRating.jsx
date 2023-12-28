const ItemRating = ({ rating }) => {
  const maxRating = 5; 

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      const isHighlighted = i <= rating;
      stars.push(
        <svg
          key={i}
          className={`text-gray-600 cursor-pointer ${
            isHighlighted
              ? "text-primary-500 hover:text-primary-500 peer peer-hover:text-primary-500 hover:text-primary-500 duration-100"
              : ""
          }`}
          width="23"
          height="23"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="flex items-center gap-2">
      <span className="flex flex-row">{renderStars()}</span>
      <span className="text-caption">{rating}</span>
      <span className="text-caption">(12)</span>
    </div>
  );
};

export default ItemRating;
