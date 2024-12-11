import React, { useRef, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import AIGirl from './AIgirlBot';

const VideoInterview = () => {
    const [isRecording, setIsRecording] = useState(false);
    const videoRef = useRef(null);

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

    return (
        <div className="flex flex-col h-screen">
            <div className="flex h-2/3">
                {/* User Video */}
                <div className="w-1/2 pt-10%">
                    <video ref={videoRef} autoPlay className="w-full h-1/2" />
                    {isRecording && (
                        <button onClick={stopVideo} className="mt-4 bg-red-500 text-white p-2 rounded">
                            Stop Video
                        </button>
                    )}
                </div>
                    {/* <button onClick={startTranscripting}>Start listning</button>

                    <button onClick={stopTranscripting}>stop listning</button> */}
                {/* AI Bot */}
                <div className="w-1/2">
                    <AIGirl />
                </div>
            </div>

            {/* Transcript Text Box */}
            <div className="p-4 border-t border-gray-300 bg-gray-100">
                <textarea
                    value={transcript}
                    readOnly
                    className="w-full h-32 p-2 border rounded"
                    placeholder="Your speech will appear here..."
                />
                <button
                    onClick={resetTranscript}
                    className="mt-2 bg-yellow-500 text-white p-2 rounded"
                >
                    Reset Transcript
                </button>
            </div>

            {/* Start Interview Button */}
            {!isRecording && (
                <button
                    onClick={startVideo}
                    className="absolute bottom-4 right-4 bg-blue-500 text-white p-2 rounded"
                >
                    Start Interview
                </button>
            )}
        </div>
    );
};

export default VideoInterview;
