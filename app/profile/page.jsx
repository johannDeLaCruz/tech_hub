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
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  if (status === "loading") {
    return <div>loading...</div>;
  } 

  return (
    <>
      <Avatar image={session?.user?.image} />
      <UserStats
        signOuthandle={signOutHandle}
        userInfo={session?.user}
        user={user}
      />
      <UserFavouritesList favorites={user?.favorites} />
    </>
  );
};

export default ProfilePage;
