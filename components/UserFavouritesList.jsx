import SearchResults from "@components/SearchResults";

const UserFavouritesList = ({ favorites, handleLike, handleFavorite }) => {
  return (
    <section className="container py-4">
      <h3 className="font-heading text-heading text-center py-6">
        Your Favourites List
      </h3>
      <hr />
      {favorites ? (
        <SearchResults
          items={favorites}
          handleLike={handleLike}
          userFavorites={favorites}
          handleFavorite={handleFavorite}
        />
      ) : (
        <h4 className="text-center py-6">No favourites yet...</h4>
      )}
    </section>
  );
};

export default UserFavouritesList;
