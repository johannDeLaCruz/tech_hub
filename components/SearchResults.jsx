import ItemCard from "@components/ItemCard";

const SearchResults = ({ items, handleLike, favorites }) => {
  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 py-4 justify-center">
      {items?.map((item) => (
        <ItemCard
          key={item._id}
          item={item}
          handleLike={handleLike}
          favorites={favorites}
        />
      ))}
    </section>
  );
};

export default SearchResults;
