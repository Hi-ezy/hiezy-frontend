import React from 'react';
import { Brain, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const navigate = useNavigate()
  return (
     <nav className="fixed z-50 w-full shadow-sm bg-white/90 backdrop-blur-sm">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center justify-start mtwindow.location.href = -4 ">
               <img className='h-12' src='/assets/HiezyLogo1.png' alt='Hiezy' />
               <h2 className='text-2xl mx-2 pt-4 text-[#30d5c7] font-extrabold'>Hi-Ezy</h2>
              </div>
    

                <button className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-indigo-700" onClick={() => { navigate("/"); }}>
                  Logout
                </button>
    
              <div className="md:hidden">
                <Menu className="w-6 h-6 text-gray-600" />
              </div>
            </div>
          </div>
        </nav>

  );
}