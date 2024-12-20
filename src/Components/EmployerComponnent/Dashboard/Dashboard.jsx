import React from 'react';


const Dashboard = () => {
  return (
    <div className="flex mt-12 w-full">
      {/* Main Content */}
      <div className="ml-64 p-8 w-full bg-gray-100 min-h-screen text-gray-800 overflow-y-auto">
        {/* Overview Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold my-4">Dashboard Overview</h3>
          <p className="text-gray-600">Welcome back! Here's what's happening today.</p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-4">
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
        <div className="my-16">
          <h4 className="text-xl font-semibold mb-4">Current Hiring Pipeline</h4>
          <div className="flex justify-center items-center bg-gray-50 ">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="p-4 text-center font-semibold">Role</th>
                  <th className="p-4 text-center font-semibold">Department</th>
                  <th className="p-4 text-center font-semibold">Applications</th>
                  <th className="p-4 text-center font-semibold">Interviewed</th>
                  <th className="p-4 text-center font-semibold">Shortlisted</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b last:border-none hover:bg-gray-100">
                  <td className="p-4">
                    <div className="flex items-center justify-center h-full">Senior Frontend Developer</div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center h-full">Engineering</div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center h-full">45</div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center h-full">12</div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center h-full">5</div>
                  </td>
                </tr>
                <tr className="border-b last:border-none hover:bg-gray-100">
                  <td className="p-4">
                    <div className="flex items-center justify-center h-full">Product Manager</div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center h-full">Product</div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center h-full">38</div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center h-full">8</div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center h-full">3</div>
                  </td>
                </tr>
              </tbody>
            </table>


          </div>


        </div>

        {/* Recent Applications */}
        <div>
          <h4 className="text-xl font-semibold mt-16 mb-4">Recent Applications</h4>
          <table className="w-full mb-16 border-collapse bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 text-center font-semibold">Candidate</th>
                <th className="p-3 text-center font-semibold">Position</th>
                <th className="p-3 text-center font-semibold">Status</th>
                <th className="p-3 text-center font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100">
                <td className="p-3">
                  <div className="flex items-center justify-center h-full">Sarah Johnson</div>
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-center h-full">Senior Frontend Developer</div>
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-center h-full">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">Shortlisted</span>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-center h-full">2024-03-15</div>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="p-3">
                  <div className="flex items-center justify-center h-full">Michael Chen</div>
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-center h-full">Product Manager</div>
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-center h-full">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs">Interview Scheduled</span>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-center h-full">2024-03-14</div>
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="p-3">
                  <div className="flex items-center justify-center h-full">Emily Davis</div>
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-center h-full">UX Designer</div>
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-center h-full">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs">On Hold</span>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-center h-full">2024-03-13</div>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;