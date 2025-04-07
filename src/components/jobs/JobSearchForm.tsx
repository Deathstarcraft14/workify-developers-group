
import React from 'react';
import { MapPin, ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface JobSearchFormProps {
  searchQuery: string;
  location: string;
  jobType: string;
  locations: string[];
  jobTypes: string[];
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
  onLocationChange: (loc: string) => void;
  onJobTypeChange: (type: string) => void;
}

const JobSearchForm: React.FC<JobSearchFormProps> = ({
  searchQuery,
  location,
  jobType,
  locations,
  jobTypes,
  onSearchChange,
  onSearchSubmit,
  onLocationChange,
  onJobTypeChange
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <form onSubmit={onSearchSubmit} className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <Input
            placeholder="Search job titles, companies or skills..."
            className="pl-10"
            value={searchQuery}
            onChange={onSearchChange}
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
                  onClick={() => onLocationChange(loc)}
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
                  onClick={() => onJobTypeChange(type)}
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
    </div>
  );
};

export default JobSearchForm;
