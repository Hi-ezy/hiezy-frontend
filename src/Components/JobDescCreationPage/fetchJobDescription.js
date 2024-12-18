const BASEURL = process.env.REACT_APP_BASE_URL;
  const useJobCreation =  () => {
    
    const getAiJD = async ( jobTittle, department,skills,experience,location,qualification, responsibilities, setErrorState)=>{
        var response = await fetch(`${BASEURL}/app/jobs/create-jd`,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              jobTittle: jobTittle,
              department: department,
              skills: skills,
              experience: experience,
              location: location,
              qualification: qualification,
              responsibilities: responsibilities
            }),
          });
  
          const jobDesc = await response.json();
          console.log("json", jobDesc);
          
          if (response.status === 200) {
            // Handle successful response
            console.log("Success:", jobDesc.response);
            return jobDesc.response;
            // Optionally set success state or handle it accordingly
          } else {
            // Handle error or other status codes
            console.error("Error:", response.status);
            // Optionally set error state or handle it accordingly
            // setErrorState(true);
          }
        }
      
        const saveJobDetails = async (p_body)=>{
          var response = await fetch(`${BASEURL}/app/jobs/create-job`,{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(p_body),
            });
    
            const createJob = await response.json();
            console.log("json");
            
            if (response.status === 200) {
              // Handle successful response
              // console.log("Success:", jobDesc.response);
              return createJob;
              // Optionally set success state or handle it accordingly
            } else {
              // Handle error or other status codes
              console.error("Error:", response.status);
              // Optionally set error state or handle it accordingly
              // setErrorState(true);
            }
          }
    return {getAiJD, saveJobDetails}
  };

  export default useJobCreation