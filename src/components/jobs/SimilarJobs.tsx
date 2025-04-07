
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import JobCard from '@/components/JobCard';

// Mock similar jobs data
const similarJobsData = [
  {
    id: '2',
    title: 'UX Designer',
    company: 'Creative Solutions',
    location: 'New York, NY',
    posted: '3 days ago',
    skills: ['UI Design', 'Figma', 'User Testing']
  },
  {
    id: '3',
    title: 'UI/UX Design Lead',
    company: 'Digital Innovations',
    location: 'Remote',
    posted: '1 week ago',
    skills: ['Design Systems', 'Adobe XD', 'Team Leadership']
  }
];

interface SimilarJobsProps {
  currentJobId: string;
}

const SimilarJobs: React.FC<SimilarJobsProps> = ({ currentJobId }) => {
  // In a real app, we would filter jobs related to the current job
  // For now, we'll just display our mock data
  
  return (
    <Card className="shadow-sm mt-8">
      <CardContent className="pt-6">
        <h2 className="text-xl font-bold mb-4 text-workify-navy">Similar Jobs</h2>
        <Separator className="mb-4" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {similarJobsData.map(job => (
            <JobCard
              key={job.id}
              id={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              posted={job.posted}
              skills={job.skills}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SimilarJobs;
