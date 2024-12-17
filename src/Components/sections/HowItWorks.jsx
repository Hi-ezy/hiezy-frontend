import React from 'react';
import { FileText, Users, MessageSquare, CheckCircle } from 'lucide-react';
import SectionHeading from '../common/SectionHeading.tsx';

const steps = [
  {
    icon: FileText,
    title: "Post Job Description",
    description: "Create AI-optimized job descriptions that attract the right talent using our smart JD builder."
  },
  {
    icon: Users,
    title: "AI Resume Screening",
    description: "Our AI analyzes resumes against your JD, ranking candidates based on skills, experience, and culture fit."
  },
  {
    icon: MessageSquare,
    title: "AI-Powered Interviews",
    description: "Automated first-round interviews using natural language processing to assess candidate capabilities."
  },
  {
    icon: CheckCircle,
    title: "Shortlist Generation",
    description: "Receive detailed reports and shortlists of top candidates ready for human interviews."
  }
];

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="py-16 bg-gradient-to-b from-white to-indigo-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <SectionHeading 
          title="How It Works"
          subtitle="Our AI-powered platform streamlines your hiring process in four simple steps"
        />
        
        <div className="relative">
          <div className="absolute left-0 right-0 hidden h-1 bg-indigo-200 top-12 md:block" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="relative z-10 p-6 bg-white rounded-lg shadow-md">
                  <div className="flex items-center justify-center mx-auto mb-4 bg-indigo-100 rounded-full w-14 h-14">
                    <step.icon className="text-indigo-600 h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-center">{step.title}</h3>
                  <p className="text-center text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}