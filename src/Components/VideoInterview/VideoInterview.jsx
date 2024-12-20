import React, { useEffect, useRef, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import AIGirl from './AIgirlBot';
import CandidateView from './UserInterviewpart';

const VideoInterview = () => {
    const [candidateResponse, setCandidateResponse ] = useState("")
    useEffect(()=>{
        console.log(candidateResponse)
    },[candidateResponse])
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-row">
                <div className="w-1/2">
                    <AIGirl candidateResponse={candidateResponse} />
                </div>
                <div className="w-1/2">
                    <CandidateView candidateResponse={candidateResponse} setCandidateResponse={setCandidateResponse}/>
                </div>
            </div>
        </div>
    );
};

export default VideoInterview;
