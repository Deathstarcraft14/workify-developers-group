
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchFormProps {
  onSearch: (data: {
    searchTerm: string;
    jobType: string;
    location: string;
    salary: string;
  }) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [jobType, setJobType] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [salary, setSalary] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ searchTerm, jobType, location, salary });
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
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
  );
};

export default SearchForm;
