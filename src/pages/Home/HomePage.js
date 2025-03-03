// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to AI Resume Builder</h1>
      <p className="subtitle">Your one-stop solution for creating, optimizing, and tailoring your CV!</p>

      <div className="cards-container">
        <div className="home-card">
          <div className="card-icon">📄</div>
          <h3>Create CV</h3>
          <p>Generate a professional CV from scratch with ease.</p>
          <button>Start Now</button>
        </div>

        <div className="home-card">
          <div className="card-icon">⚙️</div>
          <h3>Optimize CV</h3>
          <p>Enhance your CV to make it stand out from the crowd.</p>
          <button>Optimize Now</button>
        </div>

        <div className="home-card">
          <div className="card-icon">✍️</div>
          <h3>Tailor CV</h3>
          <p>Customize your CV for specific job applications.</p>
          <Link to="/tailor-cv"><button>Tailor Now</button></Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
