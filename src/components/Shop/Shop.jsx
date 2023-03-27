import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const neqCart = [...cart, product];
    setCart(neqCart);
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div className="px-20  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 my-8">
        <div className="lg:col-span-3 grid lg:grid-cols-3 gap-5">
          {products?.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="text-center bg-amber-200 ">
          <h2 className="my-5 text-2xl font-bold ">Order Summary</h2>
          <p className="font-semibold">Selected Items: {cart.length}</p>
        </div>
      </div>
    </>
  );
};

export default Shop;
