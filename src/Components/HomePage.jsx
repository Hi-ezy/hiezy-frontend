import React from 'react'
import Navbar from '../Components/Navbar.jsx';
import Hero from '../Components/Hero.jsx';
import HowItWorks from '../Components/sections/HowItWorks.jsx';
import AIFeatures from '../Components/sections/AIFeatures.jsx';
import DemoSection from '../Components/sections/DemoSection.jsx';
import Testimonials from '../Components/Testimonials.jsx';


const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <AIFeatures />
      {/* <DemoSection /> */}
      <Testimonials />
    </div>
  )
}

export default HomePage