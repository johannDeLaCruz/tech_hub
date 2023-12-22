import SearchResults from "@components/SearchResults";

const UserFavouritesList = ({ favorites }) => {
  return (
    <section className="container py-4">
      <h3 className="font-heading text-heading text-center py-6">
        Your Favourites List
      </h3>
      {favorites > 0 ? (
        <SearchResults items={favorites} />
      ) : (
        <h4 className="text-center py-6">No favourites yet...</h4>
      )}
    </section>
  );
};

export default UserFavouritesList;
