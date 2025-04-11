const getCartFromLocalStorage = () => {
  const cartStorage = localStorage.getItem("cart");
  let cartData = JSON.parse(cartStorage);
  if (!cartData) cartData = [];
  console.log(cartData);

  return cartData;
};

const setCartToLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  cart.push(id);

  const cartString = JSON.stringify(cart);
  localStorage.setItem("cart", cartString);
};

export { getCartFromLocalStorage, setCartToLocalStorage };
