
import React from 'react';

interface StatCounterProps {
  count: string;
  label: string;
  iconSrc?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ count, label, iconSrc }) => {
  return (
    <div className="text-center px-8 py-4 border-r last:border-r-0 border-gray-200">
      <div className="flex flex-col items-center">
        {iconSrc && (
          <div className="mb-2">
            <img src={iconSrc} alt={label} className="w-6 h-6 object-contain mx-auto" />
          </div>
        )}
        <span className="text-4xl font-bold text-workify-blue block">{count}</span>
        <span className="text-base text-gray-600 mt-1 block">{label}</span>
      </div>
    </div>
  );
};

export default StatCounter;
