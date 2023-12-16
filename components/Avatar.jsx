import Image from "next/image";

const Avatar = ({ image }) => {
  return (
    <div className="py-6 bg-[url('https://picsum.photos/1200/600')]">
      <div className="mx-auto relative rounded-full w-24 aspect-square overflow-hidden -bottom-[4.5rem]">
        <Image src={image} alt="avatar" fill={true} />
      </div>
    </div>
  );
};

export default Avatar;
