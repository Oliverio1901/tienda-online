/*import React from 'react';

const Returns = () => (
  <div className="returns">
    <h2 className="returns__title">Política de Devolución de Pedidos</h2>
    <p className="returns__text">
      En <strong>Accesorios Deportivos KM18</strong>, tu satisfacción es nuestra prioridad. Si no estás completamente satisfecho con tu compra, puedes devolver el producto dentro de los <strong>15 días naturales</strong> posteriores a la recepción del pedido.
    </p>
    <ul className="returns__list">
      <li>El producto debe estar sin uso y en su empaque original.</li>
      <li>Debes presentar tu número de pedido y comprobante de compra.</li>
      <li>Los gastos de envío por devolución corren por cuenta del cliente, salvo en casos de producto defectuoso.</li>
    </ul>
    <p className="returns__contact">
      Para gestionar tu devolución, contáctanos a través del correo: <a href="mailto:soporte@km18.com">soporte@km18.com</a>
    </p>
  </div>
);

export default Returns;
*/
// pages/Returns.jsx
import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Returns = () => (
  <div className="returns">
    <h2 className="returns__title">Política de Devolución de Pedidos</h2>
    <p className="returns__text">
      En <strong>Accesorios Deportivos KM18</strong>, tu satisfacción es nuestra prioridad. Si no estás completamente satisfecho con tu compra, puedes devolver el producto dentro de los <strong>15 días naturales</strong> posteriores a la recepción del pedido.
    </p>
    <ul className="returns__list">
      <li>El producto debe estar sin uso y en su empaque original.</li>
      <li>Debes presentar tu número de pedido y comprobante de compra.</li>
      <li>Los gastos de envío por devolución corren por cuenta del cliente, salvo en casos de producto defectuoso.</li>
    </ul>
    <p className="returns__contact">
      Para gestionar tu devolución, contáctanos a través del correo: <a href="mailto:soporte@km18.com">soporte@km18.com</a>
    </p>
  </div>
);

export default Returns;