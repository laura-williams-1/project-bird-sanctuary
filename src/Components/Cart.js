import { useState } from "react";
function Cart({ cart, removeBird }) {
  let getTotal = cart.reduce((counter, element) => counter + element.amount, 0);
  //discount is
  return (
    <div className="cart">
      <h1>Cart</h1>
      <h3>Discount: {cart.length < 3 ? 0 : 10}%</h3>
      <h4>Total: ${getTotal}</h4>

      {cart.map((el) => (
        <ol key={el.id}>
          {" "}
          <li>
            {el.name}: ${el.amount}
            <button onClick={() => removeBird(el.id)}>remove</button>
          </li>{" "}
        </ol>
      ))}
    </div>
  );
}

export default Cart;
