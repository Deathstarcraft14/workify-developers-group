
import React from 'react';
import { X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ActiveFiltersProps {
  activeFilters: {type: string, value: string}[];
  onRemoveFilter: (filter: {type: string, value: string}) => void;
  onClearAllFilters: () => void;
}

const ActiveFilters: React.FC<ActiveFiltersProps> = ({
  activeFilters,
  onRemoveFilter,
  onClearAllFilters
}) => {
  if (activeFilters.length === 0) return null;

  return (
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
            onClick={() => onRemoveFilter(filter)}
          />
        </Badge>
      ))}
      <Button 
        variant="ghost" 
        size="sm" 
        className="text-xs text-gray-500 hover:text-gray-700 ml-2"
        onClick={onClearAllFilters}
      >
        Clear all
      </Button>
    </div>
  );
};

export default ActiveFilters;
