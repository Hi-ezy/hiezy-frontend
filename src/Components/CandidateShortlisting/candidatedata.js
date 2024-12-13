
import { useState, useCallback } from 'react';
const BASEURL = process.env.REACT_APP_BASE_URL
const useHandleCandidateData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const saveDatatoBackend = useCallback(async (payload) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch( `${BASEURL}/app/candidates/save`, {
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

  const sendEmail = useCallback(async (payload) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch( `${BASEURL}/app/candidate/sendemail`, {
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



  return { saveDatatoBackend, sendEmail, loading, error };
};

export default useHandleCandidateData;
