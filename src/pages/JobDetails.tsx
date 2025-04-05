
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import ApplyJobForm from '@/components/ApplyJobForm';
import JobDetailsHeader from '@/components/jobs/JobDetailsHeader';
import JobDescription from '@/components/jobs/JobDescription';
import JobOverview from '@/components/jobs/JobOverview';
import JobActionButtons from '@/components/jobs/JobActionButtons';

// Mock job data - in a real app, this would come from an API
const jobData = {
  id: '1',
  title: 'Senior Product Designer',
  company: 'Tech Innovations Inc.',
  location: 'San Francisco, CA (Remote Available)',
  postedDate: '2 days ago',
  salary: '$80,000 - $120,000 per year',
  employmentType: 'Full-time',
  experience: '3-5 years',
  description: `
    <p>We are looking for a Senior Product Designer to join our team and help us create exceptional user experiences.</p>
    
    <h4>Responsibilities:</h4>
    <ul>
      <li>Lead the design process for new features and products</li>
      <li>Collaborate with product managers, engineers, and stakeholders</li>
      <li>Create wireframes, prototypes, and high-fidelity designs</li>
      <li>Conduct user research and usability testing</li>
      <li>Develop and maintain design systems</li>
    </ul>
    
    <h4>Requirements:</h4>
    <ul>
      <li>3+ years of experience in product design</li>
      <li>Proficiency in design tools like Figma, Sketch, or Adobe XD</li>
      <li>Experience with user research and testing</li>
      <li>Strong portfolio showcasing your design process</li>
      <li>Excellent communication and collaboration skills</li>
    </ul>
    
    <h4>Benefits:</h4>
    <ul>
      <li>Competitive salary and equity</li>
      <li>Health, dental, and vision insurance</li>
      <li>Flexible work hours and location</li>
      <li>Professional development budget</li>
      <li>Home office stipend</li>
    </ul>
  `,
  skills: ['UI/UX Design', 'Figma', 'User Research', 'Prototyping', 'Design Systems'],
  companyLogo: '/lovable-uploads/431ccb7e-e5e8-446e-8ff9-0ba688240e45.png'
};

const JobDetails = () => {
  const { id } = useParams();
  // In a real app, we would fetch the job data based on the ID
  // For now, we'll use our mock data
  const job = jobData;
  
  const [isApplyFormOpen, setIsApplyFormOpen] = useState(false);

  const handleApply = () => {
    setIsApplyFormOpen(true);
  };

  const handleShareJob = () => {
    // In a real app, this would open a share dialog or copy to clipboard
    if (navigator.share) {
      navigator.share({
        title: `${job.title} at ${job.company}`,
        text: `Check out this job: ${job.title} at ${job.company}`,
        url: window.location.href,
      }).catch(err => {
        console.error('Error sharing:', err);
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard');
    }
  };

  const handleSaveJob = () => {
    // In a real app, this would save the job to user's saved jobs
    console.log('Job saved:', job.id);
    alert('Job saved to your favorites');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/jobs" className="inline-flex items-center text-workify-blue hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to jobs
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Details Column */}
          <div className="lg:col-span-2">
            <JobDetailsHeader
              title={job.title}
              company={job.company}
              location={job.location}
              postedDate={job.postedDate}
              employmentType={job.employmentType}
              skills={job.skills}
              companyLogo={job.companyLogo}
            />
            
            <JobDescription description={job.description} />
          </div>
          
          {/* Apply Column */}
          <div className="lg:col-span-1">
            <JobOverview
              salary={job.salary}
              employmentType={job.employmentType}
              experience={job.experience}
            >
              <JobActionButtons
                jobId={job.id}
                jobTitle={job.title}
                company={job.company}
                onApply={handleApply}
                onSave={handleSaveJob}
                onShare={handleShareJob}
              />
            </JobOverview>
          </div>
        </div>
      </div>
      
      <ApplyJobForm
        isOpen={isApplyFormOpen}
        onClose={() => setIsApplyFormOpen(false)}
        jobTitle={job.title}
        company={job.company}
      />
    </div>
  );
};

export default JobDetails;
