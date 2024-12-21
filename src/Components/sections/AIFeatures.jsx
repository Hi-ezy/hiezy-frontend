import React from 'react';
import { Bot, Brain, BarChart, Zap } from 'lucide-react'; // Keep these icons or replace with SVGs
import SectionHeading from '../common/SectionHeading.tsx';

const features = [
  {
    icon: Bot,
    title: "JD Creation",
    description: "AI assists in creating clear, inclusive job descriptions that attract qualified candidates."
  },
  {
    icon: Brain,
    title: "Smart Resume Analysis",
    description: "Advanced ML algorithms match candidate qualifications with job requirements in seconds."
  },
  {
    icon: BarChart,
    title: "Skill Assessment",
    description: "Automated technical and soft skill evaluation through AI-powered interviews."
  },
  {
    icon: Zap,
    title: "Instant Insights",
    description: "Real-time analytics and candidate evaluation reports."
  }
];

export default function AIFeatures() {
  return (
    <div id="features" className="pb-20 relative">
      {/* Background Vector Illustration */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1700 200"
          fill="none"
          stroke="none"
          className="w-full h-full"
        >
          <path
            d="M0 100C300 150 600 0 900 100C1200 200 1500 0 1800 100V300H0V100Z"
            fill="#30d5c7"
          />
        </svg>
      </div>

      <div className="px-4 pb-8 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="AI-Powered Recruiting Features"
          description="Leverage cutting-edge AI technology to transform your hiring process"
        />
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white shadow-xl rounded-2xl transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#f0f0f0] rounded-full">
                  <feature.icon className="w-8 h-8 text-[#30d5c7]" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
