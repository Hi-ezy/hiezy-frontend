import React, { useState, useEffect } from 'react';
import './ResumeSubmit.css';
import { useNavigate, useParams } from 'react-router-dom';

/*
export const ResumeSubmit = () => {
   
  
    const { indexid } = useParams();
    console.log('index_id:', indexid);
    //use the index_id coming in the page as param and save as Jobid

   // State for the uploaded resumes
   const [resumes, setResumes] = useState([]);
   const [jobs, setJobs] = useState([]);
  const [singleJob, setSingleJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/app/jobs/getalljobs`);
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        console.log('Jobs fetched:', data.response);
        setJobs(data.response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchJobs();
  }, []); // Only run once on component mount

  useEffect(() => {
    if (jobs.length > 0) {
      console.log('Looking for job with id:', indexid);
      console.log('Jobs:', jobs);
      const index = '6761db740cf6c066b602d09b';
      const foundJob = jobs.find((job) => job._id === index); //hardcoding it
      if (foundJob) {
        console.log('Single job found:', foundJob);
        setSingleJob(foundJob);
      } else {
        console.error('No job found with the given id:', indexid);
      }
    }
  }, [jobs, indexid]);
   
   // Function to handle resume upload
   const handleResumeUpload = (event) => {
     const newResume = event.target.files[0];
     if (newResume) {
       setResumes([...resumes, { name: newResume.name, date: new Date().toLocaleDateString() }]);
     }
   };
 
   // Fetch resumes - Placeholder for fetching data from an API


   

  

  return (
    <div className="career-page-container">
      <div className="job-listing-section">
      {singleJob ? (
            <div key={singleJob._id}>
                <h2>Company : {singleJob.company}</h2>
                <h3>Job Title : {singleJob.jobTitle}</h3>
                <p>Job Location : {singleJob.location}</p>
                <p>Experience Required : {singleJob.experience}</p>
                <p>Skills Required : {singleJob.skills}</p>
                <p>Job Description : {singleJob.jobDescription}</p>
            </div>
        ) : (
            <p>Job not found.</p>
        )}
        {singleJob ? (
            <div key={singleJob._id} className="resume-upload-section">
        <h2>ResumeSubmit</h2>
        <h2>Submit Your Resume</h2>
        <div><h3>Name</h3><input type="text" placeholder="Enter your name" required /></div>
        <div><h3>Email</h3><input type="email" placeholder="Enter your email" required /></div>
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
      ) : ( 
        <p>Please select a job.</p>)}
      </div>
    </div>


  )
};

export default ResumeSubmit
*/

export const ResumeSubmit = () => {
   
  
  const { indexid } = useParams();
  console.log('index_id:', indexid);

  const [resume, setResume] = useState(null);
  const [keywords, setKeywords] = useState([]);
  const [keywordInput, setKeywordInput] = useState('');

  const [jobs, setJobs] = useState([]);
  const [singleJob, setSingleJob] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/app/jobs/getJobbyid?id=${indexid}`);
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        console.log('Jobs fetched:', data.response);
        setJobs(data.response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchJobs();
  }, []); // Only run once on component mount

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setResume(file);
    }
  };

  const handleAddKeyword = () => {
    if (keywordInput.trim()) {
      setKeywords([...keywords, keywordInput.trim()]);
      setKeywordInput('');
    }
  };

  const handleKeywordInputChange = (event) => {
    setKeywordInput(event.target.value);
  };

  return (
    <div className="resume-upload-container">
     {jobs.map((job) => (
            <div key={job._id}>
                <h2>Company : {job.company}</h2>
                <h3>Job Title : {job.jobTitle}</h3>
                <p>Job Location : {job.location}</p>
                <p>Experience Required : {job.experience}</p>
                <p>Skills Required : {job.skills}</p>
                <p>Job Description : {job.jobDescription}</p>
            </div>
        ) )}
      <div className="name-section">Name<input type="text" placeholder="Enter your name" required /> </div>
      <div className="name-section">Email Id <input type="email" placeholder="Enter your email" required /></div>
      <h2>Upload your resume</h2>
      <div className="upload-section">ß
          <input type="file" id="file-input" onChange={handleFileUpload} hidden />
        <label htmlFor="file-input" className="upload-box">
          <span className="upload-icon">📤</span>
          <p>Drag your resume here or click to upload</p>
          <small>Acceptable file types: PDF, DOCX (5MB max)</small>
        </label>
      </div>

      {resume && <p className="uploaded-file-name">Uploaded: {resume.name}</p>}

      {/*<div className="keywords-section">
        <h3>Add Keywords to Highlight Your Skills</h3>
        <input
          type="text"
          placeholder="Type your tags here..."
          value={keywordInput}
          onChange={handleKeywordInputChange}
        />
        <button onClick={handleAddKeyword} className="add-keyword-btn">+ Add</button>

        <div className="keywords-list">
          {keywords.map((keyword, index) => (
            <span key={index} className="keyword-badge">+ {keyword}</span>
          ))}
        </div>
      </div>*/}

      <div className="action-buttons">
        <button onClick={() => navigate(-1)} className="save-btn">Back Button</button>
        <button className="share-btn">Share Now</button>
      </div>
    </div>
  );
};

export default ResumeSubmit;
