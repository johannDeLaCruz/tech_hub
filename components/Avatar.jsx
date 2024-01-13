import Image from "next/image";

const Avatar = ({ image }) => {
  return (
    <div className="py-6 bg-[url('https://picsum.photos/1200/600')]">
      <div className="mx-auto relative rounded-full w-24 aspect-square overflow-hidden -bottom-[4.5rem]">
        {image ? (
          <Image src={image} alt="avatar" fill={true} />
        ) : (
          <Image src={"/assets/Text.png"} alt="avatar" fill={true} className="object-contain" />
        )}
      </div>
    </div>
  );
};

export default Avatar;
