import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Mail, GraduationCap, Bell, Search, MapPin, Filter, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import FeatureCard from '../components/FeatureCard';
import StatCounter from '../components/StatCounter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Index = () => {
  const images = {
    heroBackground: '/lovable-uploads/a1e3f2d8-02b0-443d-bc28-77a17c1ba1d5.png',
    companyLogos: ['/assets/company-logo-1.png', '/assets/company-logo-2.png', '/assets/company-logo-3.png'],
    featureIcons: {
      browse: '/assets/feature-browse.png',
      apply: '/assets/feature-apply.png',
      resume: '/assets/feature-resume.png',
      alerts: '/assets/feature-alerts.png'
    },
    statIcons: {
      jobs: '/assets/stat-jobs.png',
      companies: '/assets/stat-companies.png',
      applications: '/assets/stat-applications.png'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="header-section" 
           style={{backgroundImage: `linear-gradient(to right, rgba(248, 250, 252, 0.85), rgba(241, 245, 249, 0.85)), url(${images.heroBackground})`}}>
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-3/5 mb-8 lg:mb-0">
              <h1 className="welcome-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span>Welcome to </span>
                <span className="highlight">Workify</span>
              </h1>
              <p className="welcome-subheading text-xl mb-8">Where Job Hunting is Easier</p>
              
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input placeholder="Job title or keyword" className="pl-10" />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input placeholder="Location" className="pl-10" />
                  </div>
                  
                  <Button className="bg-workify-blue text-white">Search Jobs</Button>
                </div>
                
                <div className="flex items-center mt-4 text-sm">
                  <Button variant="ghost" size="sm" className="text-gray-500 px-0 flex items-center">
                    <Filter className="h-4 w-4 mr-1" />
                    Filters
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                  <div className="text-gray-400 mx-2">Popular:</div>
                  <div className="flex flex-wrap">
                    <Button variant="outline" size="sm" className="text-xs mr-2 mb-1">Remote</Button>
                    <Button variant="outline" size="sm" className="text-xs mr-2 mb-1">Full-time</Button>
                    <Button variant="outline" size="sm" className="text-xs mr-2 mb-1">Engineering</Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/5 flex justify-center">
              <img src="/lovable-uploads/791c5abf-a844-481a-b4b0-8248c6f77267.png" alt="Workify Logo" className="h-48 w-48" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-8 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between py-4">
            <StatCounter count="10k +" label="Available jobs" />
            <StatCounter count="1k +" label="Companies" />
            <StatCounter count="30" label="Applications in 1 day" />
          </div>
        </div>
      </div>
      
      <div className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 px-4 text-center">Getting Started...</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Link to="/jobs" className="h-full">
              <FeatureCard
                icon={<Briefcase size={48} className="text-workify-blue" />}
                title="Browse Jobs"
                description="Find the perfect role for you"
              />
            </Link>
            
            <Link to="/quick-apply" className="h-full">
              <FeatureCard
                icon={<Mail size={48} className="text-workify-blue" />}
                title="Quick Apply"
                description="Tired of doing the same process over and over?"
              />
            </Link>
            
            <Link to="/resume" className="h-full">
              <FeatureCard
                icon={<GraduationCap size={48} className="text-workify-blue" />}
                title="Resume Maker"
                description="Make the perfect resume"
              />
            </Link>
            
            <Link to="/alerts" className="h-full">
              <FeatureCard
                icon={<Bell size={48} className="text-workify-blue" />}
                title="Job Alerts"
                description="Get notified of all the new job openings!"
              />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Jobs</h2>
            <Link to="/jobs" className="text-workify-blue hover:underline">View all jobs →</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((job) => (
              <div key={job} className="job-card">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg mr-4 flex items-center justify-center text-workify-blue font-bold">
                    C{job}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Senior Product Designer</h3>
                    <p className="text-gray-500 text-sm">CompanyName {job}</p>
                    <div className="mt-2 flex flex-wrap">
                      <span className="badge">Full-time</span>
                      <span className="badge">Remote</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-workify-blue font-medium">$80-120k/year</span>
                  <Button variant="outline" size="sm">Apply Now</Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-workify-blue text-white">Load More Jobs</Button>
          </div>
        </div>
      </div>
      
      <div className="py-16 px-4 bg-workify-lightGray">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start your career journey?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of job seekers who have found their dream jobs through Workify.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-workify-blue text-white px-8 py-6 text-lg">
              Find Jobs
            </Button>
            <Button variant="outline" className="border-workify-blue text-workify-blue px-8 py-6 text-lg">
              Post a Job
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
