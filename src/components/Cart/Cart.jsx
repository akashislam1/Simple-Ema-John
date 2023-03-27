import React from "react";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="sticky top-0">
      <h2 className="my-5 text-center text-2xl font-bold ">Order Summary</h2>
      <p className="mb-2">Selected Items: {cart.length}</p>
      <p className="mb-2">Total Price: $ {totalPrice}</p>
      <p className="mb-2">Total Shipping Charge: $ {totalShipping}</p>
      <p className="mb-2">Tax: $ {tax.toFixed(2)}</p>
      <h5 className="font-semibold">Grand Total: $ {grandTotal.toFixed(2)}</h5>
    </div>
  );
};

export default Cart;
