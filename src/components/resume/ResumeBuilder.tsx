
import React, { useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import ContactForm from './ContactForm';
import SummaryForm from './SummaryForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';

const ResumeBuilder = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const { toast } = useToast();
  const { 
    updateContact, 
    updateSummary, 
    addExperience, 
    addEducation, 
    addSkill 
  } = useResume();

  const loadSampleResume = () => {
    // Sample contact information
    updateContact({
      fullName: 'Alex Johnson',
      email: 'alex.johnson@example.com',
      phone: '(555) 123-4567',
      location: 'San Francisco, CA',
      linkedin: 'linkedin.com/in/alexjohnson',
      website: 'alexjohnson.dev'
    });

    // Sample summary
    updateSummary('Experienced software developer with 5+ years of experience building web applications with React, TypeScript, and Node.js. Passionate about creating intuitive user interfaces and solving complex problems through clean, maintainable code.');

    // Sample experiences
    addExperience({
      company: 'Tech Solutions Inc.',
      position: 'Senior Frontend Developer',
      location: 'San Francisco, CA',
      startDate: '2020-06',
      endDate: '',
      description: 'Led a team of 5 developers to build a modern React application used by thousands of customers. Improved site performance by 35% and implemented CI/CD pipelines.'
    });

    addExperience({
      company: 'Innovation Labs',
      position: 'Frontend Developer',
      location: 'Oakland, CA',
      startDate: '2018-03',
      endDate: '2020-05',
      description: 'Developed responsive web applications using React and Redux. Collaborated with UI/UX designers to implement user-friendly interfaces.'
    });

    // Sample education
    addEducation({
      school: 'University of California, Berkeley',
      degree: 'Bachelor of Science',
      fieldOfStudy: 'Computer Science',
      startDate: '2014-08',
      endDate: '2018-05',
      description: 'GPA: 3.8/4.0. Dean\'s List. Computer Science Student Association.'
    });

    // Sample skills
    const skills = ['React', 'TypeScript', 'JavaScript', 'Node.js', 'HTML/CSS', 'Redux', 'Git', 'Agile'];
    skills.forEach(skill => addSkill({ name: skill }));

    // Show success message
    toast({
      title: "Sample Resume Loaded",
      description: "You can now edit this sample or use it as a template.",
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Build Your Resume</h2>
        <Button 
          variant="outline"
          onClick={loadSampleResume}
          className="text-workify-blue hover:bg-workify-blue hover:text-white"
        >
          Load Sample Resume
        </Button>
      </div>
      
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
            className="bg-workify-blue hover:bg-blue-800"
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;
