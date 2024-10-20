import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../services/ProductService";

export default function Categories() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    productService.getCategories().then((res) => setCategories(res));
  }, []);

  return (
    <section className="mx-auto grid max-w-[1200px] grid-cols-2 px-5 lg:grid-cols-3 lg:gap-5">
      {!categories
        ? null
        : categories.map((cat) => (
            <Link key={cat.id} to={`/catalog/${cat.alias}`}>
              <div className="relative cursor-pointer">
                <img
                  className="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100"
                  src={`./public/images/bedroom.png`}
                  alt="bedroom cathegory image"
                />

                <p className="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl">
                  {cat.title}
                </p>
              </div>
            </Link>
          ))}
    </section>
  );
}
