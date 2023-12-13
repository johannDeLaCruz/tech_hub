const Nav = ({ navigation, type }) => {

 const footerStyles = "grid grid-cols-2 gap-2 pb-6 grow"
 const headerStyles = "flex"

  return (
    <nav
      className={`${type === "footer" ? footerStyles : type === "header" ? headerStyles : ""}`}
    >
      {navigation?.map((item, index) => (
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
