import Nav from "@components/Nav";
import SocialMediaLinks from "@components/SocialMediaLinks";

const footerNavLinks = [
  { title: "Home", link: "/" },
  { title: "Profile", link: "/profile" },
  { title: "About Us", link: "/about" },
  // { title: "Contact", link: "/contact" },
  // { title: "Privacy Policy", link: "/privacy" },
  // { title: "Terms of Use", link: "/terms" },
];
const Footer = () => {

  return (
    <footer className="bg-gray-950 py-9 text-white">
      <div className="container">
        <h4 className="font-heading text-h2 pb-6">
          <span>Tech</span>
          <span className="text-primary-500">Hub</span>
        </h4>
        <div className="flex flex-col md:flex-row md:justify-between">
          <Nav navLinks={footerNavLinks} type={"footer"} />
          <div className="flex flex-col gap-2">
            <SocialMediaLinks />
            <div className="flex-col">
              <small className="block text-body2">Made by J.DeLaCruz</small>
              <small className="block text-body2">2023 © TechHub</small>
              <small className="block text-body2">All rights reserved.</small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
