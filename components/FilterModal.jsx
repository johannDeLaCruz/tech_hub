import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faChevronRight,
  faA,
} from "@fortawesome/free-solid-svg-icons";
import { Disclosure } from "@headlessui/react";
import TagsSelection from "@/components/TagsSelection";
import StyledReactSlider from "@/components/StyledReactSlider";
import RatingSelection from "@/components/RatingSelection";
export default function FilterModal({
  closeModal,
  isOpen,
  filter,
  handleFilter,
  activeFilters,
  handleReset,
  itemsCount,
}) {
  const filters = [
    {
      filterName: "Category",
      filterOptions: (
        <TagsSelection
          tags={filter?.category}
          handleFilter={(value) => handleFilter("category", value)}
          activeFilters={activeFilters.category}
        />
      ),
    },
    {
      filterName: "Price Range",
      filterOptions: (
        <StyledReactSlider
          handleFilter={(value) => handleFilter("priceRange", value)}
          filterValue={activeFilters.priceRange}
        />
      ),
    },
    {
      filterName: "Subscription Type",
      filterOptions: (
        <TagsSelection
          tags={filter?.subscriptionType}
          handleFilter={(value) => handleFilter("subscriptionType", value)}
          activeFilters={activeFilters.subscriptionType}
        />
      ),
    },
    {
      filterName: "Year Of Release",
      filterOptions: (
        <TagsSelection
          tags={filter?.yearOfRelease}
          handleFilter={(value) => handleFilter("yearOfRelease", value)}
          activeFilters={activeFilters.yearOfRelease}
        />
      ),
    },
    {
      filterName: "Customer Rating",
      filterOptions: (
        <RatingSelection
          handleFilter={(value) => handleFilter("rating", value)}
          activeFilters={activeFilters.rating}
        />
      ),
    },
  ];
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
                <Dialog.Panel className="w-full max-w-md dark:bg-black bg-white border-2 border-primary-500 transform overflow-hidden divide-y dark:divide-gray-950 divide-gray-300 rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between pb-4">
                    <button className="text-caption hover:text-primary-500" onClick={handleReset}>
                      Reset
                    </button>
                    <h4 className="font-heading text-h2">Filter</h4>
                    <button onClick={closeModal}>
                      <FontAwesomeIcon
                        icon={faXmark}
                        className="hover:text-primary-500"
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
                                    : ""
                                } hover:text-primary-500`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel>
                              <div>{item.filterOptions}</div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                  ))}
                  <button onClick={closeModal} className="mx-auto w-full sm:max-w-sm p-2 mt-6 btn-primary">
                    {" "}
                    Showing {itemsCount} items
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
