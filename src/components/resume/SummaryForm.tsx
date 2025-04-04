
import React from 'react';
import { useResume } from '../../context/ResumeContext';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const SummaryForm = () => {
  const { resumeData, updateSummary } = useResume();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateSummary(e.target.value);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Professional Summary</h3>
      
      <div className="space-y-2">
        <Label htmlFor="summary">Write a short summary about yourself and your career goals</Label>
        <Textarea
          id="summary"
          value={resumeData.summary}
          onChange={handleChange}
          placeholder="Experienced software developer with 5+ years of experience in building web applications..."
          rows={6}
        />
      </div>
      
      <div className="bg-gray-50 p-4 rounded-md">
        <p className="text-sm text-gray-700">
          <strong>Tip:</strong> A good summary is concise (3-5 sentences) and highlights your most relevant skills, 
          experience, and accomplishments. Focus on what makes you unique and what value you can bring to potential employers.
        </p>
      </div>
    </div>
  );
};

export default SummaryForm;
