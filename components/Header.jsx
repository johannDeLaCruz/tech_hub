import Logo from "@components/Logo";
import Nav from "@components/Nav";
import GoogleLoginButton from "./GoogleLoginButton";
import ModeButton from "./ModeButton";

const Header = () => {
  return (
    <header>
      <Logo />
      <Nav />
      <GoogleLoginButton />
      <ModeButton />
    </header>
  );
};

export default Header;
