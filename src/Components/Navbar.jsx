import React from 'react';
import { Brain, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className="fixed z-50 w-full shadow-lg bg-[#ffffffbc] backdrop-blur-sm">
      <div className="px-4 w-[85%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div onClick={() => navigate('./')} className="flex cursor-pointer my-1 items-center justify-start">
          <img className="h-12" src="/assets/HiezyLogo1.png" alt="Hiezy" />
          <h2 className="text-2xl mx-4 pt-5 text-[#30d5c7] font-semibold">HiEzy</h2>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex justify-center items-center flex-1 space-x-8 ml-7">
          <a href="#features" className="text-gray-600 text-lg hover:text-indigo-600">Features</a>
          <a href="#how-it-works" className="text-gray-600 text-lg hover:text-indigo-600">How it Works</a>
          <a href="#testimonials" className="text-gray-600 text-lg hover:text-indigo-600">Testimonials</a>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <button
            className="px-4 py-2 text-sm border-2 border-black hover:border-white text-gray-600 rounded-full hover:text-indigo-600"
            onClick={() => navigate("./login")}
          >
            Employer Login
          </button>
          <button
            className="px-4 py-2 text-sm text-white bg-[#30d5c7] rounded-full hover:bg-indigo-700"
            onClick={() => navigate("/career-page")}
          >
            Career Page
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Menu className="w-6 h-6 text-gray-600" />
        </div>
      </div>
    </nav>

  );
}