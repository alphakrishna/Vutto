import React, { useState } from "react";
import { FileText, Search, Handshake, MessageCircle } from "lucide-react";
import img1 from '../assets/sell-1.png';
import img2 from '../assets/sell-2.png';
import img3 from '../assets/sell-3.png';
import HeroBikeImage from '/public/Hero-Bike.png';

const HeroSection = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Only allow numbers and limit to 10 digits
    const numbersOnly = value.replace(/[^0-9]/g, '').slice(0, 10);
    setPhoneNumber(numbersOnly);
  };

  const handleSubmit = () => {
    if (phoneNumber.length >= 10) {
      console.log("Phone number submitted:", phoneNumber);
    } else {
      alert("Please enter a valid 10-digit phone number");
    }
  };

  return (
    <section style={{ backgroundColor: '#f5f8fe' }}>
      {/* Desktop */}
      <div className="hidden md:block max-w-6xl mx-auto px-6 py-16 flex flex-row items-center">
        <div className="grid grid-cols-2 items-center ml-20 mr-20">
          <div className="space-y-10 flex flex-col align-center">
            <div className="flex items-center space-x-4">
              <h1 className="text-6xl font-bold leading-tight text-gray-900">
                Want to sell<br />your bike?
              </h1>
            </div>
            <div className="space-y-6 width-min-content">
              <div className="flex items-center space-x-4">
                <div className="bg-transparent p-2 rounded-lg ">
                  <img src={img1} alt="" />
                </div>
                <span className="text-lg font-medium text-gray-800">Instant Online Quote</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-transparent p-2 rounded-lg ">
                  <img src={img2} alt="" />
                </div>
                <span className="text-lg font-medium text-gray-800">Hassle-Free Inspection</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-transparent p-2 rounded-lg ">  
                  <img src={img3} alt="" />
                </div>
                <span className="text-lg font-medium text-gray-800">Seamless Ownership Transfer</span>
              </div>
            </div>
            <div className="pt-6 max-w-md">
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={handlePhoneChange}
                maxLength="10"
                className="w-full px-5 py-4 border border-gray-200 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
              />
              <button
                onClick={handleSubmit}
                className="mt-4 w-full bg-gray-900 text-white py-4 px-6 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200 shadow-sm"
              >
                Get the best quote for you
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              {/* Your bike image */}
              <img 
                src={HeroBikeImage}
                alt="Bike selling illustration" 
                className="w-full max-w-md"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden px-4 pt-6 pb-12 text-center" style={{ backgroundColor: '#f5f8fe' }}>
        <h1 className="text-2xl font-bold text-red-500 leading-tight mb-6">
          Sell your bike at the best<br />price in Delhi
        </h1>
        <div className="flex justify-center py-6">
          <div className="relative">
            {/* Your bike image for mobile */}
            <img 
              src={HeroBikeImage}
              alt="Bike selling illustration" 
              className="w-full max-w-xs"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
        </div>
        <div className="space-y-4 text-left max-w-sm mx-auto">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <img src={img1} alt="" />
            </div>
            <span className="text-base font-medium text-gray-800">Instant Online Quote</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <img src={img2} alt="" />
            </div>
            <span className="text-base font-medium text-gray-800">Hassle-Free Inspection</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <img src={img3} alt="" />
            </div>
            <span className="text-base font-medium text-gray-800">Seamless Ownership Transfer</span>
          </div>
        </div>
        <div className="space-y-4 pt-6 max-w-sm mx-auto">
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={handlePhoneChange}
            maxLength="10"
            className="w-full px-4 py-4 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white shadow-sm"
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-gray-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200 shadow-sm"
          >
            Get the best quote for you
          </button>
        </div>
        
        {/* WhatsApp Button - Black Logo */}
        <div className="fixed bottom-6 right-6 z-50">
          <button className="bg-white hover:bg-gray-100 text-black p-4 rounded-full shadow-lg transition-colors duration-200 border border-gray-200">
            {/* Black WhatsApp SVG Logo */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;