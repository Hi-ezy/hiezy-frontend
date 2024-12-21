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
  const [candidateData, setCandidateData] = useState([Array]);
  const [resumeMatchData, setResumeMatchData] = useState([]);
  const [statusData,setStatusData] = useState([]);

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

   useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/app/candidatedata/byjob?jobID=${indexid}`);
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
  }, []);

  useEffect(() => {
    if (candidateData.length > 0) {
      const matchData = getResumeMatchData(candidateData);
      setResumeMatchData(matchData);
      const statusData = getCandidateStatusData(candidateData);
      setStatusData(statusData);
    }
  }, [candidateData]);

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


  const getResumeMatchData = (candidateData) => {
    const scoreRanges = {
      "Below 30%": 0,
      "30-55%": 0,
      "55-80%": 0,
      "Above 80%": 0
    };

    candidateData.forEach(candidate => {
      const score = candidate.resume_score;
      if (score < 30) {
        scoreRanges["Below 30%"]++;
      } else if (score >= 30 && score < 55) {
        scoreRanges["30-55%"]++;
      } else if (score >= 55 && score < 80) {
        scoreRanges["55-80%"]++;
      } else {
        scoreRanges["Above 80%"]++;
      }
    });

    return Object.entries(scoreRanges).map(([criteria, value]) => ({
      criteria,
      value
    }));
  };


  
 /*will comment once the candidate data is fetched from the backend*/

  const resumePieData = {
    labels: getResumeMatchData(candidateData).map((item) => item.criteria),
    datasets: [
      {
        label: "Resume Match",
        data: getResumeMatchData(candidateData).map((item) => item.value),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
      },
    ],
  };

  const getCandidateStatusData = (candidateData) => {
    const statusCounts = {
      "Applied": 0,
      "Shortlisted": 0,
      "Interviewed": 0,
      "Hired": 0,
      "Rejected": 0
    };
  
    candidateData.forEach(candidate => {
      const status = candidate.candidate_status;
      if (status in statusCounts) {
        statusCounts[status]++;
      }
    });
  
    return Object.entries(statusCounts).map(([status, count]) => ({
      process: status,
      value: count
    }));
  };

const timePieData = {
  labels: statusData.map((item) => item.process),
  datasets: [
    {
      label: "Candidate Status",
      data: statusData.map((item) => item.value),
      backgroundColor: [
        "#4CAF50", // Applied - Green
        "#2196F3", // Shortlisted - Blue
        "#FFC107", // Interviewed - Yellow
        "#9C27B0", // Hired - Purple
        "#F44336"  // Rejected - Red
      ],
      hoverBackgroundColor: [
        "#43A047",
        "#1E88E5",
        "#FFB300",
        "#8E24AA",
        "#E53935"
      ],
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
          <h4 className="mb-4 text-xl font-medium">Candidate Status Distribution</h4>
          <div className="flex items-center justify-center">
            <div style={{ width: "350px", height: "350px" }}>
              <Pie data={timePieData} />
            </div>
          </div>
        </div>
      </div>

      {/* Candidate Table */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h4 className="mb-4 text-xl font-medium">Candidates List</h4>
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="text-gray-600 bg-gray-200">
              <th className="p-3 font-semibold text-center">Candidate Name</th>
              <th className="p-3 font-semibold text-center">Email </th>
              <th className="p-3 font-semibold text-center">Resume Score</th>
              <th className="p-3 font-semibold text-center">Interview Status</th>
              <th className="p-3 font-semibold text-center">Candidate Status</th>

            </tr>
          </thead>
          <tbody>
            {candidateData.length > 0 ? (
              candidateData.map((candidate, index) => (
                <tr
                  key={index}
                  className="border-b cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    if(candidate.interview_status === 'Completed') {
                      navigate(`/employer/candidate/${candidate._id}`);
                    }
                  }}
                >
                  <td className="p-3">
                    <div className="flex items-center justify-center h-full">{candidate.name}</div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center justify-center h-full">{candidate.email}</div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center justify-center h-full">{candidate.resume_score}</div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center justify-center h-full">{candidate.interview_status}</div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center justify-center h-full">{candidate.candidate_status}</div>
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
