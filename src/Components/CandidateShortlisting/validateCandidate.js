import { useEffect, useState } from "react";
const BASEURL = process.env.REACT_APP_BASE_URL;
const useCandidateValidate = (uniqueId) => {
    const [candidateData, setCandidateData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

    

  useEffect(() => {
    let didCancel = false;
    setError(null);
    (async () => {
      // console.log("Inside data fetch",filteredPropertyTypeArray)
      try {
        setLoading(true);
       
        const response = await fetch( `${BASEURL}/app/candidate/validatecandidate?uniqueid=${uniqueId}`, {
            headers: {
              'Content-Type': 'application/json',
            },
          });

        const result = await response.json();
        console.log("result", result.data);
        setCandidateData(result.data)
          localStorage.setItem("sessionId", result?.data?.uniqueRandomCode)
        if (!didCancel) {
      
          didCancel =true
          }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      didCancel = true;
    };
  }, [uniqueId]);




  return {  candidateData, loading, error};
};

export default useCandidateValidate ;
