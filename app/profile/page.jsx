"use client";

import Avatar from "@components/Avatar";
import UserStats from "@components/UserStats";
import UserFavouritesList from "@components/UserFavouritesList";
import { useSession, getProviders, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const { data: session } = useSession({});
  const [provider, setProvider] = useState();
  const [user, setUser] = useState({});

  // console.log(session?.user);

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

  const signOutHandle = () => {
    signOut(provider.id);
    router.push("/login");
  };

  return (
    <>
      <Avatar image={session?.user?.image} />
      <UserStats
        signOuthandle={signOutHandle}
        userInfo={session?.user}
        user={user}
      />
      <UserFavouritesList favoriteslist={user.favorites} />
    </>
  );
};

export default ProfilePage;
