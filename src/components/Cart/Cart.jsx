import React from "react";

const Cart = ({ cart }) => {
  let total = 0;
  for (const product of cart) {
    total = total + product.price;
  }
  return (
    <div className="sticky top-0">
      <h2 className="my-5 text-center text-2xl font-bold ">Order Summary</h2>
      <p className="mb-2">Selected Items: {cart.length}</p>
      <p className="mb-2">Total Price: $ {total}</p>
      <p className="mb-2">Total Shipping Charge: $</p>
      <p className="mb-2">Tax: $</p>
      <h5 className="font-semibold">Grand Total: $</h5>
    </div>
  );
};

export default Cart;
