
import React from 'react';

const CartItem = ({ item, onRemove }) => (
  <div className="cart-item">
    <img src={item.image} alt={item.name} className="cart-item__image" />
    <div className="cart-item__info">
      <span className="cart-item__name">{item.name}</span>
      <span className="cart-item__quantity">Cantidad: {item.quantity}</span>
      <span className="cart-item__price">Total: ${(item.price * item.quantity).toFixed(2)}</span>
    </div>
    <button className="button button--remove" onClick={() => onRemove(item.id)}>Eliminar</button>
  </div>
);

export default CartItem;