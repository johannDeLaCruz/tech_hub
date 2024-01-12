import ShareButtons from "@/components/ShareButtons"
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ShareModal({ isShareModalOpen, closeModal, shareUrl }) {
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
                <div className="flex justify-between pb-8">
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
                <ShareButtons shareUrl={shareUrl} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ShareModal;
