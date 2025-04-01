
import React from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';

const Applications = () => {
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
          
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border-b pb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium">Senior Software Engineer</h3>
                    <p className="text-gray-600">Tech Innovations Inc.</p>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-2">
                        Applied
                      </span>
                      <span>Applied on May 15, 2023</span>
                    </div>
                  </div>
                  <Button className="bg-workify-blue text-white">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Add the missing Button component
import { Button } from '@/components/ui/button';

export default Applications;
