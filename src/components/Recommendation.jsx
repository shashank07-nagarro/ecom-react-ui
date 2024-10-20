import ProductService from "./../services/ProductService";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Recommendation() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProducts({}).then((data) => {
      setProducts(data);
    });
  }, []);
  return (
    <>
      <p className="mx-auto mt-10 mb-5 max-w-[1200px] px-5">
        RECOMMENDED FOR YOU
      </p>

      <section className="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-4">
        {products.length &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </section>
    </>
  );
}
