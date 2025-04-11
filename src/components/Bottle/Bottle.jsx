import React from 'react';
import './bottle.css'

const Bottle = ({bottle, handleSetCart}) => {
  const {img, name, price, stock} = bottle;
  return (
    <div className='card'>
      <h3>{name}</h3>
      <img src={img} alt="" />
      <p>${price} ZD</p>
      <p>Available: {stock}</p>
      <button onClick={() => {
        handleSetCart(bottle)
      }}>Buy Now</button>
    </div>
  );
};

export default Bottle;