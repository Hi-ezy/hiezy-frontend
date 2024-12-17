import React from 'react';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const navigate = useNavigate()
  return (
    <div className="w-64 bg-teal-500 text-white h-screen fixed top-0 left-0 p-6">
      <h2 className="text-2xl mb-8 font-bold">Heizy</h2>
      <ul className="space-y-4">
        <li className="cursor-pointer font-semibold text-teal-200" onClick={() => navigate('/employer/dashboard')} >Dashboard</li>
        <li
          className="cursor-pointer hover:text-teal-200"
          onClick={() => navigate('/employer/jobs')}
        >
          Jobs
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
