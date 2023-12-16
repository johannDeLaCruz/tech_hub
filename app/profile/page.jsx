"use client"

import Avatar from "@components/Avatar";
import UserStats from "@components/UserStats";
import UserFavouritesList from "@components/UserFavouritesList";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data: session } = useSession();
  return (
    <>
      <Avatar />
      <UserStats />
      <UserFavouritesList />
    </>
  );
};

export default ProfilePage;
