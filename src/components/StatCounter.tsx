
import React from 'react';

interface StatCounterProps {
  count: string;
  label: string;
  iconSrc?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ count, label, iconSrc }) => {
  return (
    <div className="stat-counter">
      <div className="flex flex-col items-center">
        {iconSrc && (
          <div className="mb-2">
            <img src={iconSrc} alt={label} className="w-6 h-6 object-contain mx-auto" />
          </div>
        )}
        <span className="text-4xl font-bold text-workify-blue">{count}</span>
        <span className="text-gray-600 mt-1">{label}</span>
      </div>
    </div>
  );
};

export default StatCounter;
