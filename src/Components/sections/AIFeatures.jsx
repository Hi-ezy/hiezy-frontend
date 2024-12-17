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
    <div id="features" className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <SectionHeading 
          title="AI-Powered Recruiting Features"
          subtitle="Leverage cutting-edge AI technology to transform your hiring process"
        />
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="p-6 transition-shadow shadow-sm bg-gradient-to-br from-white to-indigo-50 rounded-xl hover:shadow-md">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <feature.icon className="w-6 h-6 text-indigo-600" />
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