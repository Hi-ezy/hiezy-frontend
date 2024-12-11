
import React, { useEffect, useRef, useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import 'tailwindcss/tailwind.css';
import useAiConversion from './video-interview-daa-fetch.js/ai-bot-data';
const AIGirl = ({candidateResponse}) => {
  const {getAIResponse}  = useAiConversion()
  const { speak } = useSpeechSynthesis();
  const[aiResponse, setAiResponse] = useState("")
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchAIResponse = async () => {
      const p_body = {
        question: candidateResponse,
        sessionID: '1733852441807',
        phase: 'interaction',
      };

      const data = await getAIResponse(JSON.stringify(p_body));
      if (data) {
        setAiResponse(data.response); // Assuming `response` contains the AI's answer
        handleSpeak(data.response)
      }
    };

    if (candidateResponse) {
      fetchAIResponse();
    }

    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [candidateResponse, getAIResponse]);
  const handleSpeak = (text) => {
    console.log("u r here")
    const prompt =
      "Hi Milind this is a playback system which can speak automaticly";
    const utterance = new SpeechSynthesisUtterance(text); // Create a new speech utterance
    utterance.lang = "en-IN"; // Set the language (optional, but good practice)
    utterance.rate = 1; // Set the speaking speed (1 is normal, adjust as needed)
    utterance.pitch = 1; // Set the pitch (1 is normal)
    window.speechSynthesis.speak(utterance); // Speak the text
  };

  useEffect(() => {
    const p_body = {
      "question": candidateResponse,
      "sessionID":"1733852441807",
      "phase":"interaction"
  }
    const AIresponse = getAIResponse(JSON.stringify(p_body))
    if (videoRef.current) {
      videoRef.current.play();
    } 
  }, [candidateResponse]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <video
        ref={videoRef}
        className="w-64 h-64"
        autoPlay
        // loop
        muted
        src="/assets/video_interview_model.mp4"
      />
      {/* <button
        onClick={() => handleSpeak(AIresponse?.response)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Speak
      </button> */}
      <textarea className="w-full h-32 p-2 border rounded"
      value={aiResponse}
       placeholder="Ai response will be here" />
       
    </div>
  );
};

export default AIGirl;
