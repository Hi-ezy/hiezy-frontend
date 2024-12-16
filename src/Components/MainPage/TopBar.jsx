import React from 'react';
import './TopBar.css'; // CSS file

export default function TopBar (){
  return (
    <div className="top-bar">
      {/* Left Section - Logo */}
      <div className="top-bar-left">
        <img src="Hiezy_logo.jpg" alt="Hiezy Logo" className="logo" />
      </div>

      {/* Center Section - Search */}
      <div className="top-bar-center">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      {/* Right Section - Icons */}
      <div className="top-bar-right">
        <div className="user-avatar">D</div>
      </div>
    </div>
  );
};
