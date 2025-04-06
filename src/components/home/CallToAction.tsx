
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-workify-lightGray">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to start your career journey?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Join thousands of job seekers who have found their dream jobs through Workify.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-workify-blue text-white px-8 py-6 text-lg">
            <Link to="/jobs">Find Jobs</Link>
          </Button>
          <Button variant="outline" asChild className="border-workify-blue text-workify-blue px-8 py-6 text-lg">
            <Link to="/signup">Post a Job</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
