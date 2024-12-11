import React, { useRef, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import AIGirl from './AIgirlBot';
import CandidateView from './UserInterviewpart';

const VideoInterview = () => {
 
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-row">
            <div className="w-1/2">
                    
                <CandidateView />
                </div>
                <div className="w-1/2">
                    <AIGirl />
                    
                </div>
            </div>

          
       
        </div>
    );
};

export default VideoInterview;
