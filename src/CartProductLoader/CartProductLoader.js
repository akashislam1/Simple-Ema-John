import { getShoppingCart } from "../components/fakedb/fakedb";

const cartProductLoader = async () => {
  const loadedProduct = await fetch(`/public/products.json`);
  const products = await loadedProduct.json();

  const storedCart = getShoppingCart();
  const savedCart = [];

  for (const id in storedCart) {
    const addedProduct = products.find((p) => p.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }
  //   console.log(storedCart);
  return savedCart;
};

export default cartProductLoader;
