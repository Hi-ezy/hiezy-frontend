// # Video Interview Screen

import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import AIGirl from './AIgirlBot';

const VideoInterview = () => {
    const [isRecording, setIsRecording] = useState(false);
      const [transcript, setTranscript] = useState('');
    const [isListening, setIsListening] = useState(false);
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    const videoRef = useRef(null);
    const aiVideoRef = useRef(null);

    const startVideo = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        setIsRecording(true);
    };

    const stopVideo = () => {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        videoRef.current.srcObject = null;
        setIsRecording(false);
    };

    useEffect(() => {
        if (isRecording) {
            // Initialize text-to-speech and speech-to-text functionalities here
        }
    }, [isRecording]);

    return (
        <div className="flex h-screen ">
            <div className="w-1/2 pt-10%">
            <video ref={videoRef} autoPlay className="w-full h-1/2" />
                {
                  isRecording && <button onClick={stopVideo} className="mt-4 bg-red-500 text-white p-2 rounded">Stop Video</button>
                }
            </div>
            <div className="w-1/2">
                {/* <video ref={aiVideoRef} autoPlay className="w-full h-full" /> */}
                {/* <AIGirlComponent /> */}
                <AIGirl />
            </div>
            {!isRecording && (
                <button onClick={startVideo} className="absolute bottom-4 right-4 bg-blue-500 text-white p-2 rounded">Start Interview</button>
            )}
        </div>
    );
};

const AIGirlComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full h-1/2 bg-white shadow-lg flex items-center justify-center">
        <img 
          src="/assets/formal_dress_women.png" 
          alt="AI Indian Origin Girl" 
          className="w-1/3 h-auto rounded-full"
        />
      </div>
      <div className="w-full h-1/2 flex items-center justify-center bg-blue-500">
        <p className="text-white text-lg font-semibold">
          "Hello, I am here to assist you with your queries."
        </p>
      </div>
    </div>
  );
};

// export default AIGirlComponent;


export default VideoInterview;
