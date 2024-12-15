import React from 'react';
import './JobDetails.css';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { Jobid } = useParams();
  console.log(Jobid);
  const candidateData = [
    {
      candidate: 'John Smith',
      questionsAttempted: 25,
      questionsAnswered: 23,
      score: '88%',
      relevance: '92%',
    },
  ];

  return (
    <div className="job-details-container">
      <div className="sidebar">
        <h2 className="sidebar-title">Hiezy</h2>
        <ul className="sidebar-menu">
          <li onClick={() => window.location.href = '/MainPage/Dashboard'}className="sidebar-item">Dashboard</li>
          <li onClick={() => window.location.href = '/MainPage/Jobs '}className="sidebar-item active">Jobs</li>
        </ul>
      </div>

      <div className="main-content">
        <div className="job-header">
          <h3>Senior Frontend Developer</h3>
          <p>Engineering</p>
        </div>

        <div className="dashboard-grid">
          <div className="card">
            <h4>Resume Relevance Distribution</h4>
            <div className="chart-placeholder">
              {/* Placeholder for a chart component */}
              <div className="circle-chart"></div>
            </div>
          </div>

          <div className="card">
            <h4>Category Performance</h4>
            <div className="chart-placeholder">
              {/* Placeholder for a chart component */}
              <div className="target-chart"></div>
            </div>
          </div>

          <div className="card full-width">
            <h4>Average Time to Hire</h4>
            <div className="time-to-hire">
              <h5>75</h5>
              <p>days</p>
            </div>
          </div>

          <div className="card full-width">
            <h4>Candidate Performance</h4>
            <table className="candidate-table">
              <thead>
                <tr>
                  <th>Candidate</th>
                  <th>Questions Attempted</th>
                  <th>Questions Answered</th>
                  <th>Score</th>
                  <th>Relevance</th>
                </tr>
              </thead>
              <tbody>
                {candidateData.map((candidate, index) => (
                  <tr key={index}>
                    <td>{candidate.candidate}</td>
                    <td>{candidate.questionsAttempted}</td>
                    <td>{candidate.questionsAnswered}</td>
                    <td><span className="score-badge">{candidate.score}</span></td>
                    <td><span className="relevance-badge">{candidate.relevance}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
