import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StoriesWeLove = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stories = [
    {
      id: 1,
      quote: "I didn't think selling my bike was so easy, Zuto helped me from figuring out a quote to the final inspection. They even picked up the bike from my location",
      author: "John Doe",
      vehicle: "2017 Hero Karizma",
      image: "src/assets/Man_photo.png" // Add your image path here
    },
    {
      id: 2,
      quote: "Amazing service and quick process. The team was professional and made everything hassle-free. Highly recommend to anyone looking to sell their bike.",
      author: "Sarah Smith",
      vehicle: "2019 Royal Enfield",
      image: "src/assets/Man_photo.png" // Add your image path here
    },
    {
      id: 3,
      quote: "Great experience from start to finish. The quote was fair and the pickup was convenient. Will definitely use again in the future.",
      author: "Mike Johnson",
      vehicle: "2020 Bajaj Pulsar",
      image: "src/assets/Man_photo.png" // Add your image path here
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-white py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Mobile Title */}
        <h2 className="text-2xl md:hidden font-semibold text-gray-900 mb-6 text-left">Stories we love</h2>
        
        {/* Desktop Title */}
        <h2 className="hidden md:block text-4xl font-semibold text-gray-900 mb-12 text-center">Stories we love</h2>

        <div className="relative">
          {/* Desktop Navigation Arrows - Only visible on desktop */}
          <button 
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-shadow z-10 items-center justify-center border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button 
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-shadow z-10 items-center justify-center border border-gray-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Mobile Slider Container */}
          <div className="md:hidden overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {stories.map((story, index) => (
                <div key={story.id} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="flex">
                      {/* Mobile Image Section */}
                      <div className="w-2/5 relative">
                        <div className="aspect-[3/4] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 relative overflow-hidden rounded-l-3xl">
                          <img 
                            src={story.image} 
                            alt={`${story.author} with their ${story.vehicle}`}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Mobile Content Section */}
                      <div className="w-3/5 p-4 flex flex-col justify-center">
                        <blockquote className="text-gray-800 text-sm leading-5 mb-3 font-normal">
                          "{story.quote}"
                        </blockquote>
                        
                        <div className="border-t border-gray-200 pt-3">
                          <div className="font-semibold text-gray-900 text-sm mb-0.5">
                            {story.author}
                          </div>
                          <div className="text-gray-500 text-xs font-normal">
                            {story.vehicle}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Slider Container */}
          <div className="hidden md:block overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {stories.map((story, index) => (
                <div key={story.id} className="flex-shrink-0" style={{ width: '95%', margin: '0 2rem' }}>
                  <div className="flex flex-row bg-white overflow-hidden shadow-sm border border-gray-100" style={{ borderRadius: '50px' }}>
                    {/* Desktop Image Section */}
                    <div className="w-1/2 relative">
                      <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 relative overflow-hidden">
                        <img 
                          src={story.image} 
                          alt={`${story.author} with their ${story.vehicle}`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        
                        {/* Overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/20"></div>
                      </div>
                    </div>

                    {/* Desktop Content Section */}
                    <div className="w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="mb-8">
                        <blockquote className="text-gray-700 text-lg leading-7 mb-6 font-normal">
                          "{story.quote}"
                        </blockquote>
                        
                        <div className="border-t border-gray-200 pt-6">
                          <div className="font-semibold text-gray-900 text-lg mb-1">
                            {story.author}
                          </div>
                          <div className="text-gray-600 text-base font-normal">
                            {story.vehicle}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Dots Indicator */}
          <div className="flex md:hidden justify-center mt-6 space-x-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gray-800' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Desktop Dots Indicator */}
          <div className="hidden md:flex justify-center mt-8 space-x-3">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gray-800 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesWeLove;