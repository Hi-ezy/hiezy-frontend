import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "HR Director",
    company: "Tech Solutions Inc",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    quote: "TalentAI has revolutionized our hiring process. We've reduced our time-to-hire by 65% while finding better-qualified candidates."
  },
  {
    name: "Michael Chen",
    role: "Talent Acquisition Lead",
    company: "Growth Dynamics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    quote: "The AI-powered screening has saved our team countless hours. The quality of candidates has improved significantly."
  },
  {
    name: "Emily Rodriguez",
    role: "Recruiting Manager",
    company: "Innovation Labs",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    quote: "The platform's bias prevention features have helped us build a more diverse and inclusive workforce."
  }
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers have to say about their experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}