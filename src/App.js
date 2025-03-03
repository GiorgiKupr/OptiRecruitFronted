import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';

import HomePage from './pages/Home/HomePage';
import FeaturesPage from './pages/Features/FeaturesPage';
import ContactPage from './pages/Contact/ContactPage';
import TailorCVPage from './pages/TailorCV/TailorCVPage';
import LoginPage from './pages/Login/LoginPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/tailor-cv" element={<TailorCVPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
