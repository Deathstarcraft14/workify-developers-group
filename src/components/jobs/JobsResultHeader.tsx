
import React from 'react';

interface JobsResultHeaderProps {
  jobCount: number;
}

const JobsResultHeader: React.FC<JobsResultHeaderProps> = ({ jobCount }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-lg font-semibold text-gray-700">
        {jobCount} {jobCount === 1 ? 'job' : 'jobs'} found
      </h2>
      <div className="text-sm text-gray-500">
        Sort by: <span className="font-medium">Most recent</span>
      </div>
    </div>
  );
};

export default JobsResultHeader;
