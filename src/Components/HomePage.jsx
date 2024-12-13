import React from 'react'
import VideoInterviewApp from './VideoInterview/VideoInterview'
import CandidateUploader from './CandidateShortlisting/CandidateShortlisting'
import ValidateCandidate from './CandidateShortlisting/ValidateCandidate'


const HomePage = () => {
  return (
    <div>
      
    {/* <VideoInterviewApp />
    <CandidateUploader /> */}
    <ValidateCandidate />
    
    </div>
  )
}

export default HomePage