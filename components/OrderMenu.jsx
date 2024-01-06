"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

const OrderMenu = () => {
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
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "text-primary-500" : "dark:text-white"
                  } group flex w-full items-center px-2 py-2 text-body1`}
                >
                  Date Added
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "text-primary-500" : "dark:text-white"
                  } group flex w-full items-center px-2 py-2 text-body1`}
                >
                  Rating
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "text-primary-500" : "dark:text-white"
                  } group flex w-full items-center px-2 py-2 text-body1`}
                >
                  A-Z
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "text-primary-500" : "dark:text-white"
                  } group flex w-full items-center px-2 py-2 text-body1`}
                >
                  Z-A
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "text-primary-500" : "dark:text-white"
                  } group flex w-full items-center px-2 py-2 text-body1`}
                >
                  Release Date
                </button>
              )}
            </Menu.Item>
          </div>{" "}
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "text-primary-500" : "dark:text-white"
                  } group flex w-full items-center px-2 py-2 text-body1`}
                >
                  Highest Price
                </button>
              )}
            </Menu.Item>{" "}
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "text-primary-500" : "dark:text-white"
                  } group flex w-full items-center px-2 py-2 text-body1`}
                >
                  Lowest Price
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default OrderMenu;
