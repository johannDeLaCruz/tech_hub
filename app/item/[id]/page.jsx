"use client";
import Breadcrumbs from "@components/Breadcrumbs";
import ItemRating from "@components/ItemRating";
import RecommendedSection from "@components/RecommendedSection";
import VideoPlayer from "@components/VideoPlayer";
import ItemTags from "@components/ItemTags";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { formatLocalDate } from "@utils/formatLocalDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const ItemInfoPage = ({ params }) => {
  const { data: session, status } = useSession();
  const [item, setItem] = useState({});
  const [user, setUser] = useState({});
  const [recommendedItems, setRecommendedItems] = useState([]);
  const [handleFavorite, setHandleFavorite] = useState({
    loading: false,
    itemId: "",
    increment: null,
  });
  const {
    name,
    externalLink,
    brand,
    image,
    rating,
    subscriptionType,
    category,
    itemDescription,
    yearOfRelease,
    tags,
    dateAdded,
    socialMediaLinks,
    videoLink,
  } = item;
  const itemDetailedInfo = item.itemDetailedInfo;
  const formattedDate = formatLocalDate(dateAdded);

  useEffect(() => {
    const fetchUser = async () => {
      try {
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
    fetchUser();
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/item/${params.id}`);
        if (response.ok) {
          const data = await response.json();
          setItem(data);
        } else {
          throw new Error("Failed to fetch data!");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    if (params.id) {
      fetchData();
    }
  }, [params.id]);

  useEffect(() => {
    const fetchRecommendedItems = async () => {
      try {
        const response = await fetch(`/api/item/recommended/${params.id}`);
        if (response.ok) {
          const data = await response.json();
          setRecommendedItems(data);
        } else {
          throw new Error("Failed to fetch recommended items!");
        }
      } catch (error) {
        console.error("Error fetching recommended items!", error.message);
      }
    };
    if (params.id) {
      fetchRecommendedItems();
    }
  }, [params.id]);

  const getSocialMediaLink = (link, index, icon) => (
    <Link key={index} href={link} target="_blank" rel="noreferrer">
      <FontAwesomeIcon
        icon={icon}
        className="text-primary-500"
        width={24}
        height={24}
      />
    </Link>
  );

  return (
    <div className="container">
      <section>
        <Breadcrumbs category={category} tag={tags} itemName={name} />
        <div className="grid grid-row-2 md:grid-cols-2 py-4 gap-4">
          <div className="relative overflow-hidden object-cover aspect-video mb-4">
            {image && (
              <Image
                src={`${image}`}
                alt="item_image"
                fill={true}
                sizes="20rem"
                priority={true}
                className="hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer object-cover"
                placeholder="empty"
              ></Image>
            )}
          </div>
          <VideoPlayer videoLink={videoLink} />
        </div>
        <div className="max-w-100 text-white bg-gray-950">
          <div className="container py-4">
            <div className="flex items-center justify-between gap-1">
              <h3 className="text-h2">{name}</h3>
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
              <span className="text-body1 grow text-end">{brand}</span>
            </div>
            <div className="flex items-center justify-between gap-1">
              <ItemRating rating={rating} />
              <span className="text-body1 grow text-end">
                {subscriptionType}
              </span>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-x-20 py-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-h4">Category</h2>
            <ul className="list-disc text-body2 pl-5 marker:text-primary-500">
              <li>{category}</li>
            </ul>
            <hr />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-h4">Description</h2>
            <ul className="list-disc text-body2 pl-5 marker:text-primary-500">
              <li>{itemDescription}</li>
            </ul>
            <hr />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-h4">Year of Release</h2>
            <ul className="list-disc text-body2 pl-5 marker:text-primary-500">
              <li>{yearOfRelease}</li>
            </ul>
            <hr />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-h4">Tags</h2>
            <ItemTags tags={tags} />
            <hr />
          </div>
          {itemDetailedInfo?.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h2 className="text-h4">{item.title}</h2>
              <ul className="list-disc text-body2 pl-5 marker:text-primary-500">
                {Array.isArray(item.description) ? (
                  item.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))
                ) : (
                  <li key={index}>{item.description}</li>
                )}
              </ul>
              <hr />
            </div>
          ))}
          <div className="flex flex-col gap-4">
            <h2 className="text-h4">Social Media</h2>
            <div className="flex">
              {socialMediaLinks?.map((link, index) => {
                if (link.includes("instagram.com")) {
                  return getSocialMediaLink(link, index, faInstagram);
                } else if (link.includes("twitter.com")) {
                  return getSocialMediaLink(link, index, faTwitter);
                } else if (link.includes("youtube.com")) {
                  return getSocialMediaLink(link, index, faYoutube);
                } else if (link.includes("facebook.com")) {
                  return getSocialMediaLink(link, index, faFacebook);
                } else {
                  return (
                    <p
                      className="list-disc text-body2 pl-5 marker:text-primary-500"
                      key={index}
                    >
                      No social media links available!
                    </p>
                  );
                }
              })}
            </div>
            <hr />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-h4">Date Added</h2>
            <div className="flex">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="text-primary-500"
              />
              <p className="text-body2 pl-5">Added on {formattedDate}</p>
            </div>
            <hr />
          </div>
        </div>
      </section>
      <RecommendedSection
        recommendedItems={recommendedItems}
        handleLike={handleLike}
        handleFavorite={handleFavorite}
        userFavorites={user?.favorites}
      />
    </div>
  );
};

export default ItemInfoPage;
