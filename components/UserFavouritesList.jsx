import SearchResults from "@components/SearchResults";

const UserFavouritesList = () => {
  return (
    <section className="container">
      <h3 className="font-heading text-heading text-center py-6">
        Your Favourites List
      </h3>
      <SearchResults />
    </section>
  );
};

export default UserFavouritesList;
