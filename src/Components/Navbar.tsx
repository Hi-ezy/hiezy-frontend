import React from 'react';
import { Brain, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed z-50 w-full shadow-sm bg-white/90 backdrop-blur-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold">HiEzy</span>
          </div>
          
          <div className="items-center hidden space-x-8 md:flex">
            <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600">How it Works</a>
            <a href="#testimonials" className="text-gray-600 hover:text-indigo-600">Testimonials</a>
            <button className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700" onClick={() => { window.location.href = "./login"; }}>
              Employer Login 
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