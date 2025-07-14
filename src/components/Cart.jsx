import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, onRemove }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2 className="cart__title">Carrito de Compra</h2>
      {cartItems.length === 0 ? <p>El carrito está vacío.</p> : cartItems.map((item) => (
        <CartItem key={item.id} item={item} onRemove={onRemove} />
      ))}
      <div className="cart__total">Total: ${total.toFixed(2)}</div>
    </div>
  );
};

export default Cart;
