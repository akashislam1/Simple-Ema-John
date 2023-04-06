import React from "react";

const Cart = ({ cart, handleClear, children }) => {
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
      <>
        <button
          onClick={handleClear}
          className="mt-4 w-full flex justify-between gap-1 font-semibold   bg-red-600 text-white hover:bg-red-800 p-2  rounded-md"
        >
          Clear Cart
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
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </span>
        </button>
        {children}
      </>
    </div>
  );
};

export default Cart;
