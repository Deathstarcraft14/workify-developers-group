
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import SearchForm from '../components/home/SearchForm';
import FeatureSection from '../components/home/FeatureSection';
import FeaturedJobs from '../components/home/FeaturedJobs';
import CallToAction from '../components/home/CallToAction';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const handleSearch = (searchData: {
    searchTerm: string;
    jobType: string;
    location: string;
    salary: string;
  }) => {
    console.log('Searching for:', searchData);
    // In a real app, this would trigger an API call to search for jobs
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <PageHeader 
        title="Welcome to Workify" 
        subtitle="Where Job Hunting is Easier"
        backgroundImage="/lovable-uploads/7c48a66b-e0a2-41c2-8837-b785a1799698.png"
      >
        <div className="mt-8">
          <SearchForm onSearch={handleSearch} />
        </div>
        
        <div className="mt-6 md:mt-12 flex flex-col items-center">
          <img src="/lovable-uploads/791c5abf-a844-481a-b4b0-8248c6f77267.png" alt="Workify Logo" className="h-32 w-32 md:h-48 md:w-48 mb-4" />
          
          <div className="flex flex-wrap gap-3 justify-center mt-4">
            <Link to="/jobs">
              <Button className="bg-workify-blue hover:bg-blue-800 text-white flex items-center gap-2">
                Browse Jobs <ArrowRight size={16} />
              </Button>
            </Link>
            <Link to="/resume">
              <Button variant="outline" className="border-workify-blue text-workify-blue hover:bg-workify-blue hover:text-white flex items-center gap-2">
                Create Resume <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </PageHeader>
      
      <FeatureSection />
      <FeaturedJobs />
      <CallToAction />
    </div>
  );
};

export default Index;
