/*import React from 'react';

const ProductCard = ({ product, onAdd }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} className="product-card__image" />
    <h3 className="product-card__title">{product.name}</h3>
    <p className="product-card__price">${product.price}</p>
    <button className="button button--add" onClick={() => onAdd(product)}>Agregar al carrito</button>
  </div>
);

export default ProductCard;*/
import React from 'react';

const ProductCard = ({ product, onAdd }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} className="product-card__image" />
    <h3 className="product-card__title">{product.name}</h3>
    <p className="product-card__brand">{product.brand}</p>
    <p className="product-card__short">{product.shortDesc}</p>
    <p className="product-card__long">{product.longDesc}</p>
    <p className="product-card__price">${product.price}</p>
    <button className="button button--add" onClick={() => onAdd(product)}>Agregar al carrito</button>
  </div>
);

export default ProductCard;
