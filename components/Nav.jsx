const navLinks = [
  "Home",
  "Profile",
  "About Us",
  "Contact",
  "Privacy Policy",
  "Terms of Use",
];

const Nav = ({ isVisible }) => {
  return (
    <nav className={`${isVisible ? "grid" : "hidden"} grid-cols-2 gap-2 pb-6 grow`}>
      {navLinks.map((link, index) => (
        <a key={index} href="#" className="font-heading text-button link-hover">
          {link}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
