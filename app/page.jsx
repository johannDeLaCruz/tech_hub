"use client";
import OrderMenu from "@components/OrderMenu";
import TagsSelection from "@components/TagsSelection";
import SearchBar from "@components/SearchBar";
import HeroSection from "@components/HeroSection";
import SearchResults from "@components/SearchResults";
import FilterModal from "@components/FilterModal";
import { useState, useEffect, useMemo } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const emptyFilter = {
    tags: [],
    category: [],
    subscriptionType: [],
    yearOfRelease: [],
    priceRange: [],
    rating: 0,
  };

  const { data: session, status } = useSession();
  const [allItems, setAllItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [user, setUser] = useState({});
  const [filter, setFilter] = useState({});
  const [activeFilters, setActiveFilters] = useState(emptyFilter);
  const [handleFavorite, setHandleFavorite] = useState({
    loading: false,
    itemId: "",
    increment: null,
  });
  let [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const searchTextRegex = useMemo(() => {
    return new RegExp(searchText.toLowerCase(), "i");
  }, [searchText]);

  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      const matchesFilters = Object.keys(activeFilters).every((filterType) => {
        if (filterType === "priceRange") {
          const [minPrice, maxPrice] = activeFilters[filterType];
          if (minPrice === undefined || maxPrice === undefined) {
            return true;
          }
          return item.minimalPrice >= minPrice && item.minimalPrice <= maxPrice;
        }
        if (filterType === "rating") {
          return (
            activeFilters[filterType] === 0 ||
            item.rating === activeFilters[filterType]
          );
        } else {
          return (
            activeFilters[filterType].length === 0 ||
            (Array.isArray(item[filterType]) // Check if the property is an array
              ? activeFilters[filterType].every((filterValue) =>
                  item[filterType].some(
                    (itemValue) =>
                      itemValue.trim().toLowerCase() ===
                      filterValue.trim().toLowerCase()
                  )
                )
              : activeFilters[filterType].includes(item[filterType]))
          );
        }
      });
      const matchesSearch =
        searchText === "" ||
        searchTextRegex.test(item.name) ||
        searchTextRegex.test(item.itemDescription) ||
        searchTextRegex.test(item.brand);
      return matchesFilters && matchesSearch;
    });
  }, [allItems, searchTextRegex, activeFilters, searchText]);

  const itemsCount = filteredItems.length;

  const handleReset = () => {
    setActiveFilters(emptyFilter);
  };

  const handleFilter = (filterType, filterValue) => {
    setActiveFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (filterType === "priceRange") {
        updatedFilters[filterType] = filterValue;
      } else if (filterType === "rating") {
        updatedFilters[filterType] = filterValue;
      } else if (updatedFilters.hasOwnProperty(filterType)) {
        if (Array.isArray(updatedFilters[filterType])) {
          if (updatedFilters[filterType].includes(filterValue)) {
            updatedFilters[filterType] = updatedFilters[filterType].filter(
              (value) => value !== filterValue
            );
          } else {
            updatedFilters[filterType] = [
              ...updatedFilters[filterType],
              filterValue,
            ];
          }
        } else {
          updatedFilters[filterType] = filterValue;
        }
      } else {
        updatedFilters[filterType] = [filterValue];
      }
      return updatedFilters;
    });
  };

  useEffect(() => {
    const fetchFilterData = async () => {
      try {
        const filterResponse = await fetch("/api/filter");
        if (!filterResponse.ok) {
          throw new Error("Failed to fetch filter");
        }
        const filterData = await filterResponse.json();
        setFilter(filterData);
      } catch (error) {
        console.error("Error fetching filter data:", error);
      }
    };
    fetchFilterData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsResponse = await fetch("/api/item");
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
      }
    };
    fetchData();
  }, [session?.user.id, status]);

  const handleLike = async (itemId) => {
    try {
      if (status === "authenticated") {
        setHandleFavorite({ loading: true, itemId: itemId, increment: null });
        const isLiked = user?.favorites?.some((fav) => fav._id === itemId);
        const addFavoriteResponse = await fetch(
          `/api/user/${session?.user.id}/favorites`,
          {
            method: isLiked ? "DELETE" : "POST",
            body: JSON.stringify({ favoriteId: itemId }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!addFavoriteResponse.ok) {
          throw new Error(`Failed to ${isLiked ? "unlike" : "like"} item`);
        }
        const numberFavoritedResponse = await fetch(
          `/api/item/${itemId}/favorite`,
          {
            method: isLiked ? "DELETE" : "POST",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!numberFavoritedResponse.ok) {
          throw new Error("Failed to update number of favorites");
        }
        setUser((prevUser) => {
          if (isLiked) {
            const updatedFavorites = prevUser?.favorites?.filter(
              (fav) => fav._id !== itemId
            );
            return {
              ...prevUser,
              favorites: updatedFavorites,
            };
          } else {
            return {
              ...prevUser,
              favorites: [...prevUser?.favorites, { _id: itemId }],
            };
          }
        });
        setHandleFavorite((prevState) => ({
          ...prevState,
          loading: false,
          increment: !isLiked,
        }));
      } else {
        router.push("/login");
      }
    } catch (error) {
      console.error("Error handling like:", error);
    }
  };

  return (
    <div className="container">
      <HeroSection />
      <hr />
      <div className="mx-auto flex justify-between w-full sm:max-w-2xl">
        <button
          type="button"
          className="text-h4 custom-hover"
          onClick={openModal}
        >
          Filter results
        </button>
        <FilterModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          filter={filter}
          handleFilter={handleFilter}
          activeFilters={activeFilters}
          handleReset={handleReset}
          itemsCount={itemsCount}
        />
        <OrderMenu />
      </div>
      <SearchBar
        searchText={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <hr />
      <TagsSelection
        activeFilters={activeFilters.tags}
        tags={filter?.tags}
        handleFilter={(value) => handleFilter("tags", value)}
      />
      <div className="mx-auto w-full sm:max-w-sm dark:bg-gray-950 bg-primary-500 text-white text-button text-center p-2 mb-6 rounded-3xl">
        {" "}
        Showing {itemsCount} items out of {allItems.length}
      </div>
      <SearchResults
        items={filteredItems}
        handleLike={handleLike}
        userFavorites={user?.favorites}
        handleFavorite={handleFavorite}
      />
      <div className="flex justify-center py-6">
        {" "}
        <button className="py-2 px-6 btn-primary">Load More</button>
      </div>
    </div>
  );
};

export default Home;
