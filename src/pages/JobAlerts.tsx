
import React from 'react';
import { MapPin, Clock, Bell } from 'lucide-react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AlertItem = ({ title, company, location, posted, onClick }: { 
  title: string;
  company: string;
  location: string;
  posted: string;
  onClick: () => void;
}) => {
  return (
    <div className="job-card flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-700 mb-2">{company}</p>
        
        <div className="flex flex-wrap gap-3 mb-2">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-gray-600 text-sm">{location}</span>
          </div>
          
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-gray-600 text-sm">Posted: {posted}</span>
          </div>
        </div>
      </div>
      
      <button 
        className="btn-primary mt-4 md:mt-0"
        onClick={onClick}
      >
        More Details
      </button>
    </div>
  );
};

const JobAlerts = () => {
  const alerts = [
    { title: 'Senior Developer', company: 'Tech Innovations Inc.', location: 'San Francisco, CA', posted: 'Today' },
    { title: 'Marketing Specialist', company: 'DataCorp United Inc.', location: 'New York, NY', posted: '1 day ago' },
    { title: 'Product Manager', company: 'Innovate Ventures Inc.', location: 'Los Angeles, CA', posted: '2 days ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <PageHeader 
        title="Job Alerts"
        subtitle="Never miss an opportunity, receive job alerts instantly"
        backgroundImage="/lovable-uploads/431ccb7e-e5e8-446e-8ff9-0ba688240e45.png"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {alerts.map((alert, index) => (
              <AlertItem 
                key={index}
                title={alert.title}
                company={alert.company}
                location={alert.location}
                posted={alert.posted}
                onClick={() => {}}
              />
            ))}
            
            <div className="mt-8 text-center">
              <button className="bg-white border border-workify-blue text-workify-blue py-3 px-6 rounded-md font-medium hover:bg-gray-50 transition-colors">
                View All Openings
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-workify-navy rounded-2xl p-6 text-white">
              <div className="flex items-center mb-6">
                <Bell className="h-6 w-6 mr-2" />
                <h3 className="text-xl font-bold">Create New Alert</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block mb-2">Job Title:</label>
                  <Input 
                    type="text" 
                    placeholder="Enter job title..." 
                    className="bg-white text-gray-900 w-full"
                  />
                </div>
                
                <div>
                  <label className="block mb-2">Company:</label>
                  <Input 
                    type="text" 
                    placeholder="Enter company name..." 
                    className="bg-white text-gray-900 w-full"
                  />
                </div>
                
                <div>
                  <label className="block mb-2">Location:</label>
                  <Input 
                    type="text" 
                    placeholder="Enter location..." 
                    className="bg-white text-gray-900 w-full"
                  />
                </div>
                
                <div className="flex justify-between pt-4">
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                    Edit/Delete
                  </Button>
                  <Button className="bg-white text-workify-navy hover:bg-gray-100">
                    Create
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAlerts;
