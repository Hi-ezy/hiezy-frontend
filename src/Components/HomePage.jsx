import React from 'react'
import Navbar from '../Components/Navbar.tsx';
import Hero from '../Components/Hero.tsx';
import HowItWorks from '../Components/sections/HowItWorks.tsx';
import AIFeatures from '../Components/sections/AIFeatures.tsx';
import DemoSection from '../Components/sections/DemoSection.tsx';
import Testimonials from '../Components/Testimonials.tsx';


const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <AIFeatures />
      <DemoSection />
      <Testimonials />
    </div>
  )
}

export default HomePage