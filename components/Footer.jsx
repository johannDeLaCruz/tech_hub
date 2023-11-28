import Nav from "@components/Nav";

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-8 px-4">
      <div className="pb-4">
        <h4 className="font-heading text-h2">
          <span>Tech</span>
          <span className="text-primary-500">Hub</span>
        </h4>
        <small className="block text-body2">2023 © TechHub</small>
        <small className="block text-body2">All rights reserved.</small>
      </div>
      <Nav isVisible={true} />
    </footer>
  );
};

export default Footer;
