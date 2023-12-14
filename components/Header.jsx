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
  return (
    <header className="bg-gray-950">
      <div className="container flex justify-between items-center">
        <Logo />
        <Nav navLinks={headerNavLinks} type={"header"} className="hidden" />
        <div className="flex gap-2 py-4">
          <GoogleLoginButton />
          <ModeButton />
          <HamburguerButton />
        </div>
      </div>
      <HamburguerMenu navLinks={headerNavLinks} />
    </header>
  );
};

export default Header;
