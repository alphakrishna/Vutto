// Main App Entry - App.jsx
import React from "react";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import HowItWorks from "./component/HowItWorks";
import StoriesWeLove from "./component/StoriesWeLove";
import FAQSection from "./component/FAQSection";
import HelpSection from "./component/HelpSection";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <HeroSection />
      <HowItWorks />
      <StoriesWeLove />
      <FAQSection />
      <HelpSection />
      <Footer />
    </div>
  );
};

export default App;
