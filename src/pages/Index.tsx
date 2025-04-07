
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import SearchForm from '../components/home/SearchForm';
import FeatureSection from '../components/home/FeatureSection';
import FeaturedJobs from '../components/home/FeaturedJobs';
import CallToAction from '../components/home/CallToAction';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Briefcase } from 'lucide-react';

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
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mt-6 max-w-2xl mx-auto">
            <Link to="/jobs">
              <Button className="bg-workify-blue hover:bg-blue-800 text-white w-full sm:w-auto flex items-center gap-2 py-6 px-8">
                <Briefcase size={20} />
                <div>
                  <div className="text-lg font-medium">Browse Jobs</div>
                  <div className="text-xs opacity-80">Find your next opportunity</div>
                </div>
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            
            <Link to="/resume">
              <Button variant="outline" className="border-workify-blue text-workify-blue hover:bg-workify-blue hover:text-white w-full sm:w-auto flex items-center gap-2 py-6 px-8">
                <FileText size={20} />
                <div>
                  <div className="text-lg font-medium">Build Resume</div>
                  <div className="text-xs opacity-80">Create a professional CV</div>
                </div>
                <ArrowRight size={16} className="ml-2" />
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
