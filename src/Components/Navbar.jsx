import React from 'react'
import {Link,NavLink} from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      <Link to="/">LUXE STORE</Link>
      </div>
      <ul className="navbar-links">
       <li><Link to="/">Home</Link></li>
       <li><Link to="/About">About</Link></li>
       <li><Link to="/Products">Products</Link></li>
       <li><Link to="/Dashboard">Dashboard</Link></li>
       <li><Link to="/login" className="login-btn">login</Link></li>
       </ul>
    </nav>
  )
}
export default Navbar