import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, deleteItem } from '../ReduxToolkit/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addItemToCart = (product) => {
    dispatch(addItem(product));
  };

  const removeItemFromCart = (product) => {
    dispatch(removeItem(product));
  };

  const deleteItem = (product) => {
    dispatch(deleteItem(product));
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <ul className="cart-items">
        {cart.map((item) => (
          <li key={item.id}>
            <div className="cart-item">
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>{item.quantity} x ${item.price}</p>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => addItemToCart(item)}>+</button>
                <button onClick={() => removeItemFromCart(item)}>-</button>
                <button onClick={() => deleteItem(item)}>Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
