import React, { useContext, useState } from 'react';
import { CartContext } from './Cartcontext';

const Cart = () => {
  const { buyPhone } = useContext(CartContext);
  const [counter, setCounter] = useState(1); // default quantity is 1

  const handleCounter = () => {
    setCounter(prev => prev + 1);
  };

  const handleCounterminus = () => {
    setCounter(prev => (prev > 1 ? prev - 1 : 1));
  };

  if (!buyPhone) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>🛒 Cart</h2>
        <p>No item in cart.</p>
      </div>
    );
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        border: '2px solid black',
        borderRadius: '10px',
        padding: '15px',
        width: '300px',
        textAlign: 'center'
      }}>
        <img src={buyPhone.image} alt={buyPhone.title} style={{ width: '100%',
          height:'200px', borderRadius: '8px' }} />
        <h3>{buyPhone.title}</h3>
        <p>{buyPhone.description}</p>
        <strong>Price: ₹ {buyPhone.price}</strong>
        <p style={{ marginTop: '10px' }}>Quantity: {counter}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={handleCounterminus}>➖</button>
          <button onClick={handleCounter}>➕</button>
        </div>
        <p style={{ marginTop: '10px' }}>
          Total: ₹ {buyPhone.price * counter}
        </p>
      </div>
      <div style={{
        border: '2px solid black',
        borderRadius: '10px',
        padding: '15px',
        width: '300px',
        textAlign: 'center'
      }}>
        <img src={buyPhone.image} alt={buyPhone.title} style={{ width: '100%',
          height:'200px', borderRadius: '8px' }} />
        <h3>{buyPhone.title}</h3>
        <p>{buyPhone.description}</p>
        <strong>Price: ₹ {buyPhone.price}</strong>
        <p style={{ marginTop: '10px' }}>Quantity: {counter}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={handleCounterminus}>➖</button>
          <button onClick={handleCounter}>➕</button>
        </div>
        <p style={{ marginTop: '10px' }}>
          Total: ₹ {buyPhone.price * counter}
        </p>
      </div>
    </div>
  );
};

export default Cart;
