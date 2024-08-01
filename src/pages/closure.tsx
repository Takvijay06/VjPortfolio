// App.js
import React, { useState } from "react";
interface ICartItem {
  name: string;
  price: number;
}
interface ICart {
  items: ICartItem[];
  total: number;
}

export const createCart = () => {
  let cart: ICartItem[] = [];
  const addItems = (item: ICartItem) => {
    cart.push(item);
  };

  const getTotal = () => {
    return cart.reduce((acc, curr) => acc + curr.price, 0);
  };

  const getCart = (): ICart => {
    const total = getTotal();
    return { items: cart, total };
  };
  return { addItems, getCart };
};

const ClosureStore = () => {
  const [cartState, setCartState] = useState<ICart>({ items: [], total: 0 });
  const cart = createCart();

  const handleAddItem = () => {
    cart.addItems({ name: "Nirma", price: 58 });
    cart.addItems({ name: "Maggie", price: 28 });
    cart.addItems({ name: "Room Spray", price: 200 });
    setCartState(cart.getCart());
  };

  return (
    <div className="container">
      <div className="projects">
        <h1>Shopping Cart</h1>
        <h3>Closure is a concept in JS that allows function to retain its enclosured function's variable state even after 
            outer function finished its execution.
        </h3>
        <button onClick={handleAddItem}>Add Items</button>
        <h3>Cart Items:</h3>
        <ul>
          {cartState.items.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
        <h3>Total: {cartState.total}</h3>
      </div>
    </div>
  );
};

export default ClosureStore;
