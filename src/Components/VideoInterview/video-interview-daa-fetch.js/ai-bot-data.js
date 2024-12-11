const BASEURL = process.env.REACT_APP_BASE_URL

const useAiConversion =()=>{
  
  // const navigate = useNavigate();

  const getAIResponse = async ({data}) => {
    try {
      // setLoading(true);
      const response = await fetch(
        `${BASEURL}/app/ai/question`,
        {
            body:data,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();
     
      let aiResponse = result?.data;
      
      return aiResponse;
      
      
    } catch (err) {
      console.log(err)
    }
  };
      
  return { getAIResponse}
}

export default useAiConversion;