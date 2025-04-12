import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./bottles.css";
import { getCartFromLocalStorage, removeItemFromLocalStorage, setCartToLocalStorage } from "../../utils/localStorage";
import Cart from "../Cart/Cart";


const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);

  const handleSetCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    // console.log(newCart);
    alert("Bottle added to cart.");
    setCartToLocalStorage(product.id);
  };

  const bottles = use(bottlesPromise);
  // console.log(bottles);


  //useEffect
  useEffect( () => {
    const storedCartIds = getCartFromLocalStorage();
    // console.log(storedCartIds);
    const storedCart = [];
    for(const id of storedCartIds){
      const cartBottle = bottles.find(bottle => bottle.id === id);
      if(cartBottle){
        storedCart.push(cartBottle);
      }
    }
    // console.log(storedCart);
    setCart(storedCart)

  }, [bottles])

  const handleRemoveFromCart = id =>{
    const remainingCart = cart.filter(bottle => bottle.id != id);

    // console.log(remainingCart);
    setCart(remainingCart);
    removeItemFromLocalStorage(id);
  }

  return (
    <div>
      <h3>Bottles: {bottles.length}</h3>
      <h3>Cart: {cart.length}</h3>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
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
