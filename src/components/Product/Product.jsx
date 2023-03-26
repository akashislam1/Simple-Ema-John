import React from "react";

const Product = (props) => {
  //   console.log(props.product);
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
            <p>Rating : {ratings}</p>
          </div>
        </div>

        <button className="w-100 bg-amber-300 hover:bg-orange-400 p-2 text-center rounded-b-md">
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Product;
