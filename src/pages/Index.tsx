
import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Mail, GraduationCap, Bell } from 'lucide-react';
import Navbar from '../components/Navbar';
import FeatureCard from '../components/FeatureCard';
import StatCounter from '../components/StatCounter';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="header-section">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-3/5 mb-8 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-gray-900">Welcome to </span>
                <span className="text-workify-blue">Workify</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">Where Job Hunting is Easier</p>
            </div>
            
            <div className="w-full lg:w-2/5 flex justify-center">
              <div className="bg-workify-blue bg-opacity-10 rounded-full p-8 relative">
                <div className="bg-workify-blue bg-opacity-20 rounded-full p-8">
                  <div className="bg-white rounded-full p-6 shadow-md">
                    <span className="text-workify-blue text-7xl font-bold">W</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Getting Started Section */}
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 px-4">Getting Started...</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Link to="/jobs">
              <FeatureCard
                icon={<Briefcase size={48} />}
                title="Browse Jobs"
                description="Find the perfect role for you"
              />
            </Link>
            
            <Link to="/quick-apply">
              <FeatureCard
                icon={<Mail size={48} />}
                title="Quick Apply"
                description="Tired of doing the same process over and over?"
              />
            </Link>
            
            <Link to="/resume">
              <FeatureCard
                icon={<GraduationCap size={48} />}
                title="Resume Maker"
                description="Make the perfect resume"
              />
            </Link>
            
            <Link to="/alerts">
              <FeatureCard
                icon={<Bell size={48} />}
                title="Job Alerts"
                description="Get notified of all the new job openings!"
              />
            </Link>
          </div>
          
          {/* Stats Section */}
          <div className="flex flex-wrap justify-center py-8 border-t border-b border-gray-200">
            <StatCounter count="10k +" label="Available jobs" />
            <StatCounter count="1k +" label="Companies" />
            <StatCounter count="30" label="Application in 1 day" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
