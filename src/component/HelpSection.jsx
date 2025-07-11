import React from "react";

const HelpSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">Need more help?</h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <button className="w-full sm:w-64 bg-gray-900 text-white font-medium px-12 py-4 rounded-full hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 shadow-lg whitespace-nowrap">
            Mail us
          </button>
          <button className="w-full sm:w-64 bg-green-600 text-white font-medium px-12 py-4 rounded-full hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg whitespace-nowrap">
            Talk to us on Whatsapp
          </button>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;