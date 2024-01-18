"use client";
import ItemRating from "@components/ItemRating";
import ItemTags from "@components/ItemTags";
import ShareModal from "@components/ShareModal";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const ItemCard = ({ item, handleLike, userFavorites, handleFavorite, isAdmin, handleDelete }) => {
  const {
    _id,
    name,
    externalLink,
    // brand,
    rating,
    itemDescription,
    image,
    minimalPrice,
    subscriptionType,
    tags,
    timesFavorited,
  } = item;

  const [favoritedNumber, setFavoritedNumber] = useState(timesFavorited);
  let [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const closeShareModal = () => {
    setIsShareModalOpen(false);
  };
  const openShareModal = () => {
    setIsShareModalOpen(true);
  };

  useEffect(() => {
    const handleFavorited = () => {
      if (handleFavorite.increment === true && handleFavorite.itemId === _id) {
        setFavoritedNumber((prevState) => prevState + 1);
      } else if (
        handleFavorite.increment === false &&
        handleFavorite.itemId === _id
      ) {
        setFavoritedNumber((prevState) => prevState - 1);
      }
    };
    handleFavorited();
  }, [_id, handleFavorite.increment, handleFavorite.itemId]);

  return (
    //bg-gray-950
    <>
      <article className="rounded-3xl overflow-hidden justify-self-center border dark:border-gray-950 border-gray-200">
        <figure className="relative overflow-hidden w-[20rem] h-[15rem]">
          <Link href={`/item/${_id}`}>
            <Image
              src={`${image}`}
              alt="item_image"
              sizes="20rem"
              fill={true}
              priority={true}
              className="hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer object-cover"
            ></Image>
          </Link>
          <figcaption className="absolute text-white text-body1 py-2 px-3 bg-gray-950 opacity-50 right-0 top-10 rounded-l-3xl z-5">
            ${minimalPrice}
          </figcaption>
          {isAdmin ? (
            <button
              onClick={() => handleDelete(_id)}
              className="absolute rounded-full p-1 bg-danger top-4 left-4 group duration-300 hover:scale-125"
            >
              <FontAwesomeIcon
                icon={faTrash}
                width={32}
                height={32}
                className="text-white"
              />
            </button>
          ) : null}
          <button
            onClick={openShareModal}
            className="absolute border-2 border-primary-500 rounded-full p-2 hover:bg-primary-500 bottom-4 right-4 group duration-300"
          >
            <svg
              viewBox="0 0 24 24"
              className="fill-primary-500 stroke-primary-500 group-hover:fill-white group-hover:stroke-white"
              style={{
                width: "1rem",
                height: "1rem",
              }}
            >
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
            </svg>
          </button>
        </figure>
        <div className="flex flex-col gap-1 p-6">
          <div className="flex items-center justify-between gap-3">
            <Link href={`/item/${_id}`} className="text-h3 link-hover">
              {name}
            </Link>
            <Link href={`${externalLink}`}>
              <svg
                className="fill-white stroke-white hover:stroke-primary-500 hover:fill-primary-500 link-hover"
                viewBox="0 0 24 24"
                width={24}
                height={24}
              >
                <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
              </svg>
            </Link>
            <span className="text-caption grow text-end">
              {subscriptionType}
            </span>
          </div>
          <ItemRating rating={rating} />
          <p className="text-body1 mb-3 w-64 line-clamp-2 h-11">
            {itemDescription}
          </p>
          <div className="flex justify-between">
            <ItemTags tags={tags} />
            <div className="relative">
              <span className="absolute inset-x-0 -top-6 text-body1 text-center">
                {favoritedNumber}
              </span>
              {handleFavorite.itemId === _id &&
              handleFavorite.loading === true ? (
                <FontAwesomeIcon
                  icon={faCircleNotch}
                  width={32}
                  height={32}
                  className="text-primary-500 animate-spin"
                />
              ) : (
                <button onClick={() => handleLike(_id)}>
                  <svg
                    viewBox="0 0 24 24"
                    width={"2rem"}
                    height={"2rem"}
                    className={`stroke-primary-500 hover:fill-primary-500 ${
                      userFavorites?.some((favorite) => favorite._id === _id)
                        ? "fill-primary-500"
                        : "fill-none"
                    }`}
                  >
                    <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </article>
      <ShareModal
        isShareModalOpen={isShareModalOpen}
        closeModal={closeShareModal}
        shareUrl={_id}
      />
    </>
  );
};

export default ItemCard;
