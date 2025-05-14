import React, { useContext, useState } from 'react';
import { CartContext } from './Cartcontext';
import { useEffect } from 'react';
const Cart = () => {
  const { buyPhone } = useContext(CartContext); // Access the product stored in CartContext
  const [counter, setCounter] = useState(1);

  
  // Handle counter for quantity
  const handleCounter = () => {
    setCounter(prev => prev + 1);
  };

  const handleCounterminus = () => {
    setCounter(prev => (prev > 1 ? prev - 1 : 1)); 
  };



  useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://checkout.razorpay.com/v1/checkout.js';
  script.async = true;
  document.body.appendChild(script);
}, []);

  const handlePayment = () => {
  const options = {
    key: 'rzp_live_0UuvnA3YQefRKT', 
    amount: buyPhone.price * counter * 100, 
    currency: 'INR',
    name: 'My E-commerce Store',
    description: buyPhone.title,
    image: 'https://your-logo-url.com', 
    handler: function (response) {
      alert('✅ Payment Successful! Payment ID: ' + response.razorpay_payment_id);
    },
    prefill: {
      name: 'Saurabh',
      email: 'saurabh@example.com',
      contact: '9999999999',
    },
    notes: {
      address: 'Ghaziabad, India',
    },
    theme: {
      color: '#3399cc',
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
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
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div
        style={{
          border: '2px solid black',
          borderRadius: '10px',
          padding: '15px',
          width: '300px',
          textAlign: 'center',
        }}
      >
        <img
          src={buyPhone.image}
          alt={buyPhone.title}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
        <h3>{buyPhone.title}</h3>
        <p>{buyPhone.description}</p>
        <strong>₹ {buyPhone.price}</strong>
        <p style={{ marginTop: '10px' }}>Quantity: {counter}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={handleCounterminus}>➖</button>
          <button onClick={handleCounter}>➕</button>
        </div>
        <p style={{ marginTop: '10px' }}>
          Total: ₹ {buyPhone.price * counter} {/* Total calculation */}
        </p>
        <button onClick={handlePayment}>Checkout</button>

      </div>
    </div>
  );
};

export default Cart;
