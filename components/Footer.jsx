import Nav from "@components/Nav";
import SocialMediaLinks from "@components/SocialMediaLinks";

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-9">
      <div className="container">
        <h4 className="font-heading text-h2 pb-6">
          <span>Tech</span>
          <span className="text-primary-500">Hub</span>
        </h4>
        <div className="flex flex-col md:flex-row md:justify-between">
          <Nav isVisible={true} />
          <div className="flex flex-col gap-2">
            <SocialMediaLinks />
            <div className="flex-col">
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
