import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <button>
      <Image src={"/assets/Logo.png"} alt="logo" width={40} height={40}></Image>
    </button>
  );
};

export default Logo;
