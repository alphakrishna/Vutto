import React, { useState } from "react";
import logo from '../assets/Vutto-logo.png';
import { Search, Menu, X, ChevronDown, ArrowLeft } from "lucide-react";
import homeIcon from '../assets/homeIcon.png'; 
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Bangalore");
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);

  const cities = [
    "Bangalore",
    "Mumbai", 
    "Delhi",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Kolkata",
    "Ahmedabad",
    "Surat",
    "Jaipur"
  ];

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsCityDropdownOpen(false);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block bg-white border-b border-gray-200 p-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <img src={logo} alt="Vutto Logo" className="h-6 w-auto" />
            
            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search by brand or model"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-gray-50"
                />
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="flex items-center space-x-8">
              <a href="#" className="font-medium text-sm  transition-colors" style={{ color: 'var(--primary-color)'}}>Buy</a>
              <a href="#" className="text-gray-700 font-medium text-sm hover:text-gray-900 transition-colors">Sell</a>
              <a href="#" className="text-gray-700 font-medium text-sm hover:text-gray-900 transition-colors">Shortlists</a>
              <a href="#" className="text-gray-700 font-medium text-sm hover:text-gray-900 transition-colors">Profile</a>
              <div className="relative">
                <div 
                  className="flex items-center space-x-1 text-gray-700 cursor-pointer hover:text-gray-900 transition-colors px-4 py-2 rounded-full border border-gray-300 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setIsCityDropdownOpen(!isCityDropdownOpen);
                    }
                  }}
                >
                  <span className="font-medium text-sm">{selectedCity}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isCityDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
                
                {isCityDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-2xl shadow-lg z-50 max-h-60 overflow-y-auto">
                    {cities.map((city) => (
                      <button
                        key={city}
                        onClick={() => handleCitySelect(city)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                          selectedCity === city 
                            ? 'bg-red-50 text-red-600 font-medium' 
                            : 'text-gray-700'
                        }`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <span className="text-gray-700 font-medium text-sm">+91 9738423546</span>
            </nav>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center py-2">
          <img src={homeIcon} alt="Home Icon" className="mr-3 cursor-pointer" />
          {'>'} &nbsp; Sell
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden bg-white border-b border-gray-200">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between px-4 py-4">
          <button className="p-1 hover:bg-gray-50 rounded-md transition-colors">
            <ArrowLeft className="h-6 w-6 text-gray-700" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Sell your bike</h1>
          <div className="w-6"></div> {/* Spacer for center alignment */}
        </div>
      </header>
    </>
  );
};

export default Header;