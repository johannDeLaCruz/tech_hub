"use client";
import Breadcrumbs from "@components/Breadcrumbs";
import ItemBasicInfo from "@components/ItemBasicInfo";
import ItemDetailedInfo from "@components/ItemDetailedInfo";
import RecommendedSection from "@components/RecommendedSection";
import Image from "next/image";
import { useState } from "react";

const ItemInfoPage = ({ params }) => {
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/item/${params.id}`);
        if (response.ok) {
          const data = response.json();
          setItemData(data);
        } else {
          throw new Error("Failed to fetch data!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <section>
        <Breadcrumbs />
        <div className="relative overflow-hidden rounded-3xl object-cover aspect-video max-w-screen xl:max-w-screen-md mb-4">
          <Image
            src={
              "https://images.pexels.com/photos/6037812/pexels-photo-6037812.jpeg"
            }
            alt="item_image"
            fill={true}
            className="hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer object-cover"
          ></Image>
        </div>
        <ItemBasicInfo />
        <ItemDetailedInfo />
      </section>
      <RecommendedSection />
    </div>
  );
};

export default ItemInfoPage;
