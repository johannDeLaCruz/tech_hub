import Avatar from "@components/Avatar";
import UserStats from "@components/UserStats";
import UserFavouritesList from "@components/UserFavouritesList";

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
