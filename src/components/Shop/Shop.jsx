import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div className="px-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-8">
        <div className="lg:col-span-3 grid lg:grid-cols-3 gap-5">
          {products?.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
        <div>Order Summary</div>
      </div>
    </>
  );
};

export default Shop;
