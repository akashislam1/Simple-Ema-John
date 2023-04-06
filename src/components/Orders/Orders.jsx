import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import Review from "../Review/Review";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const saveCart = useLoaderData();
  const [carts, setCarts] = useState(saveCart);

  const handleRemoveCart = (id) => {
    const remainingCart = carts.filter((pd) => pd.id !== id);
    setCarts(remainingCart);
    removeFromDb(id);
  };
  const handleClear = () => {
    setCarts([]);
    deleteShoppingCart();
  };
  return (
    <div className="px-20  grid grid-cols-1 md:grid-cols-2 gap-3 my-8 w-3/4 mx-auto">
      <div className="  ">
        {carts.map((product) => (
          <Review
            key={product.id}
            product={product}
            handleRemoveCart={handleRemoveCart}
          ></Review>
        ))}
      </div>
      <div className="p-5 bg-amber-200">
        <Cart cart={carts} handleClear={handleClear}>
          <Link to="/checkout">
            <button className="mt-4 w-full flex justify-between gap-1 font-semibold   bg-red-600 text-white hover:bg-red-800 p-2  rounded-md">
              Proceed Checkout
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
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
