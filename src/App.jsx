import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/Navbar";
import Cart from "./assets/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slides from './Slides';
import Hero from './assets/Hero';
import Header from './assets/Header';
import Buyphone from './assets/Buyphone';
import Login from './assets/Login';
import BuyLaptop from './assets/BuyLaptop';
import { CartProvider } from "./assets/Cartcontext";
import Gadgets from './assets/Gadgets'
import { ProductProvider} from "./assets/Alldata"
import './App.css';

function App() {
  return (
    <ProductProvider>
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Slides />
              <hr />
              <Hero />
              
              <Gadgets />
            </>
          } />
          <Route path="/hero" element={<Hero />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/buyphone" element={<Buyphone />} />
          <Route path="/buylaptop" element={<BuyLaptop />} />
          <Route path="/gadget" element={<Gadgets  />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </ProductProvider>
  );
}

export default App;
