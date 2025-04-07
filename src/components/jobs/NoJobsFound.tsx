
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NoJobsFoundProps {
  onClearFilters: () => void;
}

const NoJobsFound: React.FC<NoJobsFoundProps> = ({ onClearFilters }) => {
  return (
    <div className="text-center py-12">
      <div className="text-gray-400 mb-4">
        <Search size={48} className="mx-auto" />
      </div>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">No jobs found</h3>
      <p className="text-gray-500 mb-6">
        Try adjusting your search criteria or removing some filters
      </p>
      <Button onClick={onClearFilters}>Clear all filters</Button>
    </div>
  );
};

export default NoJobsFound;
