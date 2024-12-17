import React from 'react';


const Dashboard = () => {
  return (
    <div className="flex mt-12 w-full">
      {/* Main Content */}
      <div className="ml-64 p-8 w-full bg-gray-100 min-h-screen text-gray-800 overflow-y-auto">
        {/* Overview Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">Dashboard Overview</h3>
          <p className="text-gray-600">Welcome back! Here's what's happening today.</p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-sm text-gray-500">Total Applications</p>
              <h2 className="text-3xl font-bold mt-2">156</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-sm text-gray-500">Shortlisted</p>
              <h2 className="text-3xl font-bold mt-2">43</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-sm text-gray-500">Interviews Completed</p>
              <h2 className="text-3xl font-bold mt-2">28</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-sm text-gray-500">On Hold</p>
              <h2 className="text-3xl font-bold mt-2">12</h2>
            </div>
          </div>
        </div>

        {/* Hiring Pipeline Section */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-4">Current Hiring Pipeline</h4>
          <table className="w-full border-collapse bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Applications</th>
                <th className="p-3 text-left">Interviewed</th>
                <th className="p-3 text-left">Shortlisted</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100">
                <td className="p-3">Senior Frontend Developer</td>
                <td className="p-3">Engineering</td>
                <td className="p-3">45</td>
                <td className="p-3">12</td>
                <td className="p-3">5</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="p-3">Product Manager</td>
                <td className="p-3">Product</td>
                <td className="p-3">38</td>
                <td className="p-3">8</td>
                <td className="p-3">3</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Recent Applications */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Recent Applications</h4>
          <table className="w-full border-collapse bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 text-left">Candidate</th>
                <th className="p-3 text-left">Position</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100">
                <td className="p-3">Sarah Johnson</td>
                <td className="p-3">Senior Frontend Developer</td>
                <td className="p-3">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">Shortlisted</span>
                </td>
                <td className="p-3">2024-03-15</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="p-3">Michael Chen</td>
                <td className="p-3">Product Manager</td>
                <td className="p-3">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs">Interview Scheduled</span>
                </td>
                <td className="p-3">2024-03-14</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="p-3">Emily Davis</td>
                <td className="p-3">UX Designer</td>
                <td className="p-3">
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs">On Hold</span>
                </td>
                <td className="p-3">2024-03-13</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;