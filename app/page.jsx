"use client";
import OrderMenu from "@components/OrderMenu";
import TagsSelection from "@components/TagsSelection";
import SearchBar from "@components/SearchBar";
import HeroSection from "@components/HeroSection";
import SearchResults from "@components/SearchResults";
import { useState, useEffect, useMemo } from "react";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session, status } = useSession();
  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [user, setUser] = useState({});

  console.log(user);

  const handleTagClick = (e) => {
    e.preventDefault();
    const selectedTag = e.target.value;
    setSelectedTags((prevTags) =>
      prevTags.includes(selectedTag)
        ? prevTags.filter((t) => t !== selectedTag)
        : [...prevTags, selectedTag]
    );
  };

  const searchTextRegex = useMemo(() => {
    return new RegExp(searchText.toLowerCase(), "i");
  }, [searchText]);

  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      const matchesTag =
        selectedTags.length === 0 ||
        selectedTags.every((tag) =>
          item.tags.some(
            (itemTag) =>
              itemTag.trim().toLowerCase() === tag.trim().toLowerCase()
          )
        );
      const matchesSearch =
        searchText === "" ||
        searchTextRegex.test(item.name) ||
        searchTextRegex.test(item.itemDescription) ||
        searchTextRegex.test(item.brand);

      return matchesTag && matchesSearch;
    });
  }, [allItems, searchTextRegex, selectedTags, searchText]);

  const itemsCount = filteredItems.length;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tagsResponse, itemsResponse] = await Promise.all([
          fetch("/api/tags"),
          fetch("/api/item"),
        ]);
        if (!tagsResponse.ok) {
          throw new Error("Failed to fetch tags");
        }
        const tagsData = await tagsResponse.json();
        setTags(tagsData);
        if (!itemsResponse.ok) {
          throw new Error("Failed to fetch items");
        }
        const itemsData = await itemsResponse.json();
        setAllItems(itemsData);
        if (status === "authenticated") {
          const userResponse = await fetch(`/api/user/${session?.user.id}`);
          if (!userResponse.ok) {
            throw new Error("Failed to fetch user info");
          }
          const userData = await userResponse.json();
          setUser(userData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [session?.user.id, status]);

  const handleLike = async (itemId) => {
    try {
      setLoading(true);
      if (user?.favorites.includes(itemId)) {
        const response = await fetch(`/api/user/${session?.user.id}/favorites`, {
          method: "DELETE",
          body: JSON.stringify({ favoriteId: itemId }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to unlike item");
        }
        setUser((prevUser) => {
          const updatedFavorites = prevUser.favorites.filter(
            (fav) => fav !== itemId
          );
          return {
            ...prevUser,
            favorites: updatedFavorites,
          };
        });
      } else {
        const response = await fetch(`/api/user/${session?.user.id}/favorites`, {
          method: "POST",
          body: JSON.stringify({ favoriteId: itemId }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to like item");
        }
        setUser((prevUser) => ({
          ...prevUser,
          favorites: [...prevUser.favorites, itemId],
        }));
      }
    } catch (error) {
      console.error("Error handling like:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <HeroSection />
      <hr />
      <div className="mx-auto flex justify-between w-full sm:max-w-2xl">
        <button className="text-h4 custom-hover">Filter results</button>
        <OrderMenu />
      </div>
      <SearchBar
        searchText={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <hr />
      <TagsSelection
        selectedTags={selectedTags}
        handleTagClick={handleTagClick}
        tags={tags}
      />
      <div className="mx-auto w-full sm:max-w-sm bg-gray-950 text-button text-center p-2 mb-6 rounded-3xl">
        {" "}
        Showing {itemsCount} items
      </div>
      <SearchResults
        items={filteredItems}
        handleLike={handleLike}
        favorites={user?.favorites}
      />
      <div className="flex justify-center py-6">
        {" "}
        <button className="py-2 px-6 btn-primary">Load More</button>
      </div>
    </div>
  );
};

export default Home;
