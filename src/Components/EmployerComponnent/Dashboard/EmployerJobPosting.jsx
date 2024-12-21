import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import findJobsbyCompany from './EmployerDashboard';
import useGetallJobs from '../employer-data-fetch/job-fetch';
const Jobs = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([Array]);

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

  const handleCreateJob = () => {
    navigate('/employer/jdcreation');
  };

  return (
    <div className="flex w-full mt-16">
      <div className="w-[85%] mx-auto p-8 mt-8 min-h-screen">
        <div className="flex items-center justify-between mb-6">
          <div className='mb-6'>
            <h3 className="mb-1 text-left font-semibold text-2xl">Open Positions</h3>
            <p className="text-[#6B7280]">Manage and track all your job postings</p>
          </div>
          <button
            className="px-4 py-2 bg-[#30d5c7] text-white rounded-md hover:bg-[#22c2a7]"
            onClick={handleCreateJob}
          >
            Create New Job
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div key={job._id} className="p-6 bg-white rounded-lg shadow">
              <div className="flex text-left justify-between mb-4">
                <div>
                  <h4 className="text-lg font-medium">{job.jobTitle}</h4>
                  <p className="text-sm text-[#6B7280]">
                      {job.location}
                  </p>
                </div>
                <span className="bg-[#D1FAE5] text-[#10B981] flex items-center justify-center px-3 py-1 rounded-full text-xs">
                  open
                </span>
              </div>
              <div className="flex justify-between mb-4">
                <div className="text-center">
                  <p className="text-xs text-[#6B7280]">Resumes</p>
                  <h5 className="text-lg">{job.resumes}</h5>
                </div>
                <div className="text-center">
                  <p className="text-xs text-[#6B7280]">Interviews</p>
                  <h5 className="text-lg">{job.interviews}</h5>
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  className="bg-[#30d5c7] text-white px-4 py-2 rounded hover:bg-[#4F46E5]"
                  onClick={() => navigate(`/employer/job-details/${job._id}`)}
                >
                  View Job
                </button>
                <button className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300">
                  Unpublish
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
