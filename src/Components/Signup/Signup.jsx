import React from 'react'
import '../LoginPage/LoginPage.css'
import useSignup from './signup';
import { useNavigate } from 'react-router-dom';

//handler for signup

const Signup = () => {
  const navigate = useNavigate();
  const { signupUser } = useSignup()
  const handleSignup = async (event) => {
    event.preventDefault();
    //Get form values
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    //call api wrapper.
    await signupUser(email, name, password);
  }
  return (
    <>
      <nav className="fixed z-40 w-full shadow-lg bg-[#ffffffbc] backdrop-blur-sm py-2 top-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative ">
            {/* Left Section */}
            <div onClick={() => navigate('/')} className="flex cursor-pointer my-1 items-center justify-start">
              <img className="h-12" src="/assets/HiezyLogo1.png" alt="Hiezy" />
              <h2 className="text-2xl mx-4 pt-5 text-[#30d5c7] font-semibold">HiEzy</h2>
            </div>
          </div>
        </div>
      </nav>
      {/* Signup Form */}
      <div className=" mt-32 flex justify-between max-w-7xl mx-auto mb-12 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col justify-center px-10 w-1/2">
          <p className="text-lg mb-5">
            Already have an account?{' '}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => window.location.href = '/login'}
            >
              Log in
            </span>
          </p>
          <form>
            <input id='email' type="email" placeholder="Email" required />
            <input id='name' type="text" placeholder="Name" required />
            <input id='password' type="password" placeholder="Password" required />
            <button type="submit" className="continue-btn" onClick={handleSignup}>Signup</button>
          </form>
        </div>
        <div className="login-right">
          <img
            src="../Assets/women_hr.jpg"
            alt="Woman smiling"
            className="promo-image"
          />
          {/* <button className="close-btn">×</button> */}
        </div>

      </div>
    </>
  )
}

export default Signup;