import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">Udyog Saarthi</h2>
                <p className="text-gray-400 text-sm">Employment Opportunities</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              A platform dedicated to promoting employment opportunities for persons with disabilities and helping them leverage the 4% reservation in government jobs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/jobs" className="text-gray-300 hover:text-white transition-colors">Find Jobs</Link></li>
              <li><Link to="/coaching" className="text-gray-300 hover:text-white transition-colors">Training Centers</Link></li>
              <li><Link to="/study-materials" className="text-gray-300 hover:text-white transition-colors">Study Materials</Link></li>
              <li><Link to="/parent-guide" className="text-gray-300 hover:text-white transition-colors">Parent Guide</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300">1800-XXX-XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300">support@udyogsaarthi.gov.in</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-blue-400 mt-1" />
                <span className="text-gray-300">
                  Ministry of Social Justice and Empowerment<br />
                  Government of India, New Delhi
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Government Links */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-wrap justify-center space-x-6 mb-4">
            <a href="https://disabilityaffairs.gov.in/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
              <span>Department of Empowerment of Persons with Disabilities</span>
              <ExternalLink size={14} />
            </a>
            <a href="https://niepmd.tn.nic.in/" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
              <span>NIEPMD</span>
              <ExternalLink size={14} />
            </a>
            <a href="https://www.india.gov.in/" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
              <span>Government of India</span>
              <ExternalLink size={14} />
            </a>
          </div>
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2025 Udyog Saarthi. All rights reserved. | Privacy Policy | Terms of Service</p>
            <p className="mt-1">This website is developed in accordance with Government of India guidelines.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};