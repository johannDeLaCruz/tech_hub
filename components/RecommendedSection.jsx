import SearchResults from "@components/SearchResults";

const RecommendedSection = ({
  recommendedItems,
  handleFavorite,
  handleLike,
  userFavorites
}) => {
  return (
    <div>
      <h3 className="font-heading text-heading text-center py-8">
        Explore Similar Technologies
      </h3>
      <div>
        <SearchResults
          items={recommendedItems}
          handleLike={handleLike}
          userFavorites={userFavorites}
          handleFavorite={handleFavorite}
        />
      </div>
    </div>
  );
};

export default RecommendedSection;
