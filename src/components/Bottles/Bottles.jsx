import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './bottles.css'

const Bottles = ({bottlesPromise}) => {
  const [cart, setCart] = useState([]);
  const handleSetCart = (product) =>{
    const newCart = [...cart, product];
    setCart(newCart);
    alert("Bottle added to cart.")
  }

  const bottles = use(bottlesPromise)
  // console.log(bottles);
  return (
    <div>
      <h3>Bottles: {bottles.length}</h3>
      <h3>Cart: {cart.length}</h3>
      <div className='bottles'>
      {
        bottles.map(bottle => <Bottle handleSetCart={handleSetCart} key={bottle.id} bottle={bottle}></Bottle>)
      }
      </div>
    </div>
  );
};

export default Bottles;