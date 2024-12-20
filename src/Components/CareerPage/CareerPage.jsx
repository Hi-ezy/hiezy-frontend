import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from "../EmployerComponnent/UIComponennt/TopBar"

const CareerPage = () => {
  const [jobs, setJobs] = useState([Array]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/app/jobs/getalljobs`);
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        console.log('Jobs fetched:', data);
        setJobs(data.response);
        console.log('Jobs:', jobs);
      } catch (err) {
        console.error(err);
      }
    };
    fetchJobs();
  }, []);

  return (
    <>
      <nav className="fixed z-40 w-full shadow-sm bg-white/90 backdrop-blur-sm">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative">
            {/* Left Section */}
            <div className="flex items-center justify-start">
              <img className="h-12" src="/assets/HiezyLogo1.png" alt="Hiezy" />
              <h2 className="text-2xl mx-2 my-4 text-[#30d5c7] font-extrabold">Hi-Ezy</h2>
            </div>

            {/* Center Title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-gray-900 my-4 font-bold">Current Job Openings</h2>
            </div>

            {/* Right Section */}
            <div className='z-50'>
              <button
                onClick={() => navigate(-1)}
                className="bg-teal-500 border px-4 border-gray-300 text-xl text-white rounded-lg cursor-pointer hover:bg-blue-500"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative p-20 flex flex-col items-center bg-gray-50">
        <div className="w-full max-w-7xl my-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {jobs.map((job) => (
              <div key={job._id} className="bg-white p-5 rounded-lg shadow-lg transition-transform transform hover:translate-y-[-5px]">
                <h2 className="text-gray-900 text-xl mb-2">Company: {job.company}</h2>
                <h3 className="text-lg text-gray-900 mb-2">Job Title: {job.jobTitle}</h3>
                <p className="text-gray-600 text-base mb-1">Job Location: {job.location}</p>
                <p className="text-gray-600 text-base mb-1">Experience Required: {job.experience}</p>
                <p className="text-gray-600 text-base mb-1">Skills Required: {job.skills}</p>
                <button
                  onClick={() => navigate(`/resume-submit/${job._id}`)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-blue-600"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerPage;
