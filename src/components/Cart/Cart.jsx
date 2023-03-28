import React from "react";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping * product.quantity;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="sticky top-0">
      <h2 className="my-5 text-center text-2xl font-bold ">Order Summary</h2>
      <p className="mb-2">Selected Items: {quantity}</p>
      <p className="mb-2">Total Price: $ {totalPrice}</p>
      <p className="mb-2">Total Shipping Charge: $ {totalShipping}</p>
      <p className="mb-2">Tax: $ {tax.toFixed(2)}</p>
      <h5 className="font-semibold">Grand Total: $ {grandTotal.toFixed(2)}</h5>
    </div>
  );
};

export default Cart;
