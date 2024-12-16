import React from 'react';
import './Jobs.css';

const Jobs = () => {
  const jobs = [
    {
      jobid : 1001,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      resumes: 45,
      interviews: 12,
      status: 'Full-time',
    },
    {
      jobid : 1002,
      title: 'Product Manager',
      department: 'Product',
      location: 'New York, NY',
      resumes: 38,
      interviews: 8,
      status: 'Full-time',
    },
    {
      jobid : 1003,
      title: 'UX Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      resumes: 32,
      interviews: 10,
      status: 'Full-time',
    },
    {
      jobid : 1004,
      title: 'Backend Engineer',
      department: 'Engineering',
      location: 'Remote',
      resumes: 41,
      interviews: 15,
      status: 'Full-time',
    },
  ];

  return (
    <div className="job-list-container">
      <div className="sidebar">
        <h2 className="sidebar-title">Hiezy</h2>
        <ul className="sidebar-menu">
          <li onClick={() => window.location.href = '/MainPage/Dashboard'} className="sidebar-item">Dashboard</li>
          <li className="sidebar-item active">Jobs</li>
        </ul>
      </div>

      <div className="main-content">
        <div className="header">
          <h3>Open Positions</h3>
          <p>Manage and track all your job postings</p>
        </div>

        <div className="job-cards">
          {jobs.map((job, index) => (
            <div key={index} className="job-card">
              <div className="job-info">
                <h4>{job.title}</h4>
                <p>{job.department} • {job.location}</p>
                <span className="badge">{job.status}</span>
              </div>
              <div className="job-stats">
                <div className="stat">
                  <p>Resumes</p>
                  <h5>{job.resumes}</h5>
                </div>
                <div className="stat">
                  <p>Interviews</p>
                  <h5>{job.interviews}</h5>
                </div>
              </div>
              <div className="job-actions">
               <button onClick={() => {
                 window.location.href = `/MainPage/JobDetails/${job.jobid}`;}} className="view-job">View Job</button>
                <button className="unpublish">Unpublish</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
