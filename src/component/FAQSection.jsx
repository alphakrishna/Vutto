import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  "How does Zuto procure bikes?",
  "Are all your bikes Zuto certified?",
  "Does Zuto buy bikes that are registered outside Karnataka?",
  "Is the pricing of the bikes negotiable?",
  "Does Zuto offer trade-in options for customers looking to exchange their current motorcycles?",
  "What financing or payment plans does Zuto offer for purchasing motorcycles?",
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleShowMore = () => {
    if (!showAll) {
      // When showing more, expand all FAQs
      setShowAll(true);
      setOpenIndex('all');
    } else {
      // When showing less, collapse all FAQs
      setShowAll(false);
      setOpenIndex(null);
    }
  };

  return (
    <div className="bg-white py-8 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Feeling lost? FAQs</h2>
          <button
            onClick={handleShowMore}
            className="text-blue-500 hover:text-blue-700 text-base font-medium"
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.slice(0, showAll ? faqs.length : 6).map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-b-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-3 flex justify-between items-start text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start space-x-3 flex-1">
                  <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-900 font-medium text-base leading-relaxed pr-4">
                    {faq}
                  </span>
                </div>
                {(openIndex === index || openIndex === 'all') ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0 mt-2" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 mt-2" />
                )}
              </button>
              {(openIndex === index || openIndex === 'all') && (
                <div className="pb-6 pl-6">
                  <div className="text-gray-600 leading-relaxed">
                    This is a placeholder answer for the FAQ. Replace with actual content.
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;