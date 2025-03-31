
import React from 'react';

interface StatCounterProps {
  count: string;
  label: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ count, label }) => {
  return (
    <div className="text-center px-4">
      <span className="text-2xl md:text-3xl font-bold text-workify-blue">{count}</span>
      <span className="text-lg md:text-xl text-gray-700"> {label}</span>
    </div>
  );
};

export default StatCounter;
