import Link from "next/link"
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"} >
      <Image src={"/assets/Logo.png"} alt="logo" width={40} height={40}></Image>
    </Link>
  );
};

export default Logo;
