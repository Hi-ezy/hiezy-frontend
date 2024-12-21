import React, { useEffect, useRef, useState } from 'react';
import 'tailwindcss/tailwind.css';
import useAiConversion from './video-interview-daa-fetch.js/ai-bot-data';

const AIGirl = ({ candidateResponse }) => {
  const { getAIResponse } = useAiConversion();
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);

  const sessionId = localStorage.getItem('sessionId');
  const jobId = localStorage.getItem('jobId');

  useEffect(() => {
    const fetchAIResponse = async () => {
      try {
        setIsLoading(true);

        // Prepare request payload
        const p_body = {
          question: candidateResponse,
          sessionID: sessionId,
          jobId: jobId,
          phase: 'interaction',
        };

        // Call the backend to get the AI response
        const data = await getAIResponse(JSON.stringify(p_body));

        if (data?.response) {
          setAiResponse(data?.response?.aiResponse); // Show placeholder while streaming audio
          
          // Connect to the WebSocket for audio playback
          const audioWebSocket = new WebSocket(data.response);

          audioWebSocket.onopen = () => {
            console.log('WebSocket connection established');
          };

          audioWebSocket.onmessage = (event) => {
            const { audioBase64 } = JSON.parse(event.data);
            if (audioBase64) {
              // Convert Base64 to Blob and create an object URL for the audio
              const audioBlob = new Blob(
                [Uint8Array.from(atob(audioBase64), (c) => c.charCodeAt(0))],
                { type: 'audio/mpeg' }
              );
              const audioUrl = URL.createObjectURL(audioBlob);

              // Play video and audio together
              if (videoRef.current) {
                videoRef.current.play();
              }

              const audio = new Audio(audioUrl);
              audio.play();

              // Handle audio completion
              audio.onended = () => {
                if (videoRef.current) {
                  videoRef.current.pause();
                  videoRef.current.currentTime = 0; // Reset video
                }
              };
            }
          };

          audioWebSocket.onclose = () => {
            console.log('WebSocket connection closed');
            setAiResponse(''); // Clear placeholder
          };

          audioWebSocket.onerror = (error) => {
            console.error('WebSocket error:', error);
            setAiResponse('Error streaming AI response');
          };
        } else {
          console.error('No response from AI');
        }
      } catch (error) {
        console.error('Error fetching AI response:', error);
        setAiResponse('Error fetching AI response');
      } finally {
        setIsLoading(false);
      }
    };

    if (candidateResponse) {
      fetchAIResponse();
    }
  }, [candidateResponse, getAIResponse, sessionId, jobId]);

  return (
    <div className="h-screen bg-gray-100">
      <div className="h-full mx-auto">
        <div className="flex flex-col h-full gap-4 p-4">
          <div className="h-3/4">
            <video
              ref={videoRef}
              className="object-cover w-full h-full rounded-lg shadow-xl"
              style={{ objectPosition: 'center 0' }}
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
              placeholder={isLoading ? 'Loading AI response...' : 'AI response will be here...'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIGirl;
