
import React from 'react';
import { Skill } from '../../../context/ResumeContext';

interface ResumeSkillsProps {
  skills: Skill[];
}

const ResumeSkills: React.FC<ResumeSkillsProps> = ({ skills }) => {
  if (!skills || skills.length === 0) return null;
  
  return (
    <div>
      <h2 className="text-lg font-semibold border-b pb-1 mb-2">SKILLS</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-100 px-2 py-1 text-sm rounded">
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ResumeSkills;
