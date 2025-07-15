import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Checkout = () => {
  const [cart, setCart] = useLocalStorage('cart', []);
  const [message, setMessage] = useState('');
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayment = () => {
    if (cart.length === 0) {
      setMessage('Tu carrito está vacío.');
      return;
    }
    setMessage('Procesando pago...');
    setTimeout(() => {
      setCart([]);
      setMessage('Pago exitoso. ¡Gracias por tu compra!');
    }, 2000);
  };

  return (
    <div className="checkout">
      <h2 className="checkout__title">Procesar Pago</h2>
      {cart.length === 0 ? (
        <p>No hay productos en tu carrito.</p>
      ) : (
        <>
          <ul className="checkout__list">
            {cart.map((item) => (
              <li key={item.id} className="checkout__item">
                {item.name} x {item.quantity} - ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <div className="checkout__total">Total a pagar: ${total.toFixed(2)}</div>
          <button className="button button--add" onClick={handlePayment}>Confirmar y pagar</button>
        </>
      )}
      {message && <div className="alert" style={{ marginTop: '1rem' }}>{message}</div>}
    </div>
  );
};

export default Checkout;

