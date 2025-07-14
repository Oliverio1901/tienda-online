import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <h1 className="header__title">Accesorios Deportivos KM18</h1>
      <nav className="header__nav">
        <Link className={location.pathname === '/' ? 'active' : ''} to="/">Inicio</Link>
        <Link className={location.pathname === '/productos' ? 'active' : ''} to="/productos">Productos</Link>
        <Link className={location.pathname === '/carrito' ? 'active' : ''} to="/carrito">Carrito</Link>
      </nav>
    </header>
  );
};

export default Header;

