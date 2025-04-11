import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./bottles.css";
import { getCartFromLocalStorage, setCartToLocalStorage } from "../../utils/localStorage";


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
