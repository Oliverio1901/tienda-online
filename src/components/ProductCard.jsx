import React from 'react';

const ProductCard = ({ product, onAdd }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} className="product-card__image" />
    <h3 className="product-card__title">{product.name}</h3>
    <p className="product-card__price">${product.price}</p>
    <button className="button button--add" onClick={() => onAdd(product)}>Agregar al carrito</button>
  </div>
);

export default ProductCard;