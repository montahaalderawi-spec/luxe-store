import React from "react";
import {Link} from 'react-router-dom';
import './Home.css';

const Home = () => {
  return(
   <div className="home-container">
      <div className="hero-content">
        <h1>Welcome to LUXE STORE</h1>
        <p>Discover our premium collection of beauty and lifestyle products.</p>
        <Link to="/Products" className="shop-now-btn">
          Shop Now
        </Link>
      </div>
    </div>
   );
};
export default Home;