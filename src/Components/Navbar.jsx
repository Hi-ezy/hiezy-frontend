import React from 'react';
import { Brain, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className="fixed z-50 w-full shadow-sm bg-white/90 backdrop-blur-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-start mt-4 ">
           <img className='h-16 ' src='/assets/HiezyLogo1.png' alt='Hiezy' />
           <h2 className='text-2xl mx-2 text-[#30d5c7] font-extrabold'>Hi-Ezy</h2>
          </div>
           
          <div className="items-center hidden space-x-8 md:flex">
            <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600">How it Works</a>
            <a href="#testimonials" className="text-gray-600 hover:text-indigo-600">Testimonials</a>
            <button className="px-4 py-2 text-white bg-[#30d5c7] rounded-md hover:bg-indigo-700" onClick={() => { navigate("/login"); }}>
              Employer Login 
            </button>
            <button className="px-4 py-2 text-white bg-[#30d5c7] rounded-md hover:bg-indigo-700" onClick={() => { navigate("/career-page"); }}>
              Career Page
            </button>
          </div>
          
          <div className="md:hidden">
            <Menu className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}