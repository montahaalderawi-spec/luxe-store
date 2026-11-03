import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const values = [
  {
    title: 'Quality you can trust',
    text: 'Every product is selected and checked before it reaches our shelves.',
  },
  {
    title: 'Fast delivery',
    text: 'Your order is packed quickly and sent straight to your door.',
  },
  {
    title: 'Secure payment',
    text: 'Your payment details are protected at every step of checkout.',
  },
];

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About LUXE STORE</h2>
        <p className="about-subtitle">Your Destination for Premium Products</p>

        <div className="about-details">
          <p>
            At LUXE STORE, we believe in delivering the highest quality products
            directly to your doorstep. Our curated collection ranges from
            high-end beauty essentials to modern lifestyle gadgets.
          </p>
          <p>
            Built with passion and a commitment to excellence, our platform
            ensures a seamless and secure shopping experience. Whether you are
            looking for everyday essentials or something extraordinary, we have
            got you covered.
          </p>
        </div>

        <ul className="about-values">
          {values.map((value) => (
            <li key={value.title} className="about-value">
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </li>
          ))}
        </ul>

        <Link to="/products" className="about-cta">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default About;