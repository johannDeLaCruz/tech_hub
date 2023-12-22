import SearchResults from "@components/SearchResults";

const UserFavouritesList = ({ favorites }) => {
  return (
    <section className="container">
      <h3 className="font-heading text-heading text-center py-6">
        Your Favourites List
      </h3>
      <SearchResults items={favorites} />
    </section>
  );
};

export default UserFavouritesList;
