// import React, { useEffect, useRef } from 'react';
// import { useSpeechSynthesis } from 'react-speech-kit';

// const AIGirl = () => {
//     const { speak } = useSpeechSynthesis();
//     console.log("speak", speak)
//   const videoRef = useRef(null);

//   const handleSpeak = () => {
//     speak({ text: "Hello! I am your AI assistant." });
//     // console.log(speak)
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   };

//   useEffect(() => {
//     const video = videoRef.current;
//     if (video) {
//       video.addEventListener('ended', () => {
//         video.pause();
//         video.currentTime = 0;
//       });
//     }
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <video
//         ref={videoRef}
//         className="w-64 h-64"
//         loop
//         muted
//         src="/assets/video_interview_model.mp4"
//       />
//       <button
//         onClick={handleSpeak}
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//       >
//         Speak
//       </button>
//     </div>
//   );
// };

// export default AIGirl;
import React, { useEffect, useRef } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import 'tailwindcss/tailwind.css';

const AIGirl = () => {
  const { speak } = useSpeechSynthesis();
  const videoRef = useRef(null);

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
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <video
        ref={videoRef}
        className="w-64 h-64"
        autoPlay
        loop
        muted
        src="/assets/video_interview_model.mp4"
      />
      <button
        onClick={() => handleSpeak("Hi Pratibha and milind. you are made for each other")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Speak
      </button>
      <textarea className="w-full h-32 p-2 border rounded"
                    placeholder="Ai response will be here" />
    </div>
  );
};

export default AIGirl;
