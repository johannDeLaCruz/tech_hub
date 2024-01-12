import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    RedditShareButton,
    RedditIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
  } from "react-share";

const ShareButtons = ({ shareUrl }) => {
  const socialMediaButtons = [
    { component: WhatsappShareButton, icon: WhatsappIcon },
    { component: TelegramShareButton, icon: TelegramIcon },
    { component: TwitterShareButton, icon: TwitterIcon },
    { component: LinkedinShareButton, icon: LinkedinIcon },
    { component: RedditShareButton, icon: RedditIcon },
    { component: FacebookShareButton, icon: FacebookIcon },
  ];
  const URL = process.env.NEXTAUTH_URL;
  return (
    <div className="flex justify-center items-center gap-4">
      {socialMediaButtons.map((button, index) => {
        const Component = button.component;
        const Icon = button.icon;
        return (
          <Component
            key={index}
            url={`${URL}/item/${shareUrl}`}
            className="hover:-translate-y-2 duration-300"
          >
            <Icon size={40} round={true} />
          </Component>
        );
      })}
    </div>
  );
};

export default ShareButtons;
