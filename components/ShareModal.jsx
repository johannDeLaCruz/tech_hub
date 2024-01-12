import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
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

function ShareModal({ isShareModalOpen, closeModal, shareUrl }) {
  const socialMediaButtons = [
    { component: WhatsappShareButton, icon: WhatsappIcon },
    { component: TelegramShareButton, icon: TelegramIcon },
    { component: TwitterShareButton, icon: TwitterIcon },
    { component: LinkedinShareButton, icon: LinkedinIcon },
    { component: RedditShareButton, icon: RedditIcon },
    { component: FacebookShareButton, icon: FacebookIcon },
  ];

  const URL = process.env.NEXTAUTH_URL
  return (
    <Transition appear show={isShareModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md dark:bg-black bg-white border-2 border-primary-500 transform overflow-hidden rounded-2xl p-6 align-middle shadow-xl transition-all">
                <div className="flex justify-between pb-6">
                  <h4 className="font-heading grow text-h2">
                    Share in your social media!
                  </h4>
                  <button onClick={closeModal}>
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="hover:text-primary-500"
                      width={20}
                    />
                  </button>
                </div>
                <div className="flex justify-center items-center gap-4">
                  {socialMediaButtons.map((button, index) => {
                    const Component = button.component;
                    const Icon = button.icon;
                    return (
                      <Component
                        key={index}
                        url={`${URL}/item/${shareUrl}`}
                      >
                        <Icon size={40} round={true} iconFillColor="text-primary-500" bgStyle={{backgroundColor: "#fafafa"}}/>
                      </Component>
                    );
                  })}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ShareModal;
