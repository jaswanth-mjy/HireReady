import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
export default function Home() {
  const [file, setFile] = useState(null);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file || !role) return alert("Please upload a resume and enter a target role.");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("role", role);

    try {
      const response = await axios.post("http://127.0.0.1:5000/analyze", formData);
      localStorage.setItem("results", JSON.stringify(response.data));
      navigate("/results");
    } catch (error) {
      alert("Something went wrong during analysis.");
      console.error(error);
    }
  };

  return (
    <div className="home-container">
      <div className="home-box">
        <h1 className="home-title">📄 Hire Ready</h1>
        <h2 className='home-subtitle'>Your Placement Assistant</h2>
        <p className="home-subtitle">Upload your resume and get AI-powered insights for your dream job!</p>

        <input
          type="file"
          accept="application/pdf"
          onChange={e => setFile(e.target.files[0])}
          className="home-input"
        />

        <input
          type="text"
          placeholder="Enter Target Role (e.g., Data Analyst)"
          value={role}
          onChange={e => setRole(e.target.value)}
          className="home-input"
        />

        <button onClick={handleUpload} className="home-button">
          🚀 Analyze Resume
        </button>
      </div>
    </div>
  );
}