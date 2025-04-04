
import React, { useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ContactForm from './ContactForm';
import SummaryForm from './SummaryForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';

const ResumeBuilder = () => {
  const [activeTab, setActiveTab] = useState('contact');

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Build Your Resume</h2>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-5 mb-6">
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>
        
        <TabsContent value="contact" className="mt-4">
          <ContactForm />
        </TabsContent>
        
        <TabsContent value="summary" className="mt-4">
          <SummaryForm />
        </TabsContent>
        
        <TabsContent value="experience" className="mt-4">
          <ExperienceForm />
        </TabsContent>
        
        <TabsContent value="education" className="mt-4">
          <EducationForm />
        </TabsContent>
        
        <TabsContent value="skills" className="mt-4">
          <SkillsForm />
        </TabsContent>
      </Tabs>
      
      <div className="flex gap-2 mt-6">
        {activeTab !== 'contact' && (
          <Button 
            variant="outline" 
            onClick={() => {
              const tabs = ['contact', 'summary', 'experience', 'education', 'skills'];
              const currentIndex = tabs.indexOf(activeTab);
              setActiveTab(tabs[currentIndex - 1]);
            }}
          >
            Previous
          </Button>
        )}
        
        {activeTab !== 'skills' && (
          <Button 
            onClick={() => {
              const tabs = ['contact', 'summary', 'experience', 'education', 'skills'];
              const currentIndex = tabs.indexOf(activeTab);
              setActiveTab(tabs[currentIndex + 1]);
            }}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;
