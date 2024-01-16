import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faDiscord,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const socialLinks = [
  { icon: faInstagram, href: "https://www.instagram.com/" },
  { icon: faFacebook, href: "https://www.facebook.com/" },
  { icon: faDiscord, href: "https://discord.com/" },
  { icon: faLinkedin, href: "https://www.linkedin.com/" },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex align-center"
        >
          <FontAwesomeIcon
            icon={link.icon}
            className="text-primary-500"
            width={20}
            height={20}
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
