import React from 'react'
import TriggerSignup from './Signup.js';

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

        <form>
          <input id='email' type="email" placeholder="Email" required />
          <input id='name' type="text" placeholder="Name" required />
          <input id='password' type="password" placeholder="password" required />

          <button type="submit" className="continue-btn" onClick={handleSignup}>Signup</button>
        </form>


      </div>

    </div>    
    </>
  )
}

export default Signup;