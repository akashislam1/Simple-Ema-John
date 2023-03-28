import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../fakedb/fakedb";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
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
          <Cart cart={cart}></Cart>
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
