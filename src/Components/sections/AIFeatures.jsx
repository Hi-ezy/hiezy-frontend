import React from 'react';
import { Bot, Brain, BarChart, Clock, Shield, Zap } from 'lucide-react';
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
    <div id="features" className="pt-20 pb-28 bg-[#30d5c7]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className='mb-10'>
          <h1 className='text-white text-4xl font-bold'>AI-Powered Recruiting Features</h1>
          <p className='text-white text-lg mt-2'>Leverage cutting-edge AI technology to transform your hiring process</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="p-6 transition-shadow bg-white shadow-lg rounded-xl hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-black rounded-full">
                  <feature.icon className="w-6 h-6 text-[#30d5c7]" />
                </div>
                <h3 className="ml-4 text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}