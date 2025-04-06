
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Building, MapPin, Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import JobCard from '@/components/JobCard';

// Mock job data for the featured section
const featuredJobs = [
  {
    id: 1,
    title: "Senior Product Designer",
    company: "CompanyName 1",
    location: "San Francisco, CA",
    salary: "$80-120k/year",
    skills: ["Full-time", "Remote"]
  },
  {
    id: 2,
    title: "Senior Product Designer",
    company: "CompanyName 2",
    location: "New York, NY",
    salary: "$80-120k/year",
    skills: ["Full-time", "Remote"]
  },
  {
    id: 3,
    title: "Senior Product Designer",
    company: "CompanyName 3",
    location: "Remote",
    salary: "$80-120k/year",
    skills: ["Full-time", "Remote"]
  }
];

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
          {featuredJobs.map((job) => (
            <div key={job.id} className="flex flex-col h-full">
              <JobCard
                title={job.title}
                company={job.company}
                location={job.location}
                salary={job.salary}
                skills={job.skills}
              >
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-workify-blue font-medium">{job.salary}</span>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/job-details/${job.id}`}>Apply Now</Link>
                  </Button>
                </div>
              </JobCard>
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
