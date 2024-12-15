import React, { useState, useEffect } from 'react';
import './CareerPage.css';
import { useParams } from 'react-router-dom';

export const ResumeSubmit = () => {
    const { Jobid } = useParams();

   // State for the uploaded resumes
   const [resumes, setResumes] = useState([]);

   // Function to handle resume upload
   const handleResumeUpload = (event) => {
     const newResume = event.target.files[0];
     if (newResume) {
       setResumes([...resumes, { name: newResume.name, date: new Date().toLocaleDateString() }]);
     }
   };
 
   // Fetch resumes - Placeholder for fetching data from an API
   useEffect(() => {
     // Placeholder API call for fetching resumes
     // setResumes(fetchResumesFromAPI());
   }, []);

  return (
    <div className="career-page-container">
        <h2>ResumeSubmit</h2>
        <div className="resume-upload-section">
        <h2>Submit Your Resume</h2>
        <input type="file" onChange={handleResumeUpload} className="upload-input" />
        <div className="resume-list">
          <h4>Uploaded Resumes:</h4>
          {resumes.length > 0 ? (
            <ul>
              {resumes.map((resume, index) => (
                <li key={index}>
                  {resume.name} - <span>{resume.date}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No resumes uploaded yet.</p>
          )}
        </div>
      </div>
        
    
    </div>


  )
};

export default ResumeSubmit
