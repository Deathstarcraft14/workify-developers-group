
import React from 'react';
import JobCard from '@/components/JobCard';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  skills: string[];
  jobType: string;
  posted: string;
}

interface JobResultsProps {
  jobs: Job[];
}

const JobResults: React.FC<JobResultsProps> = ({ jobs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          id={job.id}
          title={job.title}
          company={job.company}
          location={job.location}
          salary={job.salary}
          skills={job.skills}
          posted={job.posted}
        />
      ))}
    </div>
  );
};

export default JobResults;
