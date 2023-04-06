import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../fakedb/fakedb";
import Product from "../Product/Product";
import { deleteShoppingCart } from "../../utilities/fakedb";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };
  const handleClear = () => {
    setCart([]);
    deleteShoppingCart();
  };

  const handleAddToCart = (product) => {
    // const neqCart = [...cart, product];
    // step 1
    let newCart = [];
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }

    setCart(newCart);
    addToDb(product.id);
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1: find id.
    for (const id in storedCart) {
      // get the product by using id from the stored cart and add it to the cart list if it exists already
      const addedProduct = products.find((p) => p.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  return (
    <>
      <div className="px-20  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 my-8">
        <div className="lg:col-span-3 grid lg:grid-cols-3 gap-5">
          {products?.slice(0, showAll ? 76 : 6).map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="p-5 bg-amber-200">
          <Cart cart={cart} handleClear={handleClear}>
            <Link to="/orders">
              <button className="mt-4 w-full flex justify-between gap-1 font-semibold   bg-red-600 text-white hover:bg-red-800 p-2  rounded-md">
                Review Orders
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          </Cart>
        </div>
      </div>
      {!showAll && (
        <div className="text-center mb-10">
          <button onClick={handleShowAll} className="btn">
            Show All
          </button>
        </div>
      )}
    </>
  );
};

export default Shop;
