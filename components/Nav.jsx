import Link from "next/link";

const Nav = ({ navLinks, type, handleNavClick }) => {
  const footerStyles = "grid grid-cols-2 gap-2 pb-6 grow";
  const headerStyles = "hidden md:flex gap-10";
  const menuStyles = "flex flex-col items-center gap-4 py-8 md:hidden";

  return (
    <nav
      className={`${
        type === "footer"
          ? footerStyles
          : type === "header"
          ? headerStyles
          : type === "menu"
          ? menuStyles
          : ""
      }`}
    >
      {navLinks?.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className="font-heading text-button link-hover"
          onClick={handleNavClick}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
