
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarIcon, BriefcaseIcon, MapPinIcon } from 'lucide-react';

interface ApplicationDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  application: Application;
}

export interface Application {
  id: string;
  jobTitle: string;
  company: string;
  status: 'applied' | 'reviewing' | 'accepted' | 'rejected';
  appliedDate: string;
  location?: string;
  jobType?: string;
  description?: string;
  salary?: string;
}

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

const ApplicationDetails: React.FC<ApplicationDetailsProps> = ({ 
  isOpen, 
  onClose, 
  application 
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md md:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{application.jobTitle}</DialogTitle>
          <DialogDescription className="text-base font-medium text-gray-700">
            {application.company}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <div className="flex items-center space-x-4 mb-4">
            {getStatusBadge(application.status)}
            <div className="flex items-center text-sm text-gray-500">
              <CalendarIcon className="w-4 h-4 mr-1" />
              Applied on {application.appliedDate}
            </div>
          </div>
          
          <div className="space-y-4">
            {application.location && (
              <div className="flex items-start">
                <MapPinIcon className="w-5 h-5 mr-2 mt-0.5 text-gray-500" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">{application.location}</p>
                </div>
              </div>
            )}
            
            {application.jobType && (
              <div className="flex items-start">
                <BriefcaseIcon className="w-5 h-5 mr-2 mt-0.5 text-gray-500" />
                <div>
                  <p className="font-medium">Job Type</p>
                  <p className="text-gray-600">{application.jobType}</p>
                </div>
              </div>
            )}
            
            {application.salary && (
              <div className="mt-4">
                <p className="font-medium">Salary Range</p>
                <p className="text-gray-600">{application.salary}</p>
              </div>
            )}
            
            {application.description && (
              <div className="mt-4">
                <p className="font-medium">Job Description</p>
                <p className="text-gray-600 mt-2">{application.description}</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-6 flex justify-end space-x-2">
          <Button variant="outline" onClick={onClose}>Close</Button>
          <Button>Contact Employer</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationDetails;
