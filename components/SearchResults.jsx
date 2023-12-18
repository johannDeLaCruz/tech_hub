import ItemCard from "@components/ItemCard";

const SearchResults = ({ allItems }) => {
  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 py-4 justify-center">
      {allItems.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </section>
  );
};

export default SearchResults;
