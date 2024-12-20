import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useHandleResume from './resume';

const BASEURL = process.env.REACT_APP_BASE_URL;

export const ResumeSubmit = () => {
  const { handleResume } = useHandleResume();
  const { indexid } = useParams();
  console.log('index_id:', indexid);

  const [resume, setResume] = useState(null);
  const [keywords, setKeywords] = useState([]);
  const [keywordInput, setKeywordInput] = useState('');
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/app/jobs/getJobbyid?id=${indexid}`
        );
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
  }, []); // Only run once on component mount

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setResume(file);
    }
  };

  const handleAddKeyword = () => {
    if (keywordInput.trim()) {
      setKeywords([...keywords, keywordInput.trim()]);
      setKeywordInput('');
    }
  };

  const handleKeywordInputChange = (event) => {
    setKeywordInput(event.target.value);
  };

  const handleShareResume = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    const formData = new FormData();
    formData.append('resume', resume);
    formData.append('jobId', indexid);
    formData.append('name', candidateName);
    formData.append('email', candidateEmail);

    console.log('Candidate Details being sent to the backend:', {
      jobId: indexid,
      name: candidateName,
      email: candidateEmail,
    });

    try {
      const handleUserResume = await handleResume(formData);
      console.log(handleUserResume);
    } catch (error) {
      console.error('Error uploading resume:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className=" w-52 flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
          <p className="mt-4 text-lg text-gray-700">Uploading your resume, please wait...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md font-sans">
      {jobs.map((job) => (
        <div key={job._id} className="space-y-4 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Company: {job.company}</h2>
          <h3 className="text-xl text-gray-700">Job Title: {job.jobTitle}</h3>
          <p className="text-gray-600">Job Location: {job.location}</p>
          <p className="text-gray-600">Experience Required: {job.experience}</p>
          <p className="text-gray-600">Skills Required: {job.skills}</p>
          <p className="text-gray-600">Job Description: {job.jobDescription}</p>
        </div>
      ))}

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
          onChange={(e) => setCandidateName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
          onChange={(e) => setCandidateEmail(e.target.value)}
        />
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upload your resume</h2>
      <div className="text-center mb-6">
        <input
          type="file"
          id="file-input"
          onChange={handleFileUpload}
          hidden
        />
        <label
          htmlFor="file-input"
          className="inline-block w-full p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer text-center hover:border-blue-500 transition-colors"
        >
          <span className="text-4xl mb-4">📤</span>
          <p className="font-bold">Drag your resume here or click to upload</p>
          <small className="block text-gray-500 mt-2">Acceptable file types: PDF, DOCX (5MB max)</small>
        </label>
      </div>

      {resume && <p className="text-gray-700 mt-2">Uploaded: {resume.name}</p>}

      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleShareResume}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Share Now
        </button>
      </div>
    </div>
  );
};

export default ResumeSubmit;
