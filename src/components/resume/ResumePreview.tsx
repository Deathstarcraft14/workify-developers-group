
import React from 'react';
import { useResume } from '../../context/ResumeContext';
import ResumeActions from './preview/ResumeActions';
import ResumeHeader from './preview/ResumeHeader';
import ResumeSummary from './preview/ResumeSummary';
import ResumeExperiences from './preview/ResumeExperiences';
import ResumeEducation from './preview/ResumeEducation';
import ResumeSkills from './preview/ResumeSkills';

const ResumePreview = () => {
  const { resumeData } = useResume();
  const resumeRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <ResumeActions resumeData={resumeData} />
      
      <div 
        ref={resumeRef}
        className="border border-gray-200 rounded-lg p-8 min-h-[600px] bg-white"
      >
        <ResumeHeader contact={resumeData.contact} />
        <ResumeSummary summary={resumeData.summary} />
        <ResumeExperiences experiences={resumeData.experiences} />
        <ResumeEducation education={resumeData.education} />
        <ResumeSkills skills={resumeData.skills} />
      </div>
    </div>
  );
};

export default ResumePreview;
