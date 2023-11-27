import Logo from "@components/Logo";
import Nav from "@components/Nav";
import ModeButton from "@components/ModeButton";
import GoogleLoginButton from "@components/GoogleLoginButton";
import HamburguerMenu from "@components/HamburguerMenu";

const Navigation = {
  Home: "/",
  About: "/about",
  Contact: "/contact",
  Projects: "/projects",
};

const Header = () => {
  return (
    <header className="bg-gray-950">
      <div className="container flex justify-between items-center">
        <Logo />
        <Nav />
        <div className="flex gap-2 py-4">
          <GoogleLoginButton />
          <ModeButton />
          <HamburguerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
