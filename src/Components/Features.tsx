import React from 'react';
import { Search, BrainCircuit, UserCheck, LineChart, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: "Smart Candidate Sourcing",
    description: "AI-powered talent pool analysis to find the best candidates across multiple platforms."
  },
  {
    icon: BrainCircuit,
    title: "Intelligent Screening",
    description: "Automated resume screening and ranking based on job requirements and company culture fit."
  },
  {
    icon: UserCheck,
    title: "Conduct First interviews",
    description: "Conduct AI-based video interviews"
  },
  {
    icon: LineChart,
    title: "Analytics Dashboard",
    description: "Comprehensive analytics for data-driven decisions."
  },
  {
    icon: Zap,
    title: "Quick Integration",
    description: "Easy integration with your existing HR tools and ATS systems."
  }
];

export default function Features() {
  return (
    <div id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Recruiting
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform streamlines every step of your recruitment process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <feature.icon className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}