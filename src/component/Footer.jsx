import React from "react";
import {
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Mail
} from "lucide-react";
import footerImage from '/public/Footer.png';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 mb-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold text-gray-900 mb-4 text-sm">Services</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Buy used bikes</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Sell your bike</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Get instant quote</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Apply for loan</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Evaluate your bike</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Talk to expert</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-4 text-sm">Zuto</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About Zuto</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Blogs</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacy policy</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Careers</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Artist panel</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Terms of service</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Popular searches</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Sell used bike</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Auto used bikes</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Bikes online in Bangalore</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Suzuki</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Hero</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Bajaj</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Honda</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Royal Enfield</a></li>
          </ul>
        </div>
      </div>

      <div className="py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 mb-8 flex flex-col md:flex-row justify-between items-center">
          <div className="items-center mb-4 md:mb-0" style={{fontWeight: '800'}}>
            <div className="text-gray-600 text-sm">Connect with us</div> <br/>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 flex items-center ">
          <div className="text-gray-600 text-sm">©2024 Zuto</div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-8">
          <img 
            src={footerImage} 
            alt="Bike illustration" 
            className="w-full h-full object-contain"
          />
          </div>
    </footer>
  );
};

export default Footer;