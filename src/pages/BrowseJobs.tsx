import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import JobSearchForm from '../components/jobs/JobSearchForm';
import ActiveFilters from '../components/jobs/ActiveFilters';
import JobResults from '../components/jobs/JobResults';
import NoJobsFound from '../components/jobs/NoJobsFound';
import JobsResultHeader from '../components/jobs/JobsResultHeader';
import { useToast } from '@/hooks/use-toast';

// Mock job data
const mockJobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    salary: "$120,000 - $150,000",
    skills: ["React", "Node.js", "AWS"],
    jobType: "Full-time",
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "UX/UI Designer",
    company: "Creative Solutions",
    location: "New York, NY",
    salary: "$90,000 - $110,000",
    skills: ["Figma", "Adobe XD", "Sketch"],
    jobType: "Full-time",
    posted: "1 week ago"
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "DataMetrics",
    location: "Remote",
    salary: "$110,000 - $140,000",
    skills: ["Python", "Machine Learning", "SQL"],
    jobType: "Full-time",
    posted: "3 days ago"
  },
  {
    id: 4,
    title: "Marketing Specialist",
    company: "Brand Builders",
    location: "Chicago, IL",
    salary: "$70,000 - $85,000",
    skills: ["Social Media", "Content Strategy", "SEO"],
    jobType: "Part-time",
    posted: "5 days ago"
  },
  {
    id: 5,
    title: "Frontend Developer",
    company: "WebVision",
    location: "Austin, TX",
    salary: "$85,000 - $110,000",
    skills: ["JavaScript", "React", "CSS"],
    jobType: "Contract",
    posted: "Just now"
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "CloudOps",
    location: "Seattle, WA",
    salary: "$130,000 - $160,000",
    skills: ["Kubernetes", "Docker", "CI/CD"],
    jobType: "Full-time",
    posted: "1 day ago"
  },
];

const locations = ["All Locations", "Remote", "San Francisco, CA", "New York, NY", "Chicago, IL", "Austin, TX", "Seattle, WA"];
const jobTypes = ["All Job Types", "Full-time", "Part-time", "Contract", "Internship"];

const BrowseJobs = () => {
  const [location, setLocation] = useState('All Locations');
  const [jobType, setJobType] = useState('All Job Types');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(mockJobs);
  const [activeFilters, setActiveFilters] = useState<{type: string, value: string}[]>([]);
  const { toast } = useToast();

  // Filter jobs based on selected filters and search query
  useEffect(() => {
    let result = [...mockJobs];
    
    // Apply location filter
    if (location !== 'All Locations') {
      result = result.filter(job => job.location === location);
    }
    
    // Apply job type filter
    if (jobType !== 'All Job Types') {
      result = result.filter(job => job.jobType === jobType);
    }
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        job => 
          job.title.toLowerCase().includes(query) || 
          job.company.toLowerCase().includes(query) ||
          job.skills.some(skill => skill.toLowerCase().includes(query))
      );
    }
    
    setFilteredJobs(result);
  }, [location, jobType, searchQuery]);

  // Update active filters when location or job type changes
  useEffect(() => {
    const newFilters = [];
    
    if (location !== 'All Locations') {
      newFilters.push({type: 'location', value: location});
    }
    
    if (jobType !== 'All Job Types') {
      newFilters.push({type: 'jobType', value: jobType});
    }
    
    setActiveFilters(newFilters);
  }, [location, jobType]);

  // Handle location change
  const handleLocationChange = (selectedLocation: string) => {
    setLocation(selectedLocation);
    toast({
      title: "Location filter updated",
      description: `Showing jobs in ${selectedLocation}`,
    });
  };

  // Handle job type change
  const handleJobTypeChange = (selectedJobType: string) => {
    setJobType(selectedJobType);
    toast({
      title: "Job type filter updated",
      description: `Showing ${selectedJobType.toLowerCase()} jobs`,
    });
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search results",
      description: `Found ${filteredJobs.length} jobs matching "${searchQuery}"`,
    });
  };

  // Remove a specific filter
  const removeFilter = (filter: {type: string, value: string}) => {
    if (filter.type === 'location') {
      setLocation('All Locations');
    } else if (filter.type === 'jobType') {
      setJobType('All Job Types');
    }
  };

  // Clear all filters
  const clearAllFilters = () => {
    setLocation('All Locations');
    setJobType('All Job Types');
    setSearchQuery('');
    toast({
      title: "Filters cleared",
      description: "Showing all available jobs",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <PageHeader 
        title="Browse Jobs"
        subtitle="Your Path to a Better Career Starts Here"
        backgroundImage="/lovable-uploads/8bd88026-6a15-42b3-95bf-012ad8157ecd.png"
      />
      
      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <JobSearchForm 
          searchQuery={searchQuery}
          location={location}
          jobType={jobType}
          locations={locations}
          jobTypes={jobTypes}
          onSearchChange={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
          onLocationChange={handleLocationChange}
          onJobTypeChange={handleJobTypeChange}
        />
        
        <ActiveFilters 
          activeFilters={activeFilters}
          onRemoveFilter={removeFilter}
          onClearAllFilters={clearAllFilters}
        />
        
        <JobsResultHeader jobCount={filteredJobs.length} />

        {/* Job Listings */}
        {filteredJobs.length > 0 ? (
          <JobResults jobs={filteredJobs} />
        ) : (
          <NoJobsFound onClearFilters={clearAllFilters} />
        )}
      </div>
    </div>
  );
};

export default BrowseJobs;
