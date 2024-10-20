import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="mx-auto w-full max-w-[1200px] justify-between pb-10 flex flex-col lg:flex-row">
        <div className="ml-5">
          <img
            className="mt-10 mb-5"
            src="./public/images/company-logo.svg"
            alt="company logo"
          />
          <p className="pl-0">
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit.
          </p>
          <div className="mt-10 flex gap-3">
            <Link to="https://github.com">
              <img
                className="h-5 w-5 cursor-pointer"
                src="./public/images/github.svg"
                alt="github icon"
              />
            </Link>
            <Link to="https://t.me/">
              <img
                className="h-5 w-5 cursor-pointer"
                src="./public/images/telegram.svg"
                alt="telegram icon"
              />
            </Link>
            <Link to="https://www.linkedin.com/">
              <img
                className="h-5 w-5 cursor-pointer"
                src="./public/images/linkedin.svg"
                alt="twitter icon"
              />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="mx-5 mt-10">
            <p className="font-medium text-gray-500">FEATURES</p>
            <ul className="text-sm leading-8">
              <li>
                <Link to="#">Marketing</Link>
              </li>
              <li>
                <Link to="#">Commerce</Link>
              </li>
              <li>
                <Link to="#">Analytics</Link>
              </li>
              <li>
                <Link to="#">Merchendise</Link>
              </li>
            </ul>
          </div>

          <div className="mx-5 mt-10">
            <p className="font-medium text-gray-500">SUPPORT</p>
            <ul className="text-sm leading-8">
              <li>
                <Link to="#">Pricing</Link>
              </li>
              <li>
                <Link to="#">Docs</Link>
              </li>
              <li>
                <Link to="#">Audition</Link>
              </li>
              <li>
                <Link to="#">Art Status</Link>
              </li>
            </ul>
          </div>

          <div className="mx-5 mt-10">
            <p className="font-medium text-gray-500">DOCUMENTS</p>
            <ul className="text-sm leading-8">
              <li>
                <Link to="#">Terms</Link>
              </li>
              <li>
                <Link to="#">Conditions</Link>
              </li>
              <li>
                <Link to="#">Privacy</Link>
              </li>
              <li>
                <Link to="#">License</Link>
              </li>
            </ul>
          </div>

          <div className="mx-5 mt-10">
            <p className="font-medium text-gray-500">DELIVERY</p>
            <ul className="text-sm leading-8">
              <li>
                <Link to="#">List of countries</Link>
              </li>
              <li>
                <Link to="#">Special information</Link>
              </li>
              <li>
                <Link to="#">Restrictions</Link>
              </li>
              <li>
                <Link to="#">Payment</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <section className="h-11 bg-amber-400">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 pt-2">
          <p>&copy; 19 October, 2024</p>
          <div className="flex items-center space-x-3">
            <img
              className="h-8"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968299.png"
              alt="Visa icon"
            />
            <img
              className="h-8"
              src="https://cdn-icons-png.flaticon.com/512/349/349228.png"
              alt="AE icon"
            />
            <img
              className="h-8"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968144.png"
              alt="Apple pay icon"
            />
          </div>
        </div>
      </section>
    </>
  );
}
