"use client";

import Avatar from "@components/Avatar";
import UserStats from "@components/UserStats";
import UserFavouritesList from "@components/UserFavouritesList";
import { useSession, getProviders, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const { data: session } = useSession();
  const [provider, setProvider] = useState();
  useEffect(() => {
    const setupProviders = async () => {
      const response = await getProviders();
      setProvider(response);
    };
    setupProviders();
  }, []);
  return (
    <>
      <Avatar image={session?.user?.image} />
      <UserStats signOuthandle={() => signOut(provider.id)} />
      <UserFavouritesList />
    </>
  );
};

export default ProfilePage;
