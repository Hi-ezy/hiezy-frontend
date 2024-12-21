import React from 'react';
import { ArrowRight, Users, Sparkles, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-40 pb-10 bg-gradient-to-t from-[#e6fffd] to-white overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-0 right-0 w-64 h-64 transform translate-x-1/2 -translate-y-1/2 opacity-20"
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="128" cy="128" r="120" fill="url(#gradient)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-4 sm:px-6 lg:px-8">
        <div className="relative text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
            Acquire the talent you need with our
            <span className="text-[#30d5c7]"> AI-Powered</span> Recruiting
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Streamline your recruitment process with our end-to-end AI solution.
            From job posting to first interviews, we help you find the perfect candidates faster and smarter.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-[#30d5c7] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition-transform transform hover:scale-105">
              Start Free Trial <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-transform transform hover:scale-105">
              Watch Demo
            </button>
          </div>

          {/* Icon Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center animate-fade-in-delayed">
              <div className="shadow-xl p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-[#30d5c7]" />
              </div>
              <h3 className="font-semibold">500+ Companies</h3>
              <p className="text-gray-600">Trust our platform</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in-delayed">
              <div className="shadow-xl p-4 rounded-full mb-4">
                <Sparkles className="h-8 w-8 text-[#30d5c7]" />
              </div>
              <h3 className="font-semibold">95% Success Rate</h3>
              <p className="text-gray-600">In candidate matching</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in-delayed">
              <div className="shadow-xl p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-[#30d5c7] " />
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
