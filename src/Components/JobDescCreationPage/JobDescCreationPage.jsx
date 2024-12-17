import React from 'react';
import { useNavigate } from 'react-router-dom';
export const JobDescCreationPage = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col md:flex-row h-screen font-sans">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white border-b border-gray-200 shadow-md z-10">
        <div className="flex items-center">
          <img src="/assets/HiezyLogo1.png" alt="Hiezy Logo" className="h-8" />
        </div>
        <div className="flex items-center">
          <div className="w-9 h-9 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold cursor-pointer">
            D
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 my-auto mx-2 pt-14">
        {/* Chat Section */}
        <div className="flex flex-col w-full md:w-1/2 bg-white p-6">
          <div className="mb-4 flex flex-col md:flex-row gap-4">
            <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full shadow">
              Creating Job Description
            </button>
            <button
              className="px-4 py-2 bg-white border border-gray-300 text-gray-800 rounded-full shadow"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>

          <div className="flex flex-col gap-6 flex-grow overflow-y-auto">
            <div className="p-4 bg-gray-100 rounded-lg">
              <p>Here we are again, what are we chatting about today? Ask me literally anything related to Job Descriptions.</p>
            </div>
            <div className="p-4 bg-teal-400 text-white rounded-lg self-end">
              <p>Create Job Description</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <p>
                Alright, let’s get this Job Description started! Where are we thinking of hiring for? Give me a job title,
                and we’ll make some magic happen!
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">AI PM</button>
              <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">Growth PM</button>
              <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">APM</button>
              <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">Data PM</button>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask anything..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <button className="p-2 bg-teal-400 text-white rounded-full hover:bg-teal-500">➤</button>
            </div>
            <button
              className="mt-4 px-6 py-2 bg-teal-400 text-white rounded-full shadow hover:bg-teal-500"
              onClick={() => (window.location.href = '/MainPage')}
            >
              Publish Job Description
            </button>
          </div>
        </div>

        {/* Promo Section */}
        <div
          className="hidden md:flex w-1/2  bg-cover bg-center items-center justify-center text-center text-white"
          style={{ backgroundImage: "url('../assets/women_hr.jpg')" }}
        >
          <div className="bg-black bg-opacity-50 p-6 rounded-lg">
            <h1 className="text-4xl font-bold mb-2">YOUR HIRING AI PARTNER</h1>
            <p className="text-lg">Got a hiring position open? Start here by asking me anything about it.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescCreationPage;
