
const BASEURL = process.env.REACT_APP_BASE_URL;


export const handleSubmit = async (event, email, password, setErrorState) => {
    event.preventDefault();

    // Perform login logic here
    // You can make an API call or validate the credentials
    // If the credentials are valid, you can redirect the user to the dashboard
    // Otherwise, you can display an error message

    //api logic
    console.log('email :'+email,'password1 :'+password);
    var response = await fetch(`${BASEURL}/login`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    var json = await response.json();
    console.log("json",json)
    if(response.status === 200){
      window.location.href = '/MainPage/Dashboard';
    } else {
      //setErrorState(true);
    }
  };


