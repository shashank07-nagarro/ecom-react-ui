import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./../store/authSlice";
import authService from "./../appwrite/auth";

export default function Account() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => dispatch(logout()));
  };
  const userData = useSelector((state) => state.auth.userData);
  return (
    <>
      <Breadcrumb text="Account" />
      <section className="container mx-auto w-full flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10">
        <section className="hidden w-[300px] flex-shrink-0 px-4 lg:block">
          <div className="border-b py-5">
            <div className="flex items-center">
              <img
                width="40px"
                height="40px"
                className="rounded-full object-cover"
                src="./public/images/avatar-photo.png"
                alt="Red woman portrait"
              />
              <div className="ml-5">
                <p className="font-medium text-gray-500">Hello,</p>
                <p className="font-bold">{userData?.name}</p>
              </div>
            </div>
          </div>

          <div className="flex border-b py-5">
            <div className="w-full">
              <div className="flex w-full">
                <div className="flex flex-col gap-2">
                  <Link
                    to="#"
                    className="flex items-center gap-2 font-medium text-violet-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                      />
                    </svg>
                    Manage account
                  </Link>
                  <Link
                    to="profile-information.html"
                    className="active:blue-900 text-gray-500 duration-100 hover:text-yellow-400"
                  >
                    Profile information
                  </Link>
                  <Link
                    to="manage-address.html"
                    className="text-gray-500 duration-100 hover:text-yellow-400"
                  >
                    Manage Addresses
                  </Link>
                  <Link
                    to="change-password.html"
                    className="text-gray-500 duration-100 hover:text-yellow-400"
                  >
                    Change password
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex border-b py-5">
            <div className="flex w-full">
              <div className="flex flex-col gap-2">
                <Link
                  to="my-order-history.html"
                  className="flex items-center gap-2 font-medium active:text-violet-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                    <path
                      fillRule="evenodd"
                      d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  My Order History
                </Link>
              </div>
            </div>
          </div>

          <div className="flex border-b py-5">
            <div className="flex w-full">
              <div className="flex flex-col gap-2">
                <Link
                  to="payment-methods.html"
                  className="flex items-center gap-2 font-medium active:text-violet-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                    />
                  </svg>
                  Payment Methods
                </Link>
              </div>
            </div>
          </div>

          <div className="flex border-b py-5">
            <div className="flex w-full">
              <div className="flex flex-col gap-2">
                <Link
                  to="wishlist.html"
                  className="flex items-center gap-2 font-medium active:text-violet-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  My Wishlist
                </Link>
              </div>
            </div>
          </div>

          <div className="flex py-5">
            <div className="flex w-full">
              <div className="flex flex-col gap-2">
                <button
                  onClick={logoutHandler}
                  className="flex items-center gap-2 font-medium active:text-violet-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="mb-5 flex items-center justify-between px-5 md:hidden">
          <div className="flex gap-3">
            <div className="py-5">
              <div className="flex items-center">
                <img
                  width="40px"
                  height="40px"
                  className="rounded-full object-cover"
                  src="./public/images/avatar-photo.png"
                  alt="Red woman portrait"
                />
                <div className="ml-5">
                  <p className="font-medium text-gray-500">Hello,</p>
                  <p className="font-bold">Sarah Johnson</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="border bg-amber-400 py-2 px-2">
              Profile settings
            </button>
          </div>
        </div>

        <section className="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10 lg:grid-cols-3">
          <div className="">
            <div className="border py-5 shadow-md">
              <div className="flex justify-between px-4 pb-5">
                <p className="font-bold">Personal Profile</p>
                <Link
                  className="text-sm text-violet-900"
                  to="profile-information.html"
                >
                  Edit
                </Link>
              </div>

              <div className="px-4">
                <p>Sarah Johnson</p>
                <p>sarah@yandex.com</p>
                <p>20371</p>
                <p className="">1223 3432 3344 0082</p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="border py-5 shadow-md">
              <div className="flex justify-between px-4 pb-5">
                <p className="font-bold">Shipping Address</p>
                <Link
                  className="text-sm text-violet-900"
                  to="manage-address.html"
                >
                  Edit
                </Link>
              </div>

              <div className="px-4">
                <p>Sarah Johnson</p>
                <p>Belgrade, Serbia</p>
                <p>20371</p>
                <p>1223 3432 3344 0082</p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="border py-5 shadow-md">
              <div className="flex justify-between px-4 pb-5">
                <p className="font-bold">Billing Address</p>
                <Link className="text-sm text-violet-900" to="#">
                  Edit
                </Link>
              </div>

              <div className="px-4">
                <p>Sarah Johnson</p>
                <p>Belgrade, Serbia</p>
                <p>20371</p>
                <p>1223 3432 3344 0082</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
