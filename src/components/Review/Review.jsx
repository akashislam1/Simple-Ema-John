import React from "react";

const Review = ({ product, handleRemoveCart }) => {
  // console.log(product);
  const { id, img, name, price, shipping, quantity } = product;
  return (
    <>
      <div className="flex justify-between items-center mb-2 border-2 p-3 gap-3">
        <div className="">
          <img className="w-[90px] h-[90px] rounded-md" src={img} alt="" />
        </div>
        <div className="grow flex justify-between items-center">
          <div className="">
            <h4 className="font-semibold text-xs">{name}</h4>
            <p>
              Price : <span className="text-amber-300 font-bold">${price}</span>
            </p>
            <p>
              Shipping Charge :
              <span className="text-amber-300 font-bold"> ${shipping}</span>
            </p>
            <p>
              Quantity :{" "}
              <span className="text-amber-300 font-bold">{quantity}</span>
            </p>
          </div>
          <div>
            <button
              onClick={() => handleRemoveCart(id)}
              className="bg-red-200 flex items-center justify-center text-red-500 w-14 h-14 rounded-full"
            >
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
