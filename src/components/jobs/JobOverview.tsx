
import React from 'react';
import { DollarSign, Briefcase, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface JobOverviewProps {
  salary: string;
  employmentType: string;
  experience: string;
  children: React.ReactNode;
}

const JobOverview: React.FC<JobOverviewProps> = ({
  salary,
  employmentType,
  experience,
  children
}) => {
  return (
    <Card className="shadow-sm sticky top-4">
      <CardContent className="pt-6">
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Job Overview</h3>
          
          <div className="flex items-center justify-between py-3 border-b">
            <div className="flex items-center text-gray-600">
              <DollarSign className="h-4 w-4 mr-2" />
              <span>Salary</span>
            </div>
            <span className="font-medium">{salary}</span>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b">
            <div className="flex items-center text-gray-600">
              <Briefcase className="h-4 w-4 mr-2" />
              <span>Job Type</span>
            </div>
            <span className="font-medium">{employmentType}</span>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b">
            <div className="flex items-center text-gray-600">
              <Building className="h-4 w-4 mr-2" />
              <span>Experience</span>
            </div>
            <span className="font-medium">{experience}</span>
          </div>
        </div>
        
        {children}
      </CardContent>
    </Card>
  );
};

export default JobOverview;
