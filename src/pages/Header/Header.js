// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">OptiCV</div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/SignUp">SignUp</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
