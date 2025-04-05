
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface JobDescriptionProps {
  description: string;
}

const JobDescription: React.FC<JobDescriptionProps> = ({ description }) => {
  return (
    <Card className="shadow-sm mb-6">
      <CardContent className="pt-6">
        <h2 className="text-xl font-bold mb-4">Job Description</h2>
        <div 
          className="prose max-w-none" 
          dangerouslySetInnerHTML={{ __html: description }} 
        />
      </CardContent>
    </Card>
  );
};

export default JobDescription;
