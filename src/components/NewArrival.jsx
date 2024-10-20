import { useEffect, useState } from "react";
import ProductService from "../services/ProductService";
import Carousel from "./Carousel";

export default function NewArrival() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProducts({}).then((data) => {
      setProducts(data);
    });
  }, []);

  return !products.length ? null : <Carousel products={products} />;
}
