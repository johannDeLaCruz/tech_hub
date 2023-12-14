const Nav = ({ navLinks, type }) => {
  const footerStyles = "hidden md:grid grid-cols-2 gap-2 pb-6 grow";
  const headerStyles = "hidden md:flex gap-10";
  const menuStyles = "flex flex-col items-center gap-4 py-4 md:hidden"

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
        <a
          key={index}
          href={item.link}
          className="font-heading text-button link-hover"
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
