import React from 'react';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
  import Topbar from '../UIComponennt/TopBar';
import Sidebar from '../UIComponennt/Sidebar';


const EmployerDashboard = () => {
  return (
    <div className="flex">
      {/* Topbar and Sidebar */}
      <Topbar />
     

      {/* Main Content */}
        <Outlet />
     
    </div>
  );
};

export default EmployerDashboard;
