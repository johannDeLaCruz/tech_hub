import React from "react";
import Image from "next/image";

const Logo = () => {
  return <Image src={"/assets/Logo.png"} alt="logo" width={40} height={40}></Image>;
};

export default Logo;
