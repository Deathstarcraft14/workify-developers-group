
import React from 'react';
import { Skill } from '../../../context/ResumeContext';

interface ResumeSkillsProps {
  skills: Skill[];
}

const ResumeSkills: React.FC<ResumeSkillsProps> = ({ skills }) => {
  if (!skills || skills.length === 0) return null;
  
  return (
    <div>
      <h2 className="text-lg font-semibold border-b border-workify-blue pb-1 mb-3">SKILLS</h2>
      <div className="flex flex-wrap gap-2 mb-1">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="bg-gray-100 hover:bg-workify-lightBlue hover:text-workify-blue transition-colors duration-200 px-3 py-1 text-sm rounded-full border border-gray-200"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ResumeSkills;
