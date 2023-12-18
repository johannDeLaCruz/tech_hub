"use client";
import OrderMenu from "@components/OrderMenu";
import TagsSelection from "@components/TagsSelection";
import SearchBar from "@components/SearchBar";
import HeroSection from "@components/HeroSection";
import SearchResults from "@components/SearchResults";
import { useState, useEffect } from "react";

const Home = () => {
  const [allItems, setAllItems] = useState([]);
  // const [loading, setLoading] = useState(true);
  const itemsCount = allItems.length;
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
    <div className="container">
      <HeroSection />
      <hr />
      <div className="mx-auto flex justify-between w-full sm:max-w-2xl">
        <button className="text-h4 custom-hover">Filter results</button>
        <OrderMenu />
      </div>
      <SearchBar />
      <hr />
      <TagsSelection />
      <div className="mx-auto w-full sm:max-w-sm bg-gray-950 text-button text-center p-2 mb-6 rounded-3xl">
        {" "}
        Showing {itemsCount} items
      </div>
      <SearchResults allItems={allItems} />
      <div className="flex justify-center py-6">
        {" "}
        <button className="py-2 px-6 btn-primary">Load More</button>
      </div>
    </div>
  );
};

export default Home;
