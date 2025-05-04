import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/carts')
      .then(res => res.json())
      .then(data => {
        // Merge all products from all carts
        const allProducts = data.carts.flatMap(cart => cart.products);
        setProducts(allProducts);
        console.log(allProducts);
      });
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            width: '300px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px' }}
          />
          <h3>{product.title}</h3>
          <p style={{ fontSize: '14px', color: '#555' }}>Quantity: {product.quantity}</p>
          <strong>₹ {product.price}</strong>
        </div>
      ))}
    </div>
  );
};

export default Hero;
