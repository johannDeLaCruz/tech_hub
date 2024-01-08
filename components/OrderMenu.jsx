import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownWideShort,
  faArrowUpWideShort,
} from "@fortawesome/free-solid-svg-icons";

const OrderMenu = ({ orderBy, setOrderBy }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          as="button"
          className="inline-flex w-full justify-center text-h4 custom-hover"
        >
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
          {orderBy?.map((option, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <div className="flex w-full justify-between px-2 py-2 text-body1">
                  <button
                    onClick={() =>
                      setOrderBy((prevOrder) =>
                        prevOrder.map((o) =>
                          o.type === option.type
                            ? { ...o, active: !o.active }
                            : o
                        )
                      )
                    }
                    className={`${
                      option.active
                        ? "text-primary-500"
                        : "dark:text-white dark:hover:text-primary-500"
                    } `}
                  >
                    {option.label}
                  </button>
                  {option.active && (
                    <button>
                      <FontAwesomeIcon
                        icon={
                          option.direction === "asc"
                            ? faArrowUpWideShort
                            : faArrowDownWideShort
                        }
                        width={16}
                        height={16}
                        onClick={() =>
                          setOrderBy((prevOrder) =>
                            prevOrder.map((o) =>
                              o.type === option.type
                                ? {
                                    ...o,
                                    direction:
                                      o.direction === "asc" ? "desc" : "asc",
                                  }
                                : o
                            )
                          )
                        }
                        className="hover:text-primary-500"
                      />
                    </button>
                  )}
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default OrderMenu;
