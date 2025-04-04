
import React, { useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X, Plus } from 'lucide-react';

const SkillsForm = () => {
  const { resumeData, addSkill, removeSkill } = useResume();
  const [skillName, setSkillName] = useState('');

  const handleAddSkill = () => {
    if (!skillName.trim()) return;
    
    addSkill({ name: skillName.trim() });
    setSkillName('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Skills</h3>
      
      <div className="flex gap-2">
        <div className="flex-grow">
          <Input
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a skill (e.g., JavaScript, Project Management)"
          />
        </div>
        <Button 
          onClick={handleAddSkill} 
          disabled={!skillName.trim()}
          className="bg-workify-blue hover:bg-blue-700"
        >
          <Plus size={18} />
          Add
        </Button>
      </div>
      
      {resumeData.skills.length > 0 && (
        <div className="mt-4">
          <Label className="mb-2 block">Your Skills</Label>
          <div className="flex flex-wrap gap-2 mt-2">
            {resumeData.skills.map((skill) => (
              <div 
                key={skill.id} 
                className="flex items-center gap-1 bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
              >
                <span>{skill.name}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeSkill(skill.id)}
                  className="h-5 w-5 p-0 ml-1 text-gray-500 hover:text-red-500"
                >
                  <X size={14} />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="bg-gray-50 p-4 rounded-md mt-6">
        <p className="text-sm text-gray-700">
          <strong>Tip:</strong> Include a mix of technical skills (programming languages, tools) and soft skills 
          (communication, leadership) that are relevant to the jobs you're applying for.
        </p>
      </div>
    </div>
  );
};

export default SkillsForm;
