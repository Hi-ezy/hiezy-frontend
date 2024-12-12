import React, { useRef, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

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
    <div className="flex flex-col h-screen w-full">
      {/* Video Section */}
      <div className="flex flex-col items-center p-4">
        <video
          ref={videoRef}
          autoPlay
          className="w-full h-3/4 border border-gray-300 rounded"
        />
        {isRecording ? (
          <button
            onClick={stopVideo}
            className="mt-4 bg-red-500 text-white p-2 rounded"
          >
            Stop Video
          </button>
        ) : (
          <button
            onClick={startVideo}
            className="mt-4 bg-blue-500 text-white p-2 rounded"
          >
            Start Video
          </button>
        )}
      </div>

      {/* Transcription Control */}
      <div className="flex gap-4 mb-4 justify-center">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={startTranscription}
          disabled={isTranscribing}
        >
          Start Transcription
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={stopTranscription}
          disabled={!isTranscribing}
        >
          Stop Transcription
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
            className="mt-2 w-1/5 bg-yellow-500 text-white p-2 rounded"
          >
            Reset Transcript
          </button>
          <button
            onClick={(e) => handleText(e)}
            className="mt-2 w-1/5 bg-blue-500 text-white p-2 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateView;
