import React, { useEffect, useRef, useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import 'tailwindcss/tailwind.css';
import useAiConversion from './video-interview-daa-fetch.js/ai-bot-data';

const AIGirl = ({ candidateResponse }) => {
  const { getAIResponse } = useAiConversion();
  const { speak } = useSpeechSynthesis();
  const [aiResponse, setAiResponse] = useState("");
  const videoRef = useRef(null);
const sessionId = localStorage.getItem("sessionId")
const jobId = localStorage.getItem("jobId")
  useEffect(() => {
    const fetchAIResponse = async () => {
      const p_body = {
        question: candidateResponse,
        sessionID: sessionId,
        jobId: jobId,
        phase: 'interaction',
      };

      const data = await getAIResponse(JSON.stringify(p_body));
      if (data) {
        setAiResponse(data.response); // Assuming `response` contains the AI's answer
        handleSpeak(data.response);

        // Play video when response starts
        if (videoRef.current) {
          videoRef.current.play();
        }

        // Stop video when response finishes
        const utterance = new SpeechSynthesisUtterance(data.response);
        utterance.onend = () => {
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset video to the start
          }
        };

        window.speechSynthesis.speak(utterance);
      }
    };

    if (candidateResponse) {
      fetchAIResponse();
    }
  }, [candidateResponse, getAIResponse]);

  const handleSpeak = (text) => {
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(voice => voice.gender === 'female' || voice.name.includes('Female') || voice.name.includes('Google UK English Female')); // Adjust criteria as needed
  
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-IN";
    utterance.rate = 1;
    utterance.pitch = 1;
  
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    } else {
      console.warn('No female voice found, using default voice.');
    }
  
    window.speechSynthesis.speak(utterance);
  };
  

  return (
    <div className="h-screen bg-gray-100">
      <div className="h-full mx-auto">
        <div className="flex flex-col h-full gap-4 p-4">
          <div className="h-3/4">
            <video
              ref={videoRef}
              className="object-cover w-full h-full rounded-lg shadow-xl"
              autoPlay
              muted
              src="/assets/video_interview_model.mp4"
            />
          </div>
          <div className="h-1/4">
            <textarea
              className="w-full h-full p-4 text-lg border-2 rounded-lg shadow-lg resize-none"
              value={aiResponse}
              readOnly
              placeholder="AI response will be here..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIGirl;

