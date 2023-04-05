import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import Review from "../Review/Review";
import { removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const saveCart = useLoaderData();
  const [cart, setCart] = useState(saveCart);

  const handleRemoveCart = (id) => {
    const remainingCart = cart.filter((pd) => pd.id !== id);
    setCart(remainingCart);
    removeFromDb(id);
  };
  return (
    <div className="px-20  grid grid-cols-1 md:grid-cols-2 gap-3 my-8 w-3/4 mx-auto">
      <div className="  ">
        {cart.map((product) => (
          <Review
            key={product.id}
            product={product}
            handleRemoveCart={handleRemoveCart}
          ></Review>
        ))}
      </div>
      <div className="p-5 bg-amber-200">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
