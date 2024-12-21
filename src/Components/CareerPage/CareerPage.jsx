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
      <nav className="fixed z-40 w-full shadow-lg bg-[#ffffffbc] backdrop-blur-sm py-2">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative ">
            {/* Left Section */}
            <div onClick={() => navigate('./')} className="flex cursor-pointer my-1 items-center justify-start">
              <img className="h-12" src="/assets/HiezyLogo1.png" alt="Hiezy" />
              <h2 className="text-2xl mx-4 pt-5 text-[#30d5c7] font-semibold">HiEzy</h2>
            </div>

            {/* Right Section */}
            <div className='z-50'>
              <button
                onClick={() => navigate(-1)}
                className="bg-teal-500 border px-6 py-1 border-gray-300 text-lg text-white rounded-full cursor-pointer hover:bg-indigo-600"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative p-20 flex flex-col items-center bg-gray-50">
        <div className="w-full max-w-7xl my-10">
          {jobs.map((job) => (
            <div key={job._id} className="bg-white p-5 rounded-lg shadow-lg flex justify-between w-full transition-transform transform hover:translate-y-[-5px]">
              <div className='text-left'>
                <h3 className="text-lg text-gray-900">{job.jobTitle}</h3>
                <h3 className="text-gray-600 text-sm">{job.experience} work experience</h3>
              </div>
              {/* <h3 className="text-gray-900 text-sm">{job.company}</h3> */}
              {/* <p className="text-gray-600 text-base mb-1">Job Location: {job.location}</p>
                <p className="text-gray-600 text-base mb-1">Skills Required: {job.skills}</p> */}
              <button
                onClick={() => navigate(`/resume-submit/${job._id}`)}
                className="border-2 border-[#30d5c7] text-[#30d5c7] py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200 hover:border-white"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CareerPage;
