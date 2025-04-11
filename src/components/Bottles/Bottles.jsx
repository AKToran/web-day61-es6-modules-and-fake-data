import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./bottles.css";
import { getCartFromLocalStorage, setCartToLocalStorage } from "../../utils/localStorage";

const cartData = getCartFromLocalStorage()

const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState(cartData);

  const handleSetCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    alert("Bottle added to cart.");
    setCartToLocalStorage(product.id);
  };

  const bottles = use(bottlesPromise);
  // console.log(bottles);
  return (
    <div>
      <h3>Bottles: {bottles.length}</h3>
      <h3>Cart: {cart.length}</h3>
      <div className="bottles">
        {bottles.map((bottle) => (
          <Bottle
            handleSetCart={handleSetCart}
            key={bottle.id}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
