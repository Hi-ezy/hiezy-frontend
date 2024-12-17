import { useNavigate } from "react-router-dom";
const BASEURL = process.env.REACT_APP_BASE_URL;
export default async function TriggerSignup(email, name, password) {
  const navigate = useNavigate()
    console.log(email, name, password);
    try{
    const response = await fetch(`${BASEURL}/app/user/signup`, {
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
        navigate('employer/dashboard');
      } else if( response.status === 409) {
          navigate('/login');
        }  else {
        console.log('Signup failed');
      }

    }
    catch(err){
        console.log(err);
        navigate('/signup');
    }


}