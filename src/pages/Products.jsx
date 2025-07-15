/*import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import ProductCard from '../components/ProductCard';
import { FaCheckCircle } from 'react-icons/fa';

const mockProducts = [
  { id: 1, name: 'Playera Dry-Fit', price: 250, image: 'https://epicfit.mx/wp-content/uploads/2023/10/WEHP001-GRIS-PORTADA-scaled.jpg' },
  { id: 2, name: 'Gorra Deportiva', price: 180, image: 'https://img.kwcdn.com/product/fancy/41dc3677-afcf-4481-b57f-1103e05550e9.jpg' },
  { id: 3, name: 'Mochila Fitness', price: 320, image: 'https://static.nike.com/a/images/t_default/c97aa936-cdab-4520-a7f1-9a7de8723cc5/NK%20GYM%20CLUB%20BAG%20-%20SP23.png' },
  { id: 4, name: 'Tenis Fitness', price: 520, image: 'https://m.media-amazon.com/images/I/71e2dkrxp5L._UY900_.jpg' },
  { id: 5, name: 'Guantes para Gym Mujer con Protección', price: 220, image: 'https://m.media-amazon.com/images/I/71srU6wr09L._AC_SX679_.jpg' },
];

const Products = () => {
  const [cart, setCart] = useLocalStorage('cart', []);
  const [message, setMessage] = useState('');

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setMessage(`${product.name} agregado al carrito.`);

    setTimeout(() => setMessage(''), 2500);
  };

  return (
    <div className="products">
      <h2 className="products__title">Nuestros productos</h2>
      {message && (
        <div className="alert">
          <FaCheckCircle style={{ marginRight: '8px' }} />
          {message}
        </div>
      )}
      <div className="products__grid">
        {mockProducts.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
*/

import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import ProductCard from '../components/ProductCard';
import { FaCheckCircle } from 'react-icons/fa';

const mockProducts = [
  {
    id: 1,
    name: 'Playera Dry-Fit',
    brand: 'Deportes ProFit',
    shortDesc: 'Ideal para entrenamientos intensos.',
    longDesc: 'Confeccionada con tecnología Dry-Fit para mantenerte seco durante tu entrenamiento. Tela ligera y cómoda.',
    price: 250,
    image: 'https://epicfit.mx/wp-content/uploads/2023/10/WEHP001-GRIS-PORTADA-scaled.jpg'
  },
  {
    id: 2,
    name: 'Gorra Deportiva',
    brand: 'FitGear México',
    shortDesc: 'Protección solar y estilo deportivo.',
    longDesc: 'Diseñada para atletas y runners. Material respirable, ajuste seguro y colores modernos.',
    price: 180,
    image: 'https://img.kwcdn.com/product/fancy/41dc3677-afcf-4481-b57f-1103e05550e9.jpg'
  },
  {
    id: 3,
    name: 'Mochila Fitness',
    brand: 'SportyMX',
    shortDesc: 'Espacio para todo tu equipo.',
    longDesc: 'Mochila de alta capacidad, bolsillos especiales para ropa húmeda, botellas y gadgets. Ideal para gimnasio y viaje.',
    price: 320,
    image: 'https://static.nike.com/a/images/t_default/c97aa936-cdab-4520-a7f1-9a7de8723cc5/NK%20GYM%20CLUB%20BAG%20-%20SP23.png'
  },
  {
    id: 4,
    name: 'Tenis Fitness',
    brand: 'SportyMX',
    shortDesc: 'La comodidad de tus pies.',
    longDesc: 'Tenis fitness ligeros y cómodos, ideales para entrenamiento en gimnasio o actividades deportivas. Suela flexible y diseño transpirable.',
    price: 320,
    image: 'https://m.media-amazon.com/images/I/71e2dkrxp5L._UY900_.jpg'
  },
  {
    id: 3,
    name: 'Guantes para Gym Mujer con Protección',
    brand: 'SportyMX',
    shortDesc: 'Portección de tus manos.',
    longDesc: 'Guantes de gym para mujer con protección acolchada, cómodos y antideslizantes.',
    price: 320,
    image: 'https://m.media-amazon.com/images/I/71srU6wr09L._AC_SX679_.jpg'
  }
];

const Products = () => {
  const [cart, setCart] = useLocalStorage('cart', []);
  const [message, setMessage] = useState('');

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setMessage(`${product.name} agregado al carrito.`);
    setTimeout(() => setMessage(''), 2500);
  };

  return (
    <div className="products">
      <h2 className="products__title">Nuestros productos</h2>
      {message && (
        <div className="alert">
          <FaCheckCircle style={{ marginRight: '8px' }} />
          {message}
        </div>
      )}
      <div className="products__grid">
        {mockProducts.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
