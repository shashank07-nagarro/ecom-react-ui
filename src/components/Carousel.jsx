import { useEffect } from "react";
import ProductCard from "./ProductCard";
import Splide from "@splidejs/splide";

export default function Carousel({ products = [] }) {
  useEffect(() => {
    if (document.querySelector(".splide")) {
      let splide = new Splide(".splide", {
        type: "loop",
        focus: 0,
        gap: "1rem",
        perPage: 4,
        breakpoints: {
          640: {
            perPage: 2,
          },
          480: {
            perPage: 1,
          },
        },
      });

      splide.mount();
    }
  });
  return !products.length ? null : (
    <section
      className="splide mx-auto max-w-[1200px] px-5 py-2"
      aria-label="Splide Basic HTML Example"
    >
      <div className="splide__track">
        <ul className="splide__list mx-auto max-w-[1200px]">
          {products.map((product) => (
            <li key={product.id} className="splide__slide">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
