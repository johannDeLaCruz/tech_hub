import Avatar from "@components/Avatar";
import UserStats from "@components/UserStats";
import UserFavouritesList from "@components/UserFavouritesList";
import { useSession } from "next-auth/react";


const page = () => {
  return (
    <>
      <Avatar />
      <UserStats />
      <UserFavouritesList />
    </>
  );
};

export default page;
