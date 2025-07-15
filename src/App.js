import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import CartPage from './pages/CartPage';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Returns from './pages/Returns';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/carrito" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/devoluciones" element={<Returns />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;