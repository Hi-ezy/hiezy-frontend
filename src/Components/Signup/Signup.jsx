import React from 'react'
import TriggerSignup from './Signup.js';
import '../LoginPage/LoginPage.css'

//handler for signup
const handleSignup = async (event) => {
    event.preventDefault();
    //Get form values
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    //call api wrapper.
    await TriggerSignup(email, name, password);
}


const Signup = () => {
  return (
    <>
    {/* Signup Form */}
    <div className="login-container">
      <div className="login-left">
      <h2>Signup on Hiezy for do more...</h2>
        <ul>
          <li>Post Job Description</li>
          <li>AI Resume Screening</li>
          <li>AI-Powered Interviews</li>
        </ul>
        <form>
          <input id='email' type="email" placeholder="Email" required />
          <input id='name' type="text" placeholder="Name" required />
          <input id='password' type="password" placeholder="Password" required />
          <button type="submit" className="continue-btn" onClick={handleSignup}>Signup</button>
        </form>
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
    </>
  )
}

export default Signup;