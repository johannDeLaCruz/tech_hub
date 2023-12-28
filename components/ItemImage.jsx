import Image from "next/image";
import Link from "next/link";

const ItemImage = ({ minimalPrice, image, _id }) => {
  return (
    <figure className="relative overflow-hidden w-[20rem] h-[15rem]">
      <Link href={`/item/${_id}`}>
        <Image
          src={`${image}`}
          alt="item_image"
          fill={true}
          className="hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer object-cover"
        ></Image>
      </Link>
      <figcaption className="absolute text-body1 py-2 px-3 bg-gray-950 opacity-50 right-0 top-10 rounded-l-3xl z-5">
        {minimalPrice}
      </figcaption>
    </figure>
  );
};

export default ItemImage;
