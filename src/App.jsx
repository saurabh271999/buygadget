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
import { CartProvider } from "./assets/Cartcontext";
import './App.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Slides />
              <Hero />
            </>
          } />
          <Route path="/hero" element={<Hero />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/buyphone" element={<Buyphone />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
