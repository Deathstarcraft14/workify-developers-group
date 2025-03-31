
import React from 'react';
import { ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import PageHeader from '../components/PageHeader';

const QuickApply = () => {
  const jobCards = [
    { bgColor: '#e0f7fa', title: 'Senior UI Developer', company: 'Tech Innovations Inc.', location: 'Remote', salary: '$120/hr' },
    { bgColor: '#f0faf0', title: 'Senior UI Developer', company: 'Tech Innovations Inc.', location: 'Remote', salary: '$120/hr' },
    { bgColor: '#fff8e1', title: 'Senior UI Developer', company: 'Tech Innovations Inc.', location: 'Remote', salary: '$120/hr' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <PageHeader 
        title="Quick Apply"
        subtitle="Streamline your job application process"
        backgroundImage="/lovable-uploads/704f738a-0952-4f67-9f38-34450ef3e395.png"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="relative">
          <div className="flex overflow-x-auto pb-4 gap-6">
            {jobCards.map((job, index) => (
              <div key={index} className="min-w-[300px] w-[300px]">
                <JobCard
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  salary={job.salary}
                  variant="quick-apply"
                  bgColor={job.bgColor}
                />
              </div>
            ))}
          </div>
          
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickApply;
