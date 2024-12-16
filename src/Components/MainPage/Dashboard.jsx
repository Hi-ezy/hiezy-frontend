import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2 className="sidebar-title">Heizy</h2>
        <ul className="sidebar-menu">
          <li className="sidebar-item active">Dashboard</li>
          <li onClick={() => window.location.href = '/MainPage/Jobs'} className="sidebar-item">Jobs</li>
        </ul>
      </div>

      <div className="main-content">
        <div className="dashboard-overview">
          <h3>Dashboard Overview</h3>
          <p>Welcome back! Here's what's happening today.</p>
          <div className="stats">
            <div className="stat-item">
              <p>Total Applications</p>
              <h2>156</h2>
            </div>
            <div className="stat-item">
              <p>Shortlisted</p>
              <h2>43</h2>
            </div>
            <div className="stat-item">
              <p>Interviews Completed</p>
              <h2>28</h2>
            </div>
            <div className="stat-item">
              <p>On Hold</p>
              <h2>12</h2>
            </div>
          </div>
        </div>

        <div className="hiring-pipeline">
          <h4>Current Hiring Pipeline</h4>
          <table>
            <thead>
              <tr>
                <th>Role</th>
                <th>Department</th>
                <th>Applications</th>
                <th>Interviewed</th>
                <th>Shortlisted</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Senior Frontend Developer</td>
                <td>Engineering</td>
                <td>45</td>
                <td>12</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Product Manager</td>
                <td>Product</td>
                <td>38</td>
                <td>8</td>
                <td>3</td>
              </tr>
              <tr>
                <td>UX Designer</td>
                <td>Design</td>
                <td>32</td>
                <td>10</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Backend Engineer</td>
                <td>Engineering</td>
                <td>41</td>
                <td>15</td>
                <td>6</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="recent-applications">
          <h4>Recent Applications</h4>
          <table>
            <thead>
              <tr>
                <th>Candidate</th>
                <th>Position</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sarah Johnson</td>
                <td>Senior Frontend Developer</td>
                <td className="status shortlisted">Shortlisted</td>
                <td>2024-03-15</td>
              </tr>
              <tr>
                <td>Michael Chen</td>
                <td>Product Manager</td>
                <td className="status interview">Interview Scheduled</td>
                <td>2024-03-14</td>
              </tr>
              <tr>
                <td>Emily Davis</td>
                <td>UX Designer</td>
                <td className="status on-hold">On Hold</td>
                <td>2024-03-13</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
