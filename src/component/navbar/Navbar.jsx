import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { CiUser, CiCalendar } from "react-icons/ci";
import { useStore } from "../../utils/store";
import { likedData } from "../../utils/store";
import { useNavigate } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Events", href: "/eventslist", current: false },
  { name: "Movies", href: "/movieslist", current: false },
  { name: "Venue", href: "/venuelist", current: false },
  { name: "Contact Us", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const setIsAuthenticated = useStore((state) => state.setIsAuthenticated);
  const navigate = useNavigate();
  const setJwt = useStore((state) => state.setJwt);
  const setOrderDetails = useStore((state) => state.setOrderDetails);
  const setUserData = useStore((state) => state.setUserData);
  const userData = useStore((state) => state.userData);
  const setLikedEvents = likedData((state) => state.setLikedEvents);
  const setLikedMovies = likedData((state) => state.setLikedMovies);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 100;

      setIsScrolled(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Disclosure as="nav" className={`fixed w-full z-20 bg-[#061046]`}>
      {({ open }) => (
        <>
          <div className="mx-auto lg:max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                <Link to="/" className="flex flex-shrink-0 items-center">
                  <img className=" h-14 w-auto" src={Logo} alt="Your Company" />
                </Link>

                <input
                  className="bg-white h-10 hidden xl:block mt-2 px-1 max-sm:hidden rounded-full border-none placeholder:p-2 "
                  placeholder="Search"
                />

                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4 justify-center items-center mt-2 ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {isAuthenticated === false ? (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex   text-sm ">
                        <button className=" text-white ml-4 border border-spacing-1 p-2 px-5 rounded-full ">
                          Login
                        </button>
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/login"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                " px-4 py-2 text-sm text-gray-700 flex items-center gap-2"
                              )}
                            >
                              <CiUser size={15} />
                              Attendee
                            </a>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/organizer"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "flex items-center gap-2 px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              <CiCalendar size={15} />
                              Organizer
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <Menu as="div" className="relative ml-3">
                    <div className="flex text-center items-center text-white space-x-2">
                    <div className="hidden sm:block">
                      <p>Hello, {userData?.username} </p>
                    </div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => {
                                navigate("/favorites");
                              }}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your favorites
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => {
                                navigate("/vendorlogin");
                              }}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </button>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => {
                                setIsAuthenticated(false);
                                setJwt(null);
                                setOrderDetails(null);
                                setUserData(null);
                                setLikedEvents(null);
                                setLikedMovies(null);
                                navigate("/");
                              }}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              type="button"
                            >
                              Logout
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
