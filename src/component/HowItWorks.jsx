import React from "react";
import img1 from '../assets/Group1st-icon.png';
import img2 from '../assets/Group2nd-icon.png';
import img3 from '../assets/Group3rd-icon.png';

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-md mx-auto md:max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3" style={{color: 'var(--primary-color)'}}>How it works</h2>
          <p className="text-gray-700 text-base md:text-lg font-medium">Own Your Motorcycle in 3 Simple Steps</p>
        </div>

        {/* Mobile Layout - Vertical Stack */}
        <div className="block md:hidden space-y-8">
          {/* Step 1 - Mobile */}
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
              <img src={img1} alt="Instant quote icon"/>
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Instant quote</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                This is demo text, this can be replaced later as required.
              </p>
            </div>
          </div>

          {/* Step 2 - Mobile */}
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
              <img src={img2} alt="Free doorstep evaluation icon"/>
              
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Free doorstep evaluation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                This is demo text, this can be replaced later as required.
              </p>
            </div>
          </div>

          {/* Step 3 - Mobile */}
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
              <img src={img3} alt="Get paid instantly icon" />
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Get paid instantly</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                This is demo text, this can be replaced later as required.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Horizontal Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 lg:gap-12">
          {/* Step 1 - Desktop */}
          <div className="flex flex-col items-start text-center md:text-left">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg mx-auto md:mx-0">
              <img src={img1} alt="Instant quote icon"/>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Instant quote</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Browse our curated collection
            </p>
          </div>

          {/* Step 2 - Desktop */}
          <div className="flex flex-col items-start text-center md:text-left">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg mx-auto md:mx-0">
              <img src={img2} alt="Free doorstep evaluation icon"/>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Free doorstep evaluation</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Explore our store inventory at your convenience
            </p>
          </div>

          {/* Step 3 - Desktop */}
          <div className="flex flex-col items-start text-center md:text-left">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg mx-auto md:mx-0">
              <img src={img3} alt="Get paid instantly icon" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Get paid instantly</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Hassle-free purchase and ownership transfer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;