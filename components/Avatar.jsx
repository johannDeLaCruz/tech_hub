import Image from "next/image";

const Avatar = () => {
  return (
    <div className="py-6 bg-[url('https://picsum.photos/1200/600')]">
    <div className="mx-auto relative rounded-full w-24 aspect-square overflow-hidden -bottom-[4.5rem]">
      <Image
        src="https://picsum.photos/1200/600"
        alt="avatar"
        fill={true}
      />
    </div>
  </div>
  )
}

export default Avatar