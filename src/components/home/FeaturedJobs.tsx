
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Building, MapPin, Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedJobs: React.FC = () => {
  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Jobs</h2>
          <Link to="/jobs" className="text-workify-blue hover:underline">View all jobs →</Link>
        </div>
        
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
  );
};

export default FeaturedJobs;
