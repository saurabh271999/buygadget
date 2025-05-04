// Hero.js
import React, { useContext } from "react";
import { CartContext } from "./Cartcontext"; // import context

const products = [
  {
    id: 1,
    title: "iPhone 13",
    description: "Latest Apple smartphone",
    price: 25000,
    image: "https://www.imagineonline.store/cdn/shop/files/iPhone_13_Starlight_PDP_Image_Position-1A__GBEN.jpg?v=1692412588",
  },
  {
    id: 2,
    title: "Samsung Galaxy S23 Ultra",
    description: "Latest Samsung phone",
    price: 50000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQosDBiUC7oVcT3T39yM3fudh3VV4WWtP0VAg&s",
  },
  // ...rest same as before
];

const Hero = () => {
  const { setBuyPhone } = useContext(CartContext); // use context

  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' }}>
      {products.map((product) => (
        <div key={product.id} style={{
          width: '300px',
          height:'420px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '15px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          <img 
            src={product.image}
            alt={product.title}
            style={{ width: '100%', height: '200px', borderRadius: '8px' }}
          />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <strong>₹ {product.price}</strong><br />
          <button className="cart-btn" onClick={() => setBuyPhone(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Hero;
