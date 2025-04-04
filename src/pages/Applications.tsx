
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Check, X, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ApplicationDetails, { Application } from '../components/ApplicationDetails';

const Applications = () => {
  const { toast } = useToast();
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Sample application data
  const applications: Application[] = [
    {
      id: '1',
      jobTitle: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      status: 'applied',
      appliedDate: 'May 15, 2023',
      location: 'San Francisco, CA',
      jobType: 'Full-time',
      salary: '$120,000 - $150,000',
      description: 'As a Senior Software Engineer at Tech Innovations, you will be responsible for designing and implementing new features, improving performance, and ensuring the stability of our platform.'
    },
    {
      id: '2',
      jobTitle: 'UX/UI Designer',
      company: 'Creative Solutions',
      status: 'reviewing',
      appliedDate: 'May 20, 2023',
      location: 'Remote',
      jobType: 'Contract',
      salary: '$85,000 - $105,000',
      description: 'We are looking for a talented UX/UI Designer to create amazing user experiences for our products. You should have a strong portfolio and experience in creating wireframes, prototypes, and high-fidelity designs.'
    },
    {
      id: '3',
      jobTitle: 'Product Manager',
      company: 'Growth Startup',
      status: 'rejected',
      appliedDate: 'May 12, 2023',
      location: 'New York, NY',
      jobType: 'Full-time',
      description: 'As a Product Manager, you will work closely with engineering, design, and marketing teams to define product requirements and develop roadmaps for our SaaS platform.'
    },
    {
      id: '4',
      jobTitle: 'Frontend Developer',
      company: 'WebTech Solutions',
      status: 'accepted',
      appliedDate: 'May 5, 2023',
      location: 'Austin, TX',
      jobType: 'Full-time',
      salary: '$90,000 - $110,000',
      description: 'We are seeking a skilled Frontend Developer to join our team and help build responsive web applications using modern frameworks like React.'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'applied':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Applied</Badge>;
      case 'reviewing':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">In Review</Badge>;
      case 'accepted':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Accepted</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Rejected</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'applied':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'reviewing':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'accepted':
        return <Check className="w-4 h-4 text-green-500" />;
      case 'rejected':
        return <X className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const handleViewDetails = (application: Application) => {
    setSelectedApplication(application);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <PageHeader 
        title="Applications"
        subtitle="Track and manage your job applications"
        backgroundImage="/lovable-uploads/a1e3f2d8-02b0-443d-bc28-77a17c1ba1d5.png"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white shadow rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">My Applications</h2>
          
          {applications.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p className="mb-4">You haven't applied to any jobs yet.</p>
              <Button onClick={() => toast({ title: "Redirecting", description: "Taking you to browse jobs" })}>
                Browse Jobs
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {applications.map((application) => (
                <div key={application.id} className="border-b pb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium">{application.jobTitle}</h3>
                      <p className="text-gray-600">{application.company}</p>
                      <div className="mt-2 flex items-center text-sm text-gray-500 space-x-3">
                        <div className="flex items-center space-x-1">
                          {getStatusIcon(application.status)}
                          {getStatusBadge(application.status)}
                        </div>
                        <span>Applied on {application.appliedDate}</span>
                      </div>
                    </div>
                    <Button 
                      className="flex items-center gap-1" 
                      onClick={() => handleViewDetails(application)}
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedApplication && (
        <ApplicationDetails 
          isOpen={isDialogOpen} 
          onClose={closeDialog} 
          application={selectedApplication} 
        />
      )}
    </div>
  );
};

export default Applications;
