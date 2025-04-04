
import React from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import ResumeBuilder from '../components/resume/ResumeBuilder';
import ResumePreview from '../components/resume/ResumePreview';
import { ResumeProvider } from '../context/ResumeContext';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <PageHeader 
        title="Resume Builder" 
        subtitle="Create professional resumes easily and download them"
      />
      
      <ResumeProvider>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ResumeBuilder />
            <ResumePreview />
          </div>
        </div>
      </ResumeProvider>
    </div>
  );
};

export default Resume;
