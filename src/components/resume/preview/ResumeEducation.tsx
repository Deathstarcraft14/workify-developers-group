
import React from 'react';
import { Education } from '../../../context/ResumeContext';

interface ResumeEducationProps {
  education: Education[];
}

const ResumeEducation: React.FC<ResumeEducationProps> = ({ education }) => {
  if (!education || education.length === 0) return null;
  
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold border-b pb-1 mb-2">EDUCATION</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-medium">{edu.degree}</h3>
            <span className="text-sm text-gray-600">
              {edu.startDate} - {edu.endDate || 'Present'}
            </span>
          </div>
          <p className="text-sm italic">{edu.school}</p>
        </div>
      ))}
    </div>
  );
};

export default ResumeEducation;
