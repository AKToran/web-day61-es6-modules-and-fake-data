const getCartFromLocalStorage = () => {
  const cartStorage = localStorage.getItem("cart");
  let cartData = JSON.parse(cartStorage);
  if (!cartData) cartData = [];
  // console.log(cartData);

  return cartData;
};

const saveCartToLocalStorage = (cart) => {
  if(cart.length === 0){
    localStorage.clear("cart")
  }
  else{
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

const setCartToLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  cart.push(id);

  saveCartToLocalStorage(cart)
};


const removeItemFromLocalStorage = id =>{
  const cart = getCartFromLocalStorage();

  const remainingCart = cart.filter(cid => cid != id);

  saveCartToLocalStorage(remainingCart);
}

export { getCartFromLocalStorage, setCartToLocalStorage, removeItemFromLocalStorage };
