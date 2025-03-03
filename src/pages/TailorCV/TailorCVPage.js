import React, { useState } from 'react';
import './TailorCVPage.css';

function TailorCVPage() {
  const [jobDescription, setJobDescription] = useState('');
  const [cvFile, setCvFile] = useState(null);
  const [optimizedReady, setOptimizedReady] = useState(false);

  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]);
  };

  const handleUploadAndTailor = () => {
    // In a real app, you'd send jobDescription & cvFile to your backend
    console.log('Job Description:', jobDescription);
    console.log('CV File:', cvFile);

    // Simulate a short delay for "processing"
    setTimeout(() => {
      setOptimizedReady(true);
    }, 1000);
  };

  const handleDownload = () => {
    // Trigger a download of the processed CV
    console.log('Downloading optimized CV...');
  };

  return (
    <div className="tailor-cv-container">
      <div className="tailor-cv-card">
        <h2>Tailor Your CV</h2>
        <textarea
          placeholder="Paste the job description here..."
          value={jobDescription}
          onChange={handleJobDescriptionChange}
        />

        <label htmlFor="cvFile" className="upload-label">
          Upload Your CV
        </label>
        <input
          id="cvFile"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />

        <button className="primary-button" onClick={handleUploadAndTailor}>
          Upload and Tailor CV
        </button>
      </div>

      {optimizedReady && (
        <div className="result-card">
          <h3>Your Optimized CV is Ready!</h3>
          <button className="download-button" onClick={handleDownload}>
            Download Optimized CV
          </button>
        </div>
      )}
    </div>
  );
}

export default TailorCVPage;
