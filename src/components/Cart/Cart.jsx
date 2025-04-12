import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
  return (
    <div style={{display:"flex",flexWrap:"wrap", gap:"5px", marginBottom: "15px"}}>
      {
        cart.map(bottle => <div style={{display:"flex"}} key={bottle.id}>
          <img style={{width: "100px"}} src={bottle.img} alt="" />
          <button onClick={() => {
            handleRemoveFromCart(bottle.id)
          }}>X</button>
        </div>)
      }
    </div>
  );
};

export default Cart;