import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Cart from '../components/Cart';

const CartPage = () => {
  const [cart, setCart] = useLocalStorage('cart', []);

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="cart-page">
      <Cart cartItems={cart} onRemove={removeFromCart} />
    </div>
  );
};

export default CartPage;
