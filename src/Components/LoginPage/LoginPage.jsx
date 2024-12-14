import {React, useState} from 'react'
import './LoginPage.css'; // Link to the CSS file

/*import {React, useState} from 'react'
import './LoginPage.css'
import { FaLock, FaUnlock, FaUser } from "react-icons/fa";
import { handleSubmit } from './loginPage';

export const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [errorState, setErrorState] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
      };
    
      const handleFormSubmit = (event) => {
        event.preventDefault();
        // //validatoion
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
       console.log('username :'+username,'password :'+password);
       
        // //call api wrapper.
        // if (username === 'admin' && password === 'password') {
        //   console.log('Login successful!');
        //   window.location.href = '/hr';
        // } else {
        //   console.log('Invalid username or password');
        //   setErrorState(true);
        // }

        handleSubmit(event, username, password, setErrorState);
      }
    
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className='input-box'>
                <input id='username'    type='text' placeholder='Username' required/>
                <FaUser className='icon'/>
            </div>
            <div className='input-box'>
                <input id='password' type={showPassword ? 'text' : 'password'} placeholder='Password' required/>
                <span onClick={handleShowPassword}>
                    {showPassword ? <FaUnlock className='icon'/>:<FaLock className='icon'/>
                    }
                </span> 
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" /> Remember me </label>
                <a href="#">Forgot Password</a>
            </div>

           
            <button type='submit' onClick={() => { window.location.href = "/MainPage"; }}>Login</button>

            <div className="login-register">
                <p>Don't have an account? <a href="#"> Register </a></p>
            </div>

        </form>
    </div>
  );
}

export default LoginPage*/

 /*<button type='submit' onClick={handleFormSubmit}>Login</button>*/
 /*{errorState && <p className="error">Invalid username or password</p>}*/


export const LoginPage = () => {
  /*const [showPassword, setShowPassword] = useState(false);
    const [errorState, setErrorState] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
      };
    
      const handleFormSubmit = (event) => {

        event.preventDefault();
        // //validatoion
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
       console.log('username :'+username,'password :'+password);
       
        //call api wrapper.
        if (username === 'admin@email.com' && password === 'pass123') {
          console.log('Login successful!');
           window.location.href = '/MainPage';
         } else {
           console.log('Invalid username or password');
          setErrorState(true);
         }
         
        }*/

  return (
    <div className="login-container">
      <div className="login-left">
        <h2>Join Hiezy for more...</h2>
        <ul>
          <li>Post Job Description</li>
          <li>AI Resume Screening</li>
          <li>AI-Powered Interviews</li>
        </ul>

        <p>New to Hiezy? <span className="signup-link">Sign up</span></p>

        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="password" required />
          <button type="submit" className="continue-btn" 
          onClick={() => { window.location.href = "/MainPage"; }}>Continue</button>
        </form>

        <a href="/login" className="forgot-password">Forget password?</a>
      </div>
      <div className="login-right">
        {/*<img
          src="../Assets/women_hr.jpg"
          alt="Woman smiling"
          className="promo-image"
        />*/}
        <button className="close-btn">×</button>
      </div>
    </div>
  );
};
export default LoginPage;
