import Image from "next/image";

const ItemImage = () => {
  return (
    <figure className="relative overflow-hidden w-[20rem] h-[15rem]">
      <Image
        src={
          "https://images.pexels.com/photos/6037812/pexels-photo-6037812.jpeg"
        }
        alt="item_image"
        fill={true}
        className="hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer object-cover"
      ></Image>
      <figcaption className="absolute text-body1 py-2 px-3 bg-gray-950 opacity-50 right-0 top-10 rounded-l-3xl z-50">
        $31/mo
      </figcaption>
    </figure>
  );
};

export default ItemImage;
