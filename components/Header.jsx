"use client";
import { useSession } from "next-auth/react";
import { useState, useRef, useEffect } from "react";
import Logo from "@components/Logo";
import Nav from "@components/Nav";
import ModeButton from "@components/ModeButton";
import GoogleLoginButton from "@components/GoogleLoginButton";
import HamburguerButton from "@components/HamburguerButton";
import HamburguerMenu from "@components/HamburguerMenu";
import UserButton from "@components/UserButton";

const headerNavLinks = [
  { title: "Home", link: "/" },
  { title: "Profile", link: "/login" },
  { title: "About Us", link: "/about" },
];

const Header = () => {
  const { data: session } = useSession();

  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  const handleButtonClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickOutside = (e) => {
    if (headerRef.current && !headerRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [headerRef]);

  return (
    <header ref={headerRef} className="bg-gray-950">
      <div className="container flex justify-between items-center">
        <Logo />
        <Nav navLinks={headerNavLinks} type={"header"} className="hidden" />
        <div className="flex gap-2 py-4">
          {session?.user ? <UserButton /> : <GoogleLoginButton />}
          <ModeButton />
          <HamburguerButton onButtonClick={handleButtonClick} />
        </div>
      </div>

      <div
        className={`md:hidden absolute z-20 min-w-full top-0 bg-gray-950 transform transition-transform ease-in-out duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {" "}
        <HamburguerMenu
          navLinks={headerNavLinks}
          handleButtonClick={handleButtonClick}
          handleNavClick={handleButtonClick}
        />
      </div>
    </header>
  );
};

export default Header;
