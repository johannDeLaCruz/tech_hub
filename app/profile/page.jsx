"use client";

import Avatar from "@components/Avatar";
import UserStats from "@components/UserStats";
import UserFavouritesList from "@components/UserFavouritesList";
import { useSession, getProviders, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/");
    },
  });
  const [provider, setProvider] = useState();
  const [user, setUser] = useState({});
  const [handleFavorite, setHandleFavorite] = useState({
    loading: false,
    itemId: "",
    increment: null,
  });

  useEffect(() => {
    const setupProviders = async () => {
      const response = await getProviders();
      setProvider(response);
    };
    setupProviders();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/user/${session?.user.id}`);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch user data. Response: ${response.status}`
          );
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, [session?.user.id]);

  const signOutHandle = async () => {
    try {
      await signOut({ callbackUrl: "/login" });
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  if (status === "loading") {
    return <div>loading...</div>;
  }

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

  const numberOfFavorites = user?.favorites?.length;

  return (
    <>
      <Avatar image={session?.user?.image} />
      <UserStats
        signOuthandle={signOutHandle}
        userInfo={session?.user}
        user={user}
        numberOfFavorites={numberOfFavorites}
      />
      <UserFavouritesList
        favorites={user?.favorites}
        handleLike={handleLike}
        handleFavorite={handleFavorite}
      />
    </>
  );
};

export default ProfilePage;
