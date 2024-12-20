import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const JobDetails = () => {
  const { Jobid } = useParams();
  const navigate = useNavigate();

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating / 20); // full stars (out of 5)
    const halfStar = rating % 20 >= 10 ? 1 : 0; // half star if rating is >= 10
    const emptyStars = 5 - fullStars - halfStar; // empty stars

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} size={35} className="text-yellow-400" />
        ))}
        {halfStar === 1 && <FaStarHalfAlt size={35} className="text-yellow-400" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} size={35} className="text-yellow-400" />
        ))}
      </div>
    );
  };

  const interviewer = {
    name: "Saumya",
    mail: "saumya@gmail.com",
  };

  const job = {
    name: "Product manager",
  };

  const resumeMatchData = [
    { criteria: "Below 40%", value: 30 },
    { criteria: "40-60%", value: 53 },
    { criteria: "60-80%", value: 71 },
    { criteria: "Above 80%", value: 89 },
  ];

  const timeTaken = [
    { process: "Sourcing (Job creation, Job posting, Resume fetching)", value: "2" },
    { process: "Pre-screening", value: "3" },
    { process: "Candidate selection", value: "3" },
  ];

  const candidateSatisfaction = { value: 79 };

  const candidateData = [
    {
      candidate: "John",
      questionsAttempted: 5,
      questionsAnswered: 4,
      score: 75
    },
    {
      candidate: "Vivek",
      questionsAttempted: 5,
      questionsAnswered: 2,
      score: 30
    },
  ];

  const resumePieData = {
    labels: resumeMatchData.map((item) => item.criteria),
    datasets: [
      {
        label: "Resume Match",
        data: resumeMatchData.map((item) => item.value),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
      },
    ],
  };

  // Data for Time Taken Pie Chart
  const timePieData = {
    labels: timeTaken.map((item) => item.process),
    datasets: [
      {
        label: "Time Taken (in days)",
        data: timeTaken.map((item) => item.value),
        backgroundColor: ["#F44336", "#2196F3", "#FFC107"],
        hoverBackgroundColor: ["#E53935", "#1E88E5", "#FFB300"],
      },
    ],
  };

  return (
    <div className="w-[80%] ml-64 my-20">
      {/* Top Section */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <div className="flex flex-col md:flex-row gap-6">

          <div className="flex-1">
            <h4 className="text-lg font-medium">Job Description:</h4>
            <p className="text-gray-700">{job.name}</p>
          </div>

          <div className="flex-1">
            <h4 className="text-lg font-medium">Interviewer:</h4>
            <p className="text-gray-700">{interviewer.name}</p>
            <p className="text-gray-500">{interviewer.mail}</p>
          </div>
        </div>
      </div>


      {/* Pie Charts Section */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Resume Match Data */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="text-xl font-medium mb-4">Resume Match Data</h4>
          <div className="flex justify-center items-center">
            <div style={{ width: "350px", height: "350px" }}>
              <Pie data={resumePieData} />
            </div>
          </div>
        </div>

        {/* Time Taken Distribution */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="text-xl font-medium mb-4">Time Taken Distribution</h4>
          <div className="flex justify-center items-center">
            <div style={{ width: "350px", height: "350px" }}>
              <Pie data={timePieData} />
            </div>
          </div>
        </div>
      </div>

      {/* Candidate Satisfaction Section */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h4 className="text-xl font-medium">Candidate Satisfaction</h4>
        <div className="mt-4 flex items-center justify-center">
            {renderStars(candidateSatisfaction.value)}
          <span className="ml-4 text-teal-600 font-bold">{candidateSatisfaction.value}%</span>
        </div>
      </div>

      {/* Candidate Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h4 className="text-xl font-medium mb-4">Candidates</h4>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-600">
              <th className="p-3 text-center font-semibold">Candidate</th>
              <th className="p-3 text-center font-semibold">Questions Attempted</th>
              <th className="p-3 text-center font-semibold">Questions Answered</th>
              <th className="p-3 text-center font-semibold">Score</th>
            </tr>
          </thead>
          <tbody>
            {candidateData.length > 0 ? (
              candidateData.map((candidate, index) => (
                <tr
                  key={index}
                  className="cursor-pointer hover:bg-gray-100 border-b"
                  onClick={() => navigate(`/candidate/${candidate.id}`)}
                >
                  <td className="p-3">
                    <div className="flex items-center justify-center h-full">{candidate.candidate}</div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center justify-center h-full">{candidate.questionsAttempted}</div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center justify-center h-full">{candidate.questionsAnswered}</div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center justify-center h-full">{candidate.score}</div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-3 text-gray-500 text-center" colSpan={4}>
                  No candidates available.
                </td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default JobDetails;
