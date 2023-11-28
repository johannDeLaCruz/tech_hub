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
    <nav className={`${isVisible ? "grid" : "hidden"} grid-cols-2 gap-2`}>
      {navLinks.map((link, index) => (
        <a key={index} href="#" className="font-heading text-button">
          {link}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
