import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const OrderMenu = ({ handleOrderByChange }) => {
  const orderOptions = [
    { type: "dateAdded", label: "Date Added" },
    { type: "rating", label: "Rating" },
    { type: "aToZ", label: "A-Z" },
    { type: "releaseDate", label: "Release Date" },
    { type: "price", label: "Price" },
  ];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center text-h4 custom-hover">
          Order By
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-1 w-56 origin-top-right divide-y dark:divide-gray-950 divide-gray-300 dark:bg-black bg-white shadow-lg rounded-3xl border-2 border-primary-500 z-50 p-3">
          {orderOptions.map((option) => (
            <Menu.Item key={option.type}>
              {({ active }) => (
                <button
                  onClick={() =>
                    handleOrderByChange({ type: option.type, direction: "asc" })
                  }
                  className={`${
                    active ? "text-primary-500" : "dark:text-white"
                  } group flex w-full items-center px-2 py-2 text-body1`}
                >
                  {option.label}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default OrderMenu;
