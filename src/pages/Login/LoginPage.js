// src/pages/LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
  const [jobDescription, setJobDescription] = useState('');
  const [password, setPassword] = useState('');
  const [cvFile, setCvFile] = useState(null);

  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]);
  };

  const handleDownload = () => {
    console.log('Job Description:', jobDescription);
    console.log('Password:', password);
    console.log('CV File:', cvFile);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="image-placeholder">
          <p>AI CV Pro</p>
        </div>
      </div>
      <div className="login-right">
        <h2>Log in</h2>

        <label>Email</label>
        <textarea
          placeholder="Enter your email..."
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password..."
          value={password}
          onChange={handlePasswordChange}
        />

        <button className="download-btn" >
          Log in
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
