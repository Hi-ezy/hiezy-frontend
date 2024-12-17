import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const JobDetails = () => {
  const { Jobid } = useParams();
  const navigate = useNavigate();

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
  
      <div className="flex-1 ">
        {/* Topbar */}
        

        {/* Back Button */}
        {/* <button
          className="absolute top-16 left-4 px-4 py-2 bg-white border border-gray-300 text-gray-800 rounded-full shadow hover:bg-gray-50 z-10"
          onClick={() => navigate(-1)}
        >
          Back
        </button> */}

        <div className="p-8 mt-8 bg-gray-100">
          {/* Header */}
          <div className="mb-6">
            <h3 className="text-3xl font-semibold">Senior Frontend Developer</h3>
            <p className="text-gray-500">Engineering</p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-2 gap-6">
            {/* Resume Relevance Card */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-medium mb-4">Resume Relevance Distribution</h4>
              <div className="flex justify-center items-center h-40">
                <div className="w-32 h-32 rounded-full bg-gradient-to-t from-blue-200 to-blue-500"></div>
              </div>
            </div>

            {/* Category Performance Card */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-medium mb-4">Category Performance</h4>
              <div className="flex justify-center items-center h-40">
                <div className="w-24 h-24 rounded-full bg-gray-800"></div>
              </div>
            </div>

            {/* Average Time to Hire Card */}
            <div className="bg-white p-6 rounded-lg shadow col-span-2 flex justify-center items-center">
              <h4 className="text-xl font-medium mr-4">Average Time to Hire:</h4>
              <div className="flex items-center">
                <span className="text-5xl text-indigo-600 font-bold">75</span>
                <span className="ml-2 text-gray-600 text-lg">days</span>
              </div>
            </div>

            {/* Candidate Performance Table */}
            <div className="bg-white p-6 rounded-lg shadow col-span-2">
              <h4 className="text-xl font-medium mb-4">Candidate Performance</h4>
              <table className="w-full table-auto">
                <thead>
                  <tr className="text-left text-gray-600 bg-gray-50">
                    <th className="p-3">Candidate</th>
                    <th className="p-3">Questions Attempted</th>
                    <th className="p-3">Questions Answered</th>
                    <th className="p-3">Score</th>
                    <th className="p-3">Relevance</th>
                  </tr>
                </thead>
                <tbody>
                  {candidateData.map((candidate, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-3">{candidate.candidate}</td>
                      <td className="p-3">{candidate.questionsAttempted}</td>
                      <td className="p-3">{candidate.questionsAnswered}</td>
                      <td className="p-3">
                        <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                          {candidate.score}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                          {candidate.relevance}
                        </span>
                      </td>
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
