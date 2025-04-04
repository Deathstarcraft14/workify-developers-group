
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, Building, DollarSign, FileText, Share2, Bookmark, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ApplyJobForm from '@/components/ApplyJobForm';

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
            <Card className="shadow-sm mb-6">
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-white rounded-lg mr-4 flex items-center justify-center border border-gray-100">
                    <img src={job.companyLogo} alt={job.company} className="h-12 w-12 object-contain" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold mb-1">{job.title}</h1>
                    <p className="text-gray-600 mb-2">{job.company}</p>
                    
                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Posted {job.postedDate}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Briefcase className="h-4 w-4 mr-1" />
                        <span>{job.employmentType}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill, index) => (
                        <span key={index} className="badge">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm mb-6">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Job Description</h2>
                <div className="prose max-w-none" 
                     dangerouslySetInnerHTML={{ __html: job.description }} />
              </CardContent>
            </Card>
          </div>
          
          {/* Apply Column */}
          <div className="lg:col-span-1">
            <Card className="shadow-sm sticky top-4">
              <CardContent className="pt-6">
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">Job Overview</h3>
                  
                  <div className="flex items-center justify-between py-3 border-b">
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="h-4 w-4 mr-2" />
                      <span>Salary</span>
                    </div>
                    <span className="font-medium">{job.salary}</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b">
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="h-4 w-4 mr-2" />
                      <span>Job Type</span>
                    </div>
                    <span className="font-medium">{job.employmentType}</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b">
                    <div className="flex items-center text-gray-600">
                      <Building className="h-4 w-4 mr-2" />
                      <span>Experience</span>
                    </div>
                    <span className="font-medium">{job.experience}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full bg-workify-blue" onClick={handleApply}>
                    Apply Now
                  </Button>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1" onClick={handleSaveJob}>
                      <Bookmark className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" className="flex-1" onClick={handleShareJob}>
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                  
                  <Link to="/quick-apply">
                    <Button variant="outline" className="w-full">
                      <FileText className="h-4 w-4 mr-2" />
                      Quick Apply
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
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
