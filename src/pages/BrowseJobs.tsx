
import React, { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import PageHeader from '../components/PageHeader';

const BrowseJobs = () => {
  const [location, setLocation] = useState('All Locations');
  const [jobType, setJobType] = useState('Job Type');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <PageHeader 
        title="Browse Jobs"
        subtitle="Your Path to a Better Career Starts Here"
        backgroundImage="/lovable-uploads/8bd88026-6a15-42b3-95bf-012ad8157ecd.png"
      />
      
      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="relative">
            <button 
              className="flex items-center justify-between w-48 px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700"
              onClick={() => {}}
            >
              <span>{location}</span>
              <ChevronDown size={20} />
            </button>
          </div>
          
          <div className="relative">
            <button 
              className="flex items-center justify-between w-48 px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700"
              onClick={() => {}}
            >
              <span>{jobType}</span>
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
        
        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <JobCard
              key={index}
              title="Senior Software Engineer"
              company="Tech Innovations Inc."
              location="San Francisco, CA"
              salary="$120,000 - $150,000"
              skills={["React", "Cloud", "AI"]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseJobs;
