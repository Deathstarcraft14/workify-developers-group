
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Mail, 
  GraduationCap, 
  Bell, 
  Search, 
  MapPin, 
  Filter, 
  ChevronDown,
  Building,
  Calendar
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FeatureCard from '../components/FeatureCard';
import StatCounter from '../components/StatCounter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Index = () => {
  // State for filters
  const [jobType, setJobType] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [salary, setSalary] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', { searchTerm, jobType, location, salary });
    // In a real app, this would trigger an API call to search for jobs
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="header-section">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-3/5">
              <h1 className="welcome-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                <span>Welcome to </span>
                <span className="highlight">Workify</span>
              </h1>
              <p className="welcome-subheading text-xl mb-6">Where Job Hunting is Easier</p>
              
              {/* Search form */}
              <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <form onSubmit={handleSearch} className="space-y-4 md:space-y-0 md:flex md:space-x-3">
                  <div className="flex-grow">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        type="text"
                        placeholder="Job title, keyword, or company"
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-48">
                    <Select value={jobType} onValueChange={setJobType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Job Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full Time</SelectItem>
                        <SelectItem value="part-time">Part Time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full md:w-48">
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="new-york">New York</SelectItem>
                        <SelectItem value="san-francisco">San Francisco</SelectItem>
                        <SelectItem value="london">London</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full md:w-48">
                    <Select value={salary} onValueChange={setSalary}>
                      <SelectTrigger>
                        <SelectValue placeholder="Salary Range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-50k">$0 - $50k</SelectItem>
                        <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                        <SelectItem value="100k-150k">$100k - $150k</SelectItem>
                        <SelectItem value="150k+">$150k+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Button type="submit" className="w-full md:w-auto bg-workify-blue hover:bg-blue-700">
                      Search Jobs
                    </Button>
                  </div>
                </form>
              </div>
              
              <div className="mt-6 md:mt-12 md:hidden">
                <img src="/lovable-uploads/791c5abf-a844-481a-b4b0-8248c6f77267.png" alt="Workify Logo" className="h-32 w-32 mx-auto" />
              </div>
            </div>
            
            <div className="w-full lg:w-2/5 hidden md:flex justify-center">
              <img src="/lovable-uploads/791c5abf-a844-481a-b4b0-8248c6f77267.png" alt="Workify Logo" className="h-48 w-48" />
            </div>
          </div>
        </div>
      </div>
      
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
      
      <div className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Jobs</h2>
            <Link to="/jobs" className="text-workify-blue hover:underline">View all jobs →</Link>
          </div>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <Button variant="outline" className="flex items-center gap-1 rounded-full">
              <Calendar className="h-4 w-4" />
              <span>Date Posted</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="flex items-center gap-1 rounded-full">
              <Building className="h-4 w-4" />
              <span>Company Size</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="flex items-center gap-1 rounded-full">
              <MapPin className="h-4 w-4" />
              <span>Location</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="flex items-center gap-1 rounded-full">
              <Filter className="h-4 w-4" />
              <span>More Filters</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
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
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/job-details/${job}`}>Apply Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild className="bg-workify-blue text-white">
              <Link to="/jobs">Load More Jobs</Link>
            </Button>
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
            <Button asChild className="bg-workify-blue text-white px-8 py-6 text-lg">
              <Link to="/jobs">Find Jobs</Link>
            </Button>
            <Button variant="outline" asChild className="border-workify-blue text-workify-blue px-8 py-6 text-lg">
              <Link to="/signup">Post a Job</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
