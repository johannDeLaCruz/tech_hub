import Logo from "@components/Logo";
import Nav from "@components/Nav";
import ModeButton from "@components/ModeButton";
import GoogleLoginButton from "@components/GoogleLoginButton";
import HamburguerMenu from "@components/HamburguerMenu";

const Header = () => {
  return (
    <header className="bg-gray">
      <div className="container flex justify-between items-center">
        <Logo />
        <Nav />
        <div className="flex gap-3 py-6">
          <GoogleLoginButton />
          <ModeButton />
          <HamburguerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
