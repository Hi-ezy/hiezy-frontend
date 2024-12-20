import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Pie } from "react-chartjs-2";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const JobDetails = () => {
  const { indexid } = useParams();
  console.log('index_id:', indexid);
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  /*const [candidateData, setCandidateData] = useState([Array]);*/

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/app/jobs/getJobbyid?id=${indexid}`);
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        console.log('Jobs fetched:', data.response);
        setJobs(data.response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchJobs();
  }, []);

  /* useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/app/candidate/getallcandidate`);
        if (!response.ok) {
          throw new Error('Failed to fetch candidate');
        }
        const data = await response.json();
        console.log('Jobs fetched:', data.response);
        setCandidateData(data.response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCandidate();
  }, []);*/

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
  
 /*will comment once the candidate data is fetched from the backend*/
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
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <div className="flex flex-col gap-6 md:flex-row">
        {jobs.map((job) => (
            <div key={job._id}>
            <div className="flex-1">

              
              <h4 className="text-lg font-large">{job.jobTitle}</h4>
            </div>
          </div>
        ))}
        </div>
      </div>


      {/* Pie Charts Section */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Resume Match Data */}
        <div className="p-6 bg-white rounded-lg shadow">
          <h4 className="mb-4 text-xl font-medium">Resume Match Data</h4>
          <div className="flex items-center justify-center">
            <div style={{ width: "350px", height: "350px" }}>
              <Pie data={resumePieData} />
            </div>
          </div>
        </div>

        {/* Time Taken Distribution */}
        <div className="p-6 bg-white rounded-lg shadow">
          <h4 className="mb-4 text-xl font-medium">Time Taken Distribution</h4>
          <div className="flex items-center justify-center">
            <div style={{ width: "350px", height: "350px" }}>
              <Pie data={timePieData} />
            </div>
          </div>
        </div>
      </div>

      {/* Candidate Satisfaction Section */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h4 className="text-xl font-medium">Candidate Satisfaction</h4>
        <div className="flex items-center justify-center mt-4">
            {renderStars(candidateSatisfaction.value)}
          <span className="ml-4 font-bold text-teal-600">{candidateSatisfaction.value}%</span>
        </div>
      </div>

      {/* Candidate Table */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h4 className="mb-4 text-xl font-medium">Candidates</h4>
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="text-gray-600 bg-gray-200">
              <th className="p-3 font-semibold text-center">Candidate</th>
              <th className="p-3 font-semibold text-center">Questions Attempted</th>
              <th className="p-3 font-semibold text-center">Questions Answered</th>
              <th className="p-3 font-semibold text-center">Score</th>
            </tr>
          </thead>
          <tbody>
            {candidateData.length > 0 ? (
              candidateData.map((candidate, index) => (
                <tr
                  key={index}
                  className="border-b cursor-pointer hover:bg-gray-100"
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
                <td className="p-3 text-center text-gray-500" colSpan={4}>
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
