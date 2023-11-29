import Image from "next/image";
import ProductRating from "@components/ProductRating";
import ProductTags from "@components/ProductTags";
import LikeButton from "@components/LikeButton";

const ProductCard = () => {
  return (
    <article className="bg-gray-950 rounded-3xl overflow-hidden max-w-fit justify-self-center">
      <figure className="relative overflow-hidden">
        <Image
          src={
            "https://images.pexels.com/photos/6037812/pexels-photo-6037812.jpeg"
          }
          alt="logo"
          width={335}
          height={180}
          className="hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
        ></Image>
        <figcaption className="absolute text-body1 py-2 px-3 bg-gray-950 opacity-50 right-0 top-10 rounded-l-3xl z-50">
          $31/mo
        </figcaption>
      </figure>
      <div className="flex flex-col gap-1 p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-h3">Product Name</h3>
          <a href="#">
            <svg
              className="fill-white stroke-white hover:stroke-primary-500 hover:fill-primary-500 link-hover"
              viewBox="0 0 24 24"
              width={24}
              height={24}
            >
              <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
            </svg>
          </a>
          <span className="text-caption grow text-end">Free</span>
        </div>
        <ProductRating />
        <p className="text-body1 mb-3 w-64 line-clamp-3">
          Brief description of the product that will tell us something about it
          and yada yada yada and again yada yada yada yadad yadadadada
        </p>
        <div className="flex justify-between">
          <ProductTags />
          <LikeButton />
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
