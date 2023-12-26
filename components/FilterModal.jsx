import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Disclosure } from "@headlessui/react";
import TagsSelection from "@/components/TagsSelection";

const filters = [ 
  {
    filterName: "Category",
    filterOptions: <TagsSelection/>,
  },
  {
    filterName: "Price Range",
    filterOptions: "blahblha",
  },
  {
    filterName: "Subscription Type",
    filterOptions: <TagsSelection/>,
  },
  {
    filterName: "Year Of Release",
    filterOptions: "blahblha",
  },
  {
    filterName: "Customer Rating",
    filterOptions: "blahblha",
  },
];

export default function FilterModal({ closeModal, isOpen }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
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
            <div className="fixed inset-0 bg-black/25" />
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
                <Dialog.Panel className="w-full max-w-md bg-black transform overflow-hidden divide-y divide-gray-950  rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between pb-4">
                    <button className="text-caption">Reset</button>
                    <h4 className="font-heading text-h2">Filter</h4>
                    <button onClick={closeModal}>
                      <FontAwesomeIcon
                        icon={faXmark}
                        className="text-primary-500"
                        width={20}
                      />
                    </button>
                  </div>
                  {filters.map((item, index) => (
                    <div key={index}>
                      <Disclosure className="">
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex gap-4 w-full py-4 justify-between items-center focus:outline-none focus-visible:ring focus-visible:ring-primary-500/75">
                              <span className="text-h4 grow text-left">
                                {item.filterName}
                              </span>
                              <span className="text-caption">View All</span>
                              <FontAwesomeIcon
                                icon={faChevronRight}
                                aria-hidden="true"
                                width={10}
                                className={`transition-transform duration-300 ${
                                  open
                                    ? "rotate-90 transform text-primary-500"
                                    : "text-white"
                                } hover:text-primary-500`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="pb-4">
                              <div>{item.filterOptions}</div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                  ))}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
