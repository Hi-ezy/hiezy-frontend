import React, { useState, useEffect } from 'react';
import './CareerPage.css';
import { useNavigate, useParams } from 'react-router-dom';

const CareerPage = () => {

  const [jobs, setJobs] = useState([Array]);


  const navigate = useNavigate();
  
    useEffect(() => {
      const fetchJobs = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_BASE_URL}/app/jobs/getalljobs`); // Replace with your API endpoint
          if (!response.ok) {
            throw new Error('Failed to fetch jobs');
          }
          const data = await response.json();
          console.log('Jobs fetched:', data);
          setJobs(data.response)
          console.log('Jobs:', jobs);
        } catch (err) {
          console.error(err);
        }
      };
      fetchJobs();
    }, []);

  return (
    <div className="career-page-container">
      <button onClick={() => navigate(-1)} className="back-btn">Back</button>
      <div className="job-listing-section">
        <h2>Current Job Openings</h2>
        <div className="job-listings">
          {jobs.map((job) => (
            <div key={job._id} className="job-card">
              <h2>Company : {job.company}</h2>
              <h3>Job Title{job.jobTitle}</h3>
              <p>Job Location : {job.location}</p>
              <p>Experience Required : {job.experience}</p>
              <p>Skills Required : {job.skills}</p>
              <button onClick={() => {
                 navigate(`/resume-submit/${job._id}`);}} className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
