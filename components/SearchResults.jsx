import ItemCard from "@components/ItemCard";
import { useState, useEffect } from "react";

const SearchResults = () => {
  const [allItems, setAllItems] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/item");
        if (response.ok) {
          const data = await response.json();
          setAllItems(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 py-4 justify-center">
      {allItems.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </section>
  );
};

export default SearchResults;
