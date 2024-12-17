import React from 'react';
import { useNavigate } from 'react-router-dom';

const Jobs = () => {
  const navigate = useNavigate();
  const jobs = [
    { jobid: 1001, title: 'Senior Frontend Developer', department: 'Engineering', location: 'Remote', resumes: 45, interviews: 12, status: 'Full-time' },
    { jobid: 1002, title: 'Product Manager', department: 'Product', location: 'New York, NY', resumes: 38, interviews: 8, status: 'Full-time' },
    { jobid: 1003, title: 'UX Designer', department: 'Design', location: 'San Francisco, CA', resumes: 32, interviews: 10, status: 'Full-time' },
    { jobid: 1004, title: 'Backend Engineer', department: 'Engineering', location: 'Remote', resumes: 41, interviews: 15, status: 'Full-time' },
  ];

  const handleCreateJob = () => {
    navigate('/jdcreation');
  };

  return (
    <div className="flex w-full mt-16">
    
      <div className="ml-[250px] p-8 w-full bg-[#f0f0f0] min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-2xl mb-1">Open Positions</h3>
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
            <div key={job.jobid} className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold">{job.title}</h4>
                  <p className="text-sm text-[#6B7280]">{job.department} • {job.location}</p>
                </div>
                <span className="bg-[#D1FAE5] text-[#10B981] px-3 py-1 rounded-full text-xs">{job.status}</span>
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
                  className="bg-[#6366F1] text-white px-4 py-2 rounded hover:bg-[#4F46E5]"
                  onClick={() => navigate(`/employer/job-details/${job.jobid}`)}
                >
                  View Job
                </button>
                <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded hover:bg-gray-300">
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
