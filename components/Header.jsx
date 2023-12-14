"use client";

import { useState } from "react";
import Logo from "@components/Logo";
import Nav from "@components/Nav";
import ModeButton from "@components/ModeButton";
import GoogleLoginButton from "@components/GoogleLoginButton";
import HamburguerButton from "@components/HamburguerButton";
import HamburguerMenu from "@components/HamburguerMenu";

const headerNavLinks = [
  { title: "Home", link: "/" },
  { title: "Profile", link: "/login" },
  { title: "About Us", link: "/about" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  console.log(isOpen);

  return (
    <>
      <header className="bg-gray-950">
        <div className="container flex justify-between items-center">
          <Logo />
          <Nav navLinks={headerNavLinks} type={"header"} className="hidden" />
          <div className="flex gap-2 py-4">
            <GoogleLoginButton />
            <ModeButton />
            <HamburguerButton onButtonClick={handleButtonClick} />
          </div>
        </div>
      </header>
      <div
        className={`md:hidden absolute z-20 min-w-full top-0 bg-gray-950 transform transition-transform ease-in-out duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {" "}
        <HamburguerMenu
          navLinks={headerNavLinks}
          handleButtonClick={handleButtonClick}
        />
      </div>
    </>
  );
};

export default Header;
