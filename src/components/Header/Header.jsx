import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const authStatus = useSelector((store) => store.auth.status);
  return (
    <>
      <header className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5">
        <Link to="/">
          <img
            className="cursor-pointer sm:h-auto sm:w-auto"
            src="/public/images/company-logo.svg"
            alt="company logo"
          />
        </Link>

        <div className="md:hidden">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <form className="hidden h-9 w-2/5 items-center border md:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="mx-3 h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            className="hidden w-11/12 outline-none md:block"
            type="search"
            placeholder="Search"
          />

          <button className="ml-auto h-full bg-amber-400 px-4 hover:bg-yellow-300">
            Search
          </button>
        </form>

        <div className="hidden gap-3 md:!flex">
          <Link
            to="wishlist.html"
            className="flex cursor-pointer flex-col items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>

            <p className="text-xs">Wishlist</p>
          </Link>

          <Link
            to="/cart"
            className="flex cursor-pointer flex-col items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                clipRule="evenodd"
              />
            </svg>

            <p className="text-xs">Cart</p>
          </Link>

          {!authStatus ? null : (
            <Link
              to="/account"
              className="relative flex cursor-pointer flex-col items-center justify-center"
            >
              <span className="absolute bottom-[33px] right-1 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>

              <p className="text-xs">Account</p>
            </Link>
          )}
        </div>
      </header>

      <section
        className="absolute left-0 right-0 z-50 h-screen w-full bg-white"
        style={{ display: "none" }}
      >
        <div className="mx-auto">
          <div className="mx-auto flex w-full justify-center gap-3 py-4">
            <Link
              to="wishlist.html"
              className="flex cursor-pointer flex-col items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>

              <p className="text-xs">Wishlist</p>
            </Link>

            <Link
              to="/cart"
              className="flex cursor-pointer flex-col items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="text-xs">Cart</p>
            </Link>

            <Link
              to="/account"
              className="relative flex cursor-pointer flex-col items-center justify-center"
            >
              <span className="absolute bottom-[33px] right-1 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>

              <p className="text-xs">Account</p>
            </Link>
          </div>

          <form className="my-4 mx-5 flex h-9 items-center border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mx-3 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input
              className="hidden w-11/12 outline-none md:block"
              type="search"
              placeholder="Search"
            />

            <button
              type="submit"
              className="ml-auto h-full bg-amber-400 px-4 hover:bg-yellow-300"
            >
              Search
            </button>
          </form>
          <ul className="text-center font-medium">
            <li className="py-2">
              <Link to="index.html">Home</Link>
            </li>
            <li className="py-2">
              <Link to="catalog.html">Catalog</Link>
            </li>
            <li className="py-2">
              <Link to="about-us.html">About Us</Link>
            </li>
            <li className="py-2">
              <Link to="contact-us.html">Contact Us</Link>
            </li>
          </ul>
        </div>
      </section>

      <nav className="relative bg-violet-900">
        <div className="mx-auto hidden h-12 w-full max-w-[1200px] items-center md:flex">
          <button className="ml-5 flex h-full w-40 cursor-pointer items-center justify-center bg-amber-400">
            <div className="flex justify-around" to="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mx-1 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              All categories
            </div>
          </button>

          <div className="mx-7 flex gap-8">
            <Link
              className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
              to="/"
            >
              Home
            </Link>
            <Link
              className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
              to="/catalog"
            >
              Catalog
            </Link>
            <Link
              className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
              to="/about"
            >
              About Us
            </Link>
            <Link
              className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
              to="/contact"
            >
              Contact Us
            </Link>
          </div>

          {authStatus ? null : (
            <div className="ml-auto flex gap-4 px-5">
              <Link
                className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                to="/login"
              >
                Login
              </Link>

              <span className="text-white">&#124;</span>

              <Link
                className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                to="/signup"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* <section
      x-show="desktopMenuOpen"
      @click.outside="desktopMenuOpen = false"
      class="absolute left-0 right-0 z-10 w-full border-b border-r border-l bg-white"
      style="display: none"
    >
      <div class="mx-auto flex max-w-[1200px] py-10">
        <div class="w-[300px] border-r">
          <ul class="px-5">
            <li
              class="active:blue-900 flex items-center gap-2 bg-amber-400 py-2 px-3 active:bg-amber-400"
            >
              <img
                width="15px"
                height="15px"
                src="./assets/images/bed.svg"
                alt="Bedroom icon"
              />
              Bedroom
              <span class="ml-auto"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </li>

            <li
              class="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400"
            >
              <img
                width="15px"
                height="15px"
                src="./assets/images/sleep.svg"
                alt="bedroom icon"
              />
              Matrass
              <span class="ml-auto"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </li>

            <li
              class="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400"
            >
              <img
                width="15px"
                height="15px"
                src="./assets/images/outdoor.svg"
                alt="bedroom icon"
              />
              Outdoor
              <span class="ml-auto"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </li>

            <li
              class="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400"
            >
              <img
                width="15px"
                height="15px"
                src="./assets/images/sofa.svg"
                alt="bedroom icon"
              />
              Sofa
              <span class="ml-auto"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </li>

            <li
              class="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400"
            >
              <img
                width="15px"
                height="15px"
                src="./assets/images/kitchen.svg"
                alt="bedroom icon"
              />
              Kitchen
              <span class="ml-auto"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </li>

            <li
              class="active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 active:bg-amber-400"
            >
              <img
                width="15px"
                height="15px"
                src="./assets/images/food.svg"
                alt="Food icon"
              />
              Living room
              <span class="ml-auto"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </li>
          </ul>
        </div>

        <div class="flex w-full justify-between">
          <div class="flex gap-6">
            <div class="mx-5">
              <p class="font-medium text-gray-500">BEDS</p>
              <ul class="text-sm leading-8">
                <li><Link to="/product">Italian bed</Link></li>
                <li><Link to="/product">Queen-size bed</Link></li>
                <li><Link to="/product">Wooden craft bed</Link></li>
                <li><Link to="/product">King-size bed</Link></li>
              </ul>
            </div>

            <div class="mx-5">
              <p class="font-medium text-gray-500">LAMPS</p>
              <ul class="text-sm leading-8">
                <li><Link to="/product">Italian Purple Lamp</Link></li>
                <li><Link to="/product">APEX Lamp</Link></li>
                <li><Link to="/product">PIXAR lamp</Link></li>
                <li><Link to="/product">Ambient Nightlamp</Link></li>
              </ul>
            </div>

            <div class="mx-5">
              <p class="font-medium text-gray-500">BEDSIDE TABLES</p>
              <ul class="text-sm leading-8">
                <li><Link to="/product">Purple Table</Link></li>
                <li><Link to="/product">Easy Bedside</Link></li>
                <li><Link to="/product">Soft Table</Link></li>
                <li><Link to="/product">Craft Table</Link></li>
              </ul>
            </div>

            <div class="mx-5">
              <p class="font-medium text-gray-500">SPECIAL</p>
              <ul class="text-sm leading-8">
                <li><Link to="/product">Humidifier</Link></li>
                <li><Link to="/product">Bed Cleaner</Link></li>
                <li><Link to="/product">Vacuum Cleaner</Link></li>
                <li><Link to="/product">Pillow</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    </>
  );
}
