import React, { useState, useEffect } from 'react';
import './CareerPage.css';

const CareerPage = () => {
    
  // Mock data for jobs
  const [jobs, setJobs] = useState([
    { jobid: 1001, title: 'Senior Frontend Developer', location: 'Remote', type: 'Full-time' },
    { jobid: 1002, title: 'Backend Engineer', location: 'Remote', type: 'Full-time' },
    { jobid: 10033, title: 'Product Manager', location: 'New York, NY', type: 'Full-time' },
    { jobid: 1004, title: 'UX Designer', location: 'San Francisco, CA', type: 'Full-time' },
  ]);

  return (
    <div className="career-page-container">
      <div className="job-listing-section">
        <h2>Current Job Openings</h2>
        <div className="job-listings">
          {jobs.map((job) => (
            <div key={job.jobid} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.location}</p>
              <p>{job.type}</p>
              <button onClick={() => {
                 window.location.href = `/resume-submit/:${job.jobid}`;}} className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
