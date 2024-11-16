import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stepper from '../components/Stepper'
import HowWorks from '../components/HowWorks'
import Stats from '../components/Stats'
import Eran from '../components/Eran'
import Features from '../components/Features'
import About from '../components/About'
import Subscribe from '../components/Subscribe'

const HomePage = () => {
  return (
    <div className="flex-1 w-full overflow-hidden bg-neutral-200">
      <div className="flex sm:px-16 px-6 justify-center items-center">
        <div className="w-full ">
          <Navbar />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-full sm:px-16">
          {/* Your Homepage Content */}
          <Hero/>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full sm:px-16">
          {/* Your Homepage Content */}
          <Stepper/>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full sm:px-16">
          {/* Your Homepage Content */}
          <Stats/>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full sm:px-16">
          {/* Your Homepage Content */}
          <Eran/>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full sm:px-16">
          {/* Your Homepage Content */}
          <About/>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full sm:px-16">
          {/* Your Homepage Content */}
          <Features/>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full sm:px-16">
          {/* Your Homepage Content */}
          <HowWorks/>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full">
          {/* Your Homepage Content */}
          <Subscribe/>
        </div>
      </div>
      
      
      <div className="flex sm:px-6 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default HomePage
