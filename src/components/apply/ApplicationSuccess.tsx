
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ApplicationSuccessProps {
  jobTitle: string;
  company: string;
}

const ApplicationSuccess: React.FC<ApplicationSuccessProps> = ({ jobTitle, company }) => {
  return (
    <div className="text-center py-6">
      <div className="flex justify-center mb-4">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>
      <h3 className="text-xl font-bold mb-2">Application Submitted!</h3>
      <p className="text-gray-600 mb-4">
        Your application for <span className="font-semibold">{jobTitle}</span> at {company} has been submitted successfully.
      </p>
      <div className="border-t border-gray-200 pt-4 mt-6">
        <p className="text-sm text-gray-500">
          You will receive a confirmation email shortly. The employer will contact you if your profile matches their requirements.
        </p>
      </div>
    </div>
  );
};

export default ApplicationSuccess;
