import React, { useRef, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { RiVideoOnLine,RiVideoOffLine } from "react-icons/ri";
import { FaMicrophone,FaMicrophoneSlash } from "react-icons/fa";
import { BiReset, BiSend } from "react-icons/bi";

const CandidateView = ({ setCandidateResponse }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [inputText, setInputText] = useState("");
  const videoRef = useRef(null);

  // Speech Recognition Hook
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startVideo = async () => {
    // Start user video stream
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    setIsRecording(true);
  };

  const stopVideo = () => {
    // Stop user video stream
    const stream = videoRef.current.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsRecording(false);
  };

  const startTranscription = () => {
    if (!browserSupportsSpeechRecognition) {
      alert("Your browser does not support speech recognition.");
      return;
    }
    setIsTranscribing(true);
    SpeechRecognition.startListening({ continuous: true, language: 'en-US' });
  };

  const stopTranscription = () => {
    setIsTranscribing(false);
    SpeechRecognition.stopListening();
  };

  const handleText = (e) => {
    e.preventDefault();
    setCandidateResponse(inputText || transcript);
    setInputText(""); // Clear manual input
    resetTranscript(); // Clear transcript
  };

  return (
    <div className="flex flex-col w-full h-screen">
      {/* Video Section - Positioned in top right corner */}
      <div className="absolute w-1/3 top-4 right-4 h-2/3">
        <div className="relative h-full">
          <video
            ref={videoRef}
            autoPlay
            className="object-cover w-full h-full border border-gray-300 rounded-lg shadow-lg"
          />
          {/* Video controls overlaid on video */}
          <div className="absolute bottom-2 right-2">
            {isRecording ? (
              <button
                onClick={stopVideo}
                className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600">
                <RiVideoOnLine/>
              </button>
            ) : (
              <button
                onClick={startVideo}
                className="p-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">
                <RiVideoOffLine />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Transcription Area - Fixed to bottom */}
      <div className="fixed bottom-0 right-0 w-1/2 bg-white shadow-lg">
        <div className="p-6">
          <textarea
            value={transcript || inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full h-40 p-4 mb-4 text-lg border-2 rounded-lg shadow-lg"
            placeholder="Your speech will appear here..."
          />
          <div className="flex flex-row items-center justify-between">
            <div className="flex gap-6">
              <button
                onClick={resetTranscript}
                className="p-4 text-white bg-yellow-500 rounded-full hover:bg-yellow-600">
                <BiReset className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => handleText(e)}
                className="p-4 text-white bg-blue-500 rounded-full hover:bg-blue-600">
                <BiSend className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex gap-6">
              <button
                className={`p-4 text-white rounded-full ${
                  isTranscribing 
                    ? 'bg-green-500 hover:bg-red-600' 
                    : 'bg-red-500 hover:bg-green-600'
                }`}
                onClick={isTranscribing ? stopTranscription : startTranscription}>
                {isTranscribing ? 
                <FaMicrophone className="w-8 h-8"/>:  <FaMicrophoneSlash className="w-8 h-8"/> 
                  }
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateView;
