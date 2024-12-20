import React from 'react';
import { Brain, Menu } from 'lucide-react';
export default function Navbar() {
  return (
    <nav className="fixed z-50 w-full shadow-sm bg-white/90 backdrop-blur-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-start m-[-85px]">
            <img className="h-12" src="/assets/HiezyLogo1.png" alt="Hiezy" />
            <h2 className="text-2xl mx-2 mt-4 text-[#30d5c7] font-extrabold">Hi-Ezy</h2>
          </div>
          <div className="md:hidden">
            <Menu className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>

  );
}