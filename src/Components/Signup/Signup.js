const BASEURL = process.env.REACT_APP_BASE_URL;

export default async function TriggerSignup(email, name, password) {

    console.log(email, name, password);
    try{
    const response = await fetch(`${BASEURL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          username: name,
          password: password,
        }),
      });

    //hanlde response
    if (response.status === 201) {
        window.location.href = '/hr';
      } else if( response.status === 409) {
          window.location.href = '/login';
        }  else {
        console.log('Signup failed');
      }

    }
    catch(err){
        console.log(err);
        window.location.href = '/MainPage';
    }


}