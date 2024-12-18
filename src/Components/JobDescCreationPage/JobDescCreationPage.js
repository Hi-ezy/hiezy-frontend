const BASEURL = process.env.REACT_APP_BASE_URL;
export const handleGetJDwithAI =  () => {
    // Perform login logic here
    // You can make an API call or validate the credentials
    // If the credentials are valid, you can redirect the user to the dashboard
    // Otherwise, you can display an error message

    //api logic
    const getjdwithai = async (event, jobTittle, department,skills,experience,location,qualification, responsibilities, setErrorState)=>{
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
          
    return {getjdwithai}
  };
