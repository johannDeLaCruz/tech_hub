"use client";
import { useSession } from "next-auth/react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Logo from "@components/Logo";
import Nav from "@components/Nav";
import ModeButton from "@components/ModeButton";
import HamburguerButton from "@components/HamburguerButton";
import HamburguerMenu from "@components/HamburguerMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightToBracket } from "@fortawesome/free-solid-svg-icons";

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

  const headerNavLinks = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    // { title: "Contact Us", link: "/contact" },
    { title: "Privacy Policy", link: "/privacy" },
  ];

  if (session?.user?.role === "admin") {
    headerNavLinks.push({ title: "Dashboard", link: "/admin" });
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [headerRef]);

  return (
    <header
      ref={headerRef}
      className="dark:bg-gray-950 bg-white dark:text-white text-black shadow-lg"
    >
      <div className="container flex justify-between items-center">
        <Logo />
        <Nav navLinks={headerNavLinks} type={"header"} className="hidden" />
        <div className="flex gap-2 py-4">
          {session?.user ? (
            <button className="btn-round">
              <Link href={"/profile"}>
                <FontAwesomeIcon
                  width={20}
                  icon={faUser}
                  style={{ display: "block" }}
                />
              </Link>
            </button>
          ) : (
            <button className="btn-round">
              <Link href={"/login"}>
                <FontAwesomeIcon
                  width={20}
                  icon={faRightToBracket}
                  style={{ display: "block" }}
                />
              </Link>
            </button>
          )}
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
