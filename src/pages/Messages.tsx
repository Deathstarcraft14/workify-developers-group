
import React from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import { MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Messages = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <PageHeader 
        title="Messages"
        subtitle="Connect with employers and recruiters"
        backgroundImage="/lovable-uploads/a1e3f2d8-02b0-443d-bc28-77a17c1ba1d5.png"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Conversations List */}
            <div className="border-r">
              <div className="p-4 border-b">
                <Input placeholder="Search conversations..." />
              </div>
              <div className="overflow-y-auto h-[500px]">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div 
                    key={item} 
                    className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${item === 1 ? 'bg-blue-50' : ''}`}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                          <MessageSquare className="h-5 w-5 text-gray-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">Recruiter {item}</h4>
                        <p className="text-xs text-gray-500 mt-1 truncate">
                          Last message preview goes here...
                        </p>
                      </div>
                      <div className="text-xs text-gray-400">
                        {item === 1 ? '2m ago' : `${item}d ago`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Chat Area */}
            <div className="col-span-2 flex flex-col h-[600px]">
              <div className="p-4 border-b">
                <h3 className="font-medium">Recruiter 1</h3>
                <p className="text-xs text-gray-500">Tech Innovations Inc.</p>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="flex items-end">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-gray-600" />
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg rounded-bl-none p-3 max-w-[70%]">
                    <p className="text-sm">Hello! We're interested in your profile for the Senior Software Engineer position.</p>
                    <span className="text-xs text-gray-500 mt-1">10:30 AM</span>
                  </div>
                </div>
                
                <div className="flex items-end justify-end">
                  <div className="bg-workify-blue text-white rounded-lg rounded-br-none p-3 max-w-[70%]">
                    <p className="text-sm">Hi! Thank you for reaching out. I'm very interested in the position.</p>
                    <span className="text-xs text-white opacity-70 mt-1">10:32 AM</span>
                  </div>
                </div>
                
                <div className="flex items-end">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-gray-600" />
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg rounded-bl-none p-3 max-w-[70%]">
                    <p className="text-sm">Great! Would you be available for an interview next week?</p>
                    <span className="text-xs text-gray-500 mt-1">10:35 AM</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-t">
                <div className="flex items-center">
                  <Input 
                    placeholder="Type a message..." 
                    className="rounded-r-none"
                  />
                  <Button className="rounded-l-none bg-workify-blue">
                    <Send className="h-4 w-4" />
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

export default Messages;
