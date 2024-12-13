import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import useCandidateValidate from "./validateCandidate";
const ValidateCandidate = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    
    const uniqueId = searchParams.get("uniqueid");
    const {candidateData, loading, error} = useCandidateValidate(uniqueId)
    // const [candidateData, setCandidateData] = useState(null);
    // const [error, setError] = useState(null);
   
    const handleStartInterview = ()=>{
      // console.log("its clicked")
        navigate("/video-interview")
    }
 
  return (
    <div className="bg-[#30d5c7] min-h-screen p-6 flex items-center justify-center">
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h1 className="text-2xl font-bold text-[#30d5c7] mb-4">Welcome, {candidateData?.name}</h1>
      <p className="text-gray-700 mb-6">Thank you for joining the interview process for the Product Management position.</p>
      <button
        onClick={() => handleStartInterview()}
        className="w-full px-4 py-2 bg-[#30d5c7] text-white font-semibold rounded-lg hover:bg-[#26b3ab]"
      >
        Start Interview
      </button>
    </div>
  </div>
  )
}

export default ValidateCandidate