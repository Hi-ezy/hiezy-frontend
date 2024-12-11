import React, { useRef, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import AIGirl from './AIgirlBot';

const CandidateView = ({setCandidateResponse}) => {
    const [isRecording, setIsRecording] = useState(false);
    const [inputText, setInputText] = useState("")
    const videoRef = useRef(null);
    const textareaRef = useRef();
    // Speech Recognition Hook
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
    } = useSpeechRecognition();
    
    const startVideo = async () => {
      // Start user video stream
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setIsRecording(true);

      // Start speech recognition
      // SpeechRecognition.startListening({ continuous: true, language: 'en-US' });
      // console.log(SpeechRecognition)
  };
  
    const startTranscripting = () => {
        console.log("start transcripting")
        SpeechRecognition.startListening({ continuous: true, language: 'en-US' });
    };
    const stopTranscripting = () => {
        console.log("stop transcripting")
        SpeechRecognition.stopListening();
    };

    const stopVideo = () => {
        // Stop user video stream
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        videoRef.current.srcObject = null;
        setIsRecording(false);

        // Stop speech recognition
        SpeechRecognition.stopListening();
    };

    // Check if browser supports Speech Recognition
    if (!browserSupportsSpeechRecognition) {
        return <p>Your browser does not support speech recognition.</p>;
    }
    const handleText = (e)=>{
      e.preventDefault()
      // console.log(inputText)
      setCandidateResponse(inputText);
      setInputText("")
      textareaRef.current.value = '';
    }
    return (
      <div className="flex flex-col h-screen w-full">
      {/* Video Section */}
      <div className="flex flex-col items-center p-4">
        <video
          ref={videoRef}
          autoPlay
          className="w-full h-3/4 border border-gray-300 rounded"
        />
        {isRecording && (
          <button
            onClick={stopVideo}
            className="mt-4 bg-red-500 text-white p-2 rounded"
          >
            Stop Video
          </button>
        )}
      </div>
    
      {/* Transcription Area */}
      <div className="flex flex-col p-4">
        <textarea
        // name={"candidateInput"}
        ref={textareaRef}
          defaultValue={transcript}
          className="w-full h-32 p-2 border rounded"
          placeholder="Your speech will appear here..."
          onChange={(e)=>setInputText(e.target.value.toString())}
        />
        <div className="flex flex-row justify-between">

        <button
          onClick={resetTranscript}
          className="mt-2 w-1/5 bg-yellow-500 text-white p-2 rounded"
        >
          Reset Transcript
        </button>
        <button
          onClick={(e)=>handleText(e)}
          className="mt-2 w-1/5 bg-blue-500 text-white p-2 rounded"
        >
          Send
        </button>
        </div>
      </div>
    
      {/* Start Interview Button */}
      {!isRecording && (
        <div className="flex justify-end p-4">
          <button
            onClick={startVideo}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Start Interview
          </button>
        </div>
      )}
    </div>
    
    
    );
};

export default CandidateView;
