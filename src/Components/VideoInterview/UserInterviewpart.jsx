import React, { useRef, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { RiVideoOnLine,RiVideoOffLine } from "react-icons/ri";
import { FaMicrophone,FaMicrophoneSlash } from "react-icons/fa";

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
      {/* Video Section */}
      <div className="flex flex-col items-center p-4">
        <video
          ref={videoRef}
          autoPlay
          className="w-full border border-gray-300 rounded h-3/4"
        />
        {isRecording ? (
          <button
            onClick={stopVideo}
            className="p-2 mt-4 text-white bg-red-500 rounded">
            <RiVideoOnLine/>
          </button>
        ) : (
          <button
            onClick={startVideo}
            className="p-2 mt-4 text-white bg-blue-500 rounded">
            <RiVideoOffLine />
          </button>
        )}
      </div>

      {/* Transcription Control */}
      <div className="flex justify-center gap-4 mb-4">
        <button
          className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-600"
          onClick={startTranscription}
          disabled={isTranscribing}>
          <FaMicrophoneSlash/>
        </button>
        <button
          className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600"
          onClick={stopTranscription}
          disabled={!isTranscribing}
        >
          <FaMicrophone/>
        </button>
      </div>

      {/* Transcription Area */}
      <div className="flex flex-col p-4">
        <textarea
          value={transcript || inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full h-32 p-2 border rounded"
          placeholder="Your speech will appear here..."
        />
        <div className="flex flex-row justify-between">
          <button
            onClick={resetTranscript}
            className="w-1/5 p-2 mt-2 text-white bg-yellow-500 rounded">
            Reset Transcript
          </button>
          <button
            onClick={(e) => handleText(e)}
            className="w-1/5 p-2 mt-2 text-white bg-blue-500 rounded">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateView;
