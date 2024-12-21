import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { FiMenu, FiLogOut } from 'react-icons/fi'; // Hamburger and Logout icons

const EmployerDashboard = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="flex">
      {/* Topbar and Sidebar */}
      <nav className="fixed z-40 w-full shadow-lg bg-[#ffffffbc] backdrop-blur-sm py-2 top-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative">
            {/* Left Section */}
            <div className="flex cursor-pointer my-1 items-center justify-start">
              <img className="h-12" src="/assets/HiezyLogo1.png" alt="Hiezy" />
              <h2 className="text-2xl mx-4 pt-5 text-[#30d5c7] font-semibold">HiEzy</h2>
            </div>

            {/* Right Section */}
            <div className="relative">
              <button
                className="text-[#30d5c7] hover:text-indigo-700"
                onClick={toggleDropdown}
              >
                <FiMenu size={28} /> {/* Hamburger Icon */}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-2xl">
                  <ul className="mt-4 flex flex-col items-center text-gray-700">
                    <li
                      className="px-4 pt-2 hover:text-[#30d5c7] cursor-pointer"
                      onClick={() => {
                        navigate('/employer/dashboard');
                        setIsDropdownOpen(false);
                      }}
                    >
                      Dashboard
                    </li>
                    <li
                      className="px-4 py-2 hover:text-[#30d5c7] cursor-pointer"
                      onClick={() => {
                        navigate('/employer/jobs');
                        setIsDropdownOpen(false);
                      }}
                    >
                      Jobs
                    </li>
                    <li
                      className="px-4 hover:text-[#30d5c7] cursor-pointer flex items-center"
                      onClick={() => {
                        navigate('/');
                        setIsDropdownOpen(false);
                      }}
                    >
                      Logout
                      <FiLogOut className="ml-2" size={20} />
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <Outlet />
    </div>
  );
};

export default EmployerDashboard;
