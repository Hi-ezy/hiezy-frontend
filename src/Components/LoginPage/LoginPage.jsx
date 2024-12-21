import { React, useState } from 'react'
import { useHandleSubmit } from './loginPage'
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useHandleSubmit()
  const [errorState, setErrorState] = useState(false)

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    console.log('email :', email, 'password :', password)
    login(event, email, password, setErrorState)
    setErrorState(true)
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
      <div className="flex justify-between max-w-7xl mx-auto mt-28 mb-12 bg-white rounded-lg shadow-lg">

        {/* Left Panel (Login) */}
        <div className="flex flex-col justify-between p-10 w-1/2">

          <p className="text-lg mb-4">
            New to HiEzy?{' '}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => window.location.href = '/signup'}
            >
              Sign up
            </span>
          </p>

          <form onSubmit={handleFormSubmit} className="flex flex-col">
            <input
              id="email"
              type="email"
              placeholder="Email"
              required
              className="p-3 mb-5 border border-gray-300 rounded-lg text-lg"
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
              className="p-3 mb-5 border border-gray-300 rounded-lg text-lg"
            />
            <button
              type="submit"
              className="p-3 bg-teal-500 text-white  rounded-full text-lg cursor-pointer mb-5"
            >
              Log in
            </button>

            {errorState && <p className="text-red-500 text-sm">Invalid username or password</p>}
          </form>

          <a href="/login" className="text-sm text-gray-600 mb-5 hover:underline">
            Forget password?
          </a>
        </div>

        {/* Right Panel (Promo Image) */}
        <div
          className="relative w-1/2 bg-cover bg-center rounded-tr-lg rounded-br-lg"
          style={{ backgroundImage: "url('../Assets/women_hr.jpg')" }}
        >
          {/* Optional promotional bubble */}
          {/* <div className="absolute top-5 left-5 bg-white p-4 rounded-lg shadow-lg max-w-xs">
          <p>Bubble message content here</p>
        </div> */}
        </div>
      </div>
    </>
  )
}

export default LoginPage
