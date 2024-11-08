import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="navbar-logo">
          J.M
        </Link>
        <ul className="navbar-menu">
          <li><Link to="/about" className="navbar-item">About</Link></li>
          <li><Link to="/projects" className="navbar-item">Projects</Link></li>
          <li><Link to="/contact" className="navbar-item">Contact</Link></li>
        </ul>
    </nav>
  );
};

export default Navbar;
