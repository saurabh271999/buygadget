import React, { useContext } from "react";
import { ProductContext } from "./Alldata"; // Make sure the path is correct
import { CartContext } from "./Cartcontext"; // Import the CartContext to update the cart
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Hero = () => {
  const { products } = useContext(ProductContext); // Access products from context
  const { setBuyPhone } = useContext(CartContext); // Access the function to update cart

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  // Handle Add to Cart functionality
  const handleAddToCart = (product) => {
    setBuyPhone(product); // Set the selected product to CartContext
  };

  const cartAddMsg = () => {
    alert("Product added to your cart");
  };

  const handleAll = (product) => {
    handleAddToCart(product); // Pass the product here
    cartAddMsg();
  };

  return (
    <>
    <h1>Buy Phone</h1>
    <div style={{ padding: "20px" }}>
      
      <Carousel responsive={responsive} infinite autoPlay>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              width: "300px",
              height: "400px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              margin: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <strong>₹ {product.price}</strong>
            <br />
            <button
              className="cart-btn"
              onClick={() => handleAll(product)} // Add to cart
            >
              Add to cart
            </button>
          
          </div>
        ))}
      </Carousel>
    </div>
    </>
  );
};

export default Hero;
