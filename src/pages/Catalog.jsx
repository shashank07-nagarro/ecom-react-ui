import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import ProductService from "../services/ProductService";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProducts({}).then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <Breadcrumb text="Catalog" />

      <section className="container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10">
        <section className="hidden w-[300px] flex-shrink-0 px-4 lg:block">
          <div className="flex border-b pb-5">
            <div className="w-full">
              <p className="mb-3 font-medium">CATEGORIES</p>

              <div className="flex w-full justify-between">
                <div className="flex justify-center items-center">
                  <input type="checkbox" />
                  <p className="ml-4">Bedroom</p>
                </div>
                <div>
                  <p className="text-gray-500">(12)</p>
                </div>
              </div>

              <div className="flex w-full justify-between">
                <div className="flex justify-center items-center">
                  <input type="checkbox" />
                  <p className="ml-4">Sofa</p>
                </div>
                <div>
                  <p className="text-gray-500">(15)</p>
                </div>
              </div>

              <div className="flex w-full justify-between">
                <div className="flex justify-center items-center">
                  <input type="checkbox" />
                  <p className="ml-4">Office</p>
                </div>
                <div>
                  <p className="text-gray-500">(14)</p>
                </div>
              </div>

              <div className="flex w-full justify-between">
                <div className="flex justify-center items-center">
                  <input type="checkbox" />
                  <p className="ml-4">Outdoor</p>
                </div>
                <div>
                  <p className="text-gray-500">(124)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex border-b py-5">
            <div className="w-full">
              <p className="mb-3 font-medium">BRANDS</p>

              <div className="flex w-full justify-between">
                <div className="flex justify-center items-center">
                  <input type="checkbox" />
                  <p className="ml-4">APEX</p>
                </div>
                <div>
                  <p className="text-gray-500">(12)</p>
                </div>
              </div>

              <div className="flex w-full justify-between">
                <div className="flex justify-center items-center">
                  <input type="checkbox" />
                  <p className="ml-4">Call of SOFA</p>
                </div>
                <div>
                  <p className="text-gray-500">(15)</p>
                </div>
              </div>

              <div className="flex w-full justify-between">
                <div className="flex justify-center items-center">
                  <input type="checkbox" />
                  <p className="ml-4">Puff B&G</p>
                </div>
                <div>
                  <p className="text-gray-500">(14)</p>
                </div>
              </div>

              <div className="flex w-full justify-between">
                <div className="flex justify-center items-center">
                  <input type="checkbox" />
                  <p className="ml-4">Fornighte</p>
                </div>
                <div>
                  <p className="text-gray-500">(124)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex border-b py-5">
            <div className="w-full">
              <p className="mb-3 font-medium">PRICE</p>

              <div className="flex w-full">
                <div className="flex justify-between">
                  <input
                    x-mask="99999"
                    min="50"
                    type="number"
                    className="h-8 w-[90px] border pl-2"
                    placeholder="50"
                  />
                  <span className="px-3">-</span>
                  <input
                    x-mask="999999"
                    type="number"
                    max="999999"
                    className="h-8 w-[90px] border pl-2"
                    placeholder="99999"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex border-b py-5">
            <div className="w-full">
              <p className="mb-3 font-medium">SIZE</p>

              <div className="flex gap-2">
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                  XS
                </div>
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                  S
                </div>
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                  M
                </div>

                <div className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                  L
                </div>

                <div className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                  XL
                </div>
              </div>
            </div>
          </div>

          <div className="flex py-5">
            <div className="w-full">
              <p className="mb-3 font-medium">COLOR</p>

              <div className="flex gap-2">
                <div className="h-8 w-8 cursor-pointer border border-white bg-gray-600 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"></div>
                <div className="h-8 w-8 cursor-pointer border border-white bg-violet-900 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"></div>
                <div className="h-8 w-8 cursor-pointer border border-white bg-red-900 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"></div>
              </div>
            </div>
          </div>
        </section>

        <div>
          <div className="mb-5 flex items-center justify-between px-5">
            <div className="flex gap-3">
              <button className="flex items-center justify-center border px-6 py-2">
                Sort by
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mx-2 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              <button className="flex items-center justify-center border px-6 py-2 md:hidden">
                Filters
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mx-2 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden gap-3 lg:flex">
              <button className="border bg-amber-400 py-2 px-2">
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
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                  />
                </svg>
              </button>

              <button className="border py-2 px-2">
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
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <section className="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-3">
            {products.length &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </section>
        </div>
      </section>
    </>
  );
}
