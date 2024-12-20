import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route

  return (
    <div className="w-56 bg-teal-500 text-white h-screen fixed top-0 left-0 flex flex-col items-center justify-center">
      <ul className="space-y-6 w-full text-center">
        <li
          className={`cursor-pointer text-lg font-medium ${
            location.pathname === '/employer/dashboard' ? 'text-white' : 'text-teal-200'
          } hover:text-white transition-colors`}
          onClick={() => navigate('/employer/dashboard')}
        >
          Dashboard
        </li>
        <li
          className={`cursor-pointer text-lg font-medium ${
            location.pathname === '/employer/jobs' ? 'text-white' : 'text-teal-200'
          } hover:text-white transition-colors`}
          onClick={() => navigate('/employer/jobs')}
        >
          Jobs
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
