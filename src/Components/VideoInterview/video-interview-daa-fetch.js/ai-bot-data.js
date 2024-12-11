
import { useState, useCallback } from 'react';
const BASEURL = process.env.REACT_APP_BASE_URL
const useAiConversion = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAIResponse = useCallback(async (payload) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch( `${BASEURL}/app/ai/question`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: payload,
      });

      if (!response.ok) {
        throw new Error('Failed to fetch AI response');
      }

      const data = await response.json();
      setLoading(false);
      return data;
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Something went wrong');
      console.error(err);
      return null;
    }
  }, []);

  return { getAIResponse, loading, error };
};

export default useAiConversion;
