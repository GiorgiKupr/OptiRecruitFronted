import React, { useState } from 'react';
import './TailorCVPage.css';

function TailorCVPage() {
  const [jobDescription, setJobDescription] = useState('');
  const [cvFile, setCvFile] = useState(null);
  const [optimizedReady, setOptimizedReady] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');
  const API_BASE_URL = "https://localhost:7291"; 

  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]);
  };

  const handleUploadAndTailor = async () => {
    if (!jobDescription || !cvFile) {
      alert('Please provide both a job description and a CV file.');
      return;
    }

    const formData = new FormData();
    formData.append('File', cvFile);
    formData.append('JobDesc', jobDescription);

    try {
      const response = await fetch(`${API_BASE_URL}/api/resume/tailor-job-and-cv`, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const blob = await response.blob();
        // Create an object URL for the downloaded file
        const url = URL.createObjectURL(blob);
        setDownloadUrl(url);
        setOptimizedReady(true);
      } else {
        console.error('Error tailoring resume:', response.statusText);
        alert('Failed to tailor resume. Please try again.');
      }
    } catch (error) {
      console.error('Error uploading resume:', error);
      alert('Failed to tailor resume. Please try again.');
    }
  };

  const handleDownload = () => {
    if (!downloadUrl) return;
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
