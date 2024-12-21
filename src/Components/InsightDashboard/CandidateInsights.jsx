import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import './InsightDashboard.css';

const CandidateInsights = () => {
  const { candidateId } = useParams();
  const navigate = useNavigate();
  const [candidateData, setCandidateData] = useState(null);
  const [interviewData, setInterviewData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch candidate details
        const candidateResponse = await fetch(
          `${process.env.REACT_APP_BASE_URL}/app/candidatedata/byid?id=${candidateId}`
        );
        const candidateResult = await candidateResponse.json();

        // Fetch interview details
        const interviewResponse = await fetch(
          `${process.env.REACT_APP_BASE_URL}/app/interview/getscore?candidateId=${candidateId}`
        );
        const interviewResult = await interviewResponse.json();
        setInterviewData(interviewResult.response);
    
        setCandidateData(candidateResult.response);
       
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [candidateId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#30d5c7]"></div>
      </div>
    );
  }

  const matrixScores = [
    { name: 'Technical Skills', score: interviewData.interview_matrix1_score || 0 },
    { name: 'Communication', score: interviewData.interview_matrix2_score || 0 },
    { name: 'Problem Solving', score: interviewData.interview_matrix3_score || 0 },
    { name: 'Cultural Fit', score: interviewData.interview_matrix4_score || 0 },
    { name: 'Experience Match', score: interviewData.interview_matrix5_score || 0 },
  ];

  const getRelevancyClass = (relevancy) => {
    switch (relevancy) {
      case 'High': return 'status-high';
      case 'Medium': return 'status-medium';
      case 'Low': return 'status-low';
      default: return 'status-low';
    }
  };
  console.log(candidateData);
  console.log(interviewData);

  return (
    <div className="p-8 pmin-h-screen bg-gray-50">
      <div className="w-full max-w-7xl">
        {/* Candidate Overview */}
        <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
          <h1 className="mb-4 text-2xl font-bold uppercase">{candidateData.name}</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <p className="text-gray-600">Email</p>
              <p className="font-medium">{candidateData.email}</p>
            </div>
            <div>
              <p className="text-gray-600">Overall Score</p>
              <p className="font-medium">{interviewData.interview_score}</p>
            </div>
            <div>
              <p className="text-gray-600">Relevency</p>
              <span className={`status-badge ${getRelevancyClass(interviewData.relevency)}`}>
                {interviewData.Candidate_relevency}
              </span>
            </div>
          </div>
        </div>

        {/* Interview Matrix Scores */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Interview Performance Matrix</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {matrixScores.map((matrix, index) => (
              <div key={index} className="matrix-card">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{matrix.name}</h3>
                  <span className="text-lg font-semibold">{matrix.score}%</span>
                </div>
                <div className="score-indicator">
                  <div 
                    className="score-fill" 
                    style={{ width: `${matrix.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Score Visualization */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-xl font-semibold">Performance Overview</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={matrixScores}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="score" fill="#30d5c7" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateInsights; 