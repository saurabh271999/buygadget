
// src/context/ProductContext.js
import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products] = useState([
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
      {
        id: 1,
        title: "iPhone 13",
        description: "Latest Apple smartphone",
        price: 25000,
        image: "https://www.imagineonline.store/cdn/shop/files/iPhone_13_Starlight_PDP_Image_Position-1A__GBEN.jpg?v=1692412588",
      },
      {
        id: 1,
        title: "iPhone 13",
        description: "Latest Apple smartphone",
        price: 25000,
        image: "https://www.imagineonline.store/cdn/shop/files/iPhone_13_Starlight_PDP_Image_Position-1A__GBEN.jpg?v=1692412588",
      },
      {
        id: 1,
        title: "iPhone 13",
        description: "Latest Apple smartphone",
        price: 25000,
        image: "https://www.imagineonline.store/cdn/shop/files/iPhone_13_Starlight_PDP_Image_Position-1A__GBEN.jpg?v=1692412588",
      },
      {
        id: 1,
        title: "iPhone 13",
        description: "Latest Apple smartphone",
        price: 25000,
        image: "https://www.imagineonline.store/cdn/shop/files/iPhone_13_Starlight_PDP_Image_Position-1A__GBEN.jpg?v=1692412588",
      },
      {
        id: 1,
        title: "iPhone 13",
        description: "Latest Apple smartphone",
        price: 25000,
        image: "https://www.imagineonline.store/cdn/shop/files/iPhone_13_Starlight_PDP_Image_Position-1A__GBEN.jpg?v=1692412588",
      },
      {
        id: 1,
        title: "iPhone 13",
        description: "Latest Apple smartphone",
        price: 25000,
        image: "https://www.imagineonline.store/cdn/shop/files/iPhone_13_Starlight_PDP_Image_Position-1A__GBEN.jpg?v=1692412588",
      },
  ]);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};



