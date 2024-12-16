import React from 'react';
import { Play } from 'lucide-react';

export default function DemoSection() {
  return (
    <div className="py-20 bg-indigo-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h2 className="mb-4 text-4xl font-bold text-white">
              See AI Recruiting in Action
            </h2>
            <p className="mb-6 text-lg text-indigo-200">
              Watch how our AI conducts intelligent interviews and analyzes responses in real-time.
            </p>
            <button className="flex items-center gap-2 px-8 py-4 text-indigo-900 transition-colors bg-white rounded-lg hover:bg-indigo-50">
              <Play className="w-5 h-5" />
              Watch Demo Interview
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="AI Interview Demo"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-indigo-900 rounded-lg opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}