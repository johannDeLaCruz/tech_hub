import SearchResults from "@components/SearchResults";

const UserFavouritesList = ({ favorites, handleLike, handleFavorite }) => {
  return (
    <section className="container pb-4 divide-y dark:divide-gray-950 divide-gray-200">
      <h3 className="font-heading text-heading text-center py-6">
        Your Favourites List
      </h3>
      
      {favorites?.length > 0 ? (
        <SearchResults
          items={favorites}
          handleLike={handleLike}
          userFavorites={favorites}
          handleFavorite={handleFavorite}
        />
      ) : (
        <h4 className="text-center py-8 lg:py-16">No favourites yet...</h4>
      )}
    </section>
  );
};

export default UserFavouritesList;
