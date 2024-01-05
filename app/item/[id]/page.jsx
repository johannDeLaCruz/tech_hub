"use client";
import Breadcrumbs from "@components/Breadcrumbs";
import ItemRating from "@components/ItemRating";
// import RecommendedSection from "@components/RecommendedSection";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const ItemInfoPage = ({ params }) => {
  const [item, setItem] = useState({});
  const { name, externalLink, brand, image, rating } = item;
  const itemDetailedInfo = item.itemDetailedInfo;

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
        console.error("Error fetching data:", error);
      }
    };
    if (params.id) {
      fetchData();
    }
  }, [params.id]);
 
  return (
    <div className="container">
      <section>
        <Breadcrumbs />
        <div className="relative overflow-hidden rounded-3xl object-cover aspect-video max-w-screen xl:max-w-screen-sm mb-4">
          {image && (
            <Image
              src={`${image}`}
              alt="item_image"
              fill={true}
              className="hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer object-cover"
              placeholder="empty"
            ></Image>
          )}
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
            <ItemRating rating={rating} />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-x-20 py-4">
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
        </div>
      </section>
      {/* <RecommendedSection /> */}
    </div>
  );
};

export default ItemInfoPage;
