
import React from 'react';

interface ResumeSummaryProps {
  summary: string;
}

const ResumeSummary: React.FC<ResumeSummaryProps> = ({ summary }) => {
  if (!summary) return null;
  
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold border-b pb-1 mb-2">SUMMARY</h2>
      <p className="text-sm text-gray-700">{summary}</p>
    </div>
  );
};

export default ResumeSummary;
