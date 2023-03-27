import React from "react";

const Product = (props) => {
  //   console.log(props.product);
  const handleAddToCart = props.handleAddToCart;
  const { img, name, price, ratings, seller } = props.product;
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl rounded-md border-2">
        <figure className="p-1">
          <img className="rounded-md" src={img ? img : ""} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h5 className="card-title text-xl mb-2">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h5>
          <p className="font-semibold text-xl">Price : ${price}</p>
          <div>
            <p>Manufacturer : {seller}</p>
            <p>Rating : {ratings} Stars</p>
          </div>
        </div>

        <button
          onClick={() => handleAddToCart(props.product)}
          className="w-100 flex justify-center gap-1 font-semibold bg-amber-300 hover:bg-orange-400 p-2 text-center rounded-b-md"
        >
          Add to Cart
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </span>
        </button>
      </div>
    </>
  );
};

export default Product;
