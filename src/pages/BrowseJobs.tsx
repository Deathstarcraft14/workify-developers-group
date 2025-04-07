import React, { useState, useEffect } from 'react';
import { MapPin, ChevronDown, Search, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import PageHeader from '../components/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
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
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <Input
                placeholder="Search job titles, companies or skills..."
                className="pl-10"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex justify-between w-full sm:w-48">
                    <span className="flex items-center gap-2">
                      <MapPin size={16} />
                      {location}
                    </span>
                    <ChevronDown size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  {locations.map((loc) => (
                    <DropdownMenuItem 
                      key={loc} 
                      onClick={() => handleLocationChange(loc)}
                      className={location === loc ? "bg-gray-100 font-medium" : ""}
                    >
                      {loc}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex justify-between w-full sm:w-48">
                    <span>{jobType}</span>
                    <ChevronDown size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  {jobTypes.map((type) => (
                    <DropdownMenuItem 
                      key={type} 
                      onClick={() => handleJobTypeChange(type)}
                      className={jobType === type ? "bg-gray-100 font-medium" : ""}
                    >
                      {type}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button type="submit" className="bg-workify-blue hover:bg-blue-700">
                Find Jobs
              </Button>
            </div>
          </form>

          {/* Active filters */}
          {activeFilters.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-500">Active filters:</span>
              {activeFilters.map((filter, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="flex items-center gap-1 px-3 py-1"
                >
                  {filter.value}
                  <X 
                    size={14} 
                    className="cursor-pointer ml-1"
                    onClick={() => removeFilter(filter)}
                  />
                </Badge>
              ))}
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-xs text-gray-500 hover:text-gray-700 ml-2"
                onClick={clearAllFilters}
              >
                Clear all
              </Button>
            </div>
          )}
        </div>
        
        {/* Results count */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-700">
            {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found
          </h2>
          <div className="text-sm text-gray-500">
            Sort by: <span className="font-medium">Most recent</span>
          </div>
        </div>

        {/* Job Listings */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                company={job.company}
                location={job.location}
                salary={job.salary}
                skills={job.skills}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No jobs found</h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search criteria or removing some filters
            </p>
            <Button onClick={clearAllFilters}>Clear all filters</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseJobs;
