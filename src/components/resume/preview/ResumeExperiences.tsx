
import React from 'react';
import { Experience } from '../../../context/ResumeContext';

interface ResumeExperiencesProps {
  experiences: Experience[];
}

const ResumeExperiences: React.FC<ResumeExperiencesProps> = ({ experiences }) => {
  if (!experiences || experiences.length === 0) return null;
  
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold border-b pb-1 mb-2">EXPERIENCE</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-medium">{exp.position}</h3>
            <span className="text-sm text-gray-600">
              {exp.startDate} - {exp.endDate || 'Present'}
            </span>
          </div>
          <p className="text-sm italic">{exp.company}</p>
          <p className="text-sm mt-1">{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ResumeExperiences;
