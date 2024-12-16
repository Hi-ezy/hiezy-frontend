import React from 'react';
import { ArrowRight, Users, Sparkles, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
           Acquire the talent you need with our
            <span className="text-indigo-600"> AI-Powered</span> Recruiting
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Streamline your recruitment process with our end-to-end AI solution. From job posting to first interviews, 
            we help you find the perfect candidates faster and smarter.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-indigo-700">
              Start Free Trial <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">
              Watch Demo
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-indigo-100 p-3 rounded-full mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold">500+ Companies</h3>
              <p className="text-gray-600">Trust our platform</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-indigo-100 p-3 rounded-full mb-4">
                <Sparkles className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold">95% Success Rate</h3>
              <p className="text-gray-600">In candidate matching</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-indigo-100 p-3 rounded-full mb-4">
                <Clock className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold">60% Faster</h3>
              <p className="text-gray-600">Time to hire</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}