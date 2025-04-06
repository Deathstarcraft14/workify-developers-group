
import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Mail, GraduationCap, Bell } from 'lucide-react';
import FeatureCard from '../FeatureCard';
import StatCounter from '../StatCounter';

const FeatureSection: React.FC = () => {
  return (
    <div className="py-8 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Getting Started...</h2>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link to="/jobs" className="h-full">
            <FeatureCard
              icon={<Briefcase size={48} className="feature-icon" />}
              title="Browse Jobs"
              description="Find the perfect role for you"
            />
          </Link>
          
          <Link to="/quick-apply" className="h-full">
            <FeatureCard
              icon={<Mail size={48} className="feature-icon" />}
              title="Quick Apply"
              description="Tired of doing the same process over and over?"
            />
          </Link>
          
          <Link to="/resume" className="h-full">
            <FeatureCard
              icon={<GraduationCap size={48} className="feature-icon" />}
              title="Resume Maker"
              description="Make the perfect resume"
            />
          </Link>
          
          <Link to="/alerts" className="h-full">
            <FeatureCard
              icon={<Bell size={48} className="feature-icon" />}
              title="Job Alerts"
              description="Get notified of all the new job openings!"
            />
          </Link>
        </div>
        
        <div className="stats-container py-6 border-t border-gray-100">
          <StatCounter count="10k +" label="Available jobs" />
          <StatCounter count="1k +" label="Companies" />
          <StatCounter count="30" label="Application in 1 day" />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
