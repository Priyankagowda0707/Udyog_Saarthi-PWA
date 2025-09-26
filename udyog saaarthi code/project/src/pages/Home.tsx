import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, BookOpen, Award, ArrowRight, TrendingUp, Shield, Heart } from 'lucide-react';

export const Home: React.FC = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: 'Find Jobs',
      description: 'Discover opportunities under 4% reservation in government and PSU jobs',
      link: '/jobs',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      title: 'Training Centers',
      description: 'Find nearby coaching centers and training institutes',
      link: '/coaching',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: 'Study Materials',
      description: 'Access accessible study materials for competitive exams',
      link: '/study-materials',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: 'Parent Guide',
      description: 'Guidance and support resources for families',
      link: '/parent-guide',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const stats = [
    { number: '64%', label: 'Persons with disabilities unemployed', color: 'text-red-600' },
    { number: '4%', label: 'Reservation in government jobs', color: 'text-blue-600' },
    { number: '1%', label: 'Reservation for D&E category', color: 'text-green-600' },
    { number: '100+', label: 'Training centers', color: 'text-purple-600' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Udyog Saarthi
              <span className="block text-blue-200 text-2xl md:text-3xl font-normal mt-2">
                Employment Opportunities for Persons with Disabilities
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100 leading-relaxed">
              Leverage 4% reservation in government jobs. Training, guidance and employment opportunities all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/jobs"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                Find Jobs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-all duration-300"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive employment and training facilities for persons with disabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105"
              >
                <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                <div className="p-6">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 font-medium">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Udyog Saarthi?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Simple and Accessible</h3>
              <p className="text-gray-600">
                Easy-to-understand information, large fonts, and fully accessible interface with screen reader support.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliable Information</h3>
              <p className="text-gray-600">
                All information is sourced from government sources and regularly updated.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Support</h3>
              <p className="text-gray-600">
                Personal guidance, counseling services, and 24/7 support available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Career Journey Today
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Thousands of persons with disabilities have already found their dream jobs through Udyog Saarthi.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
          >
            Register Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};