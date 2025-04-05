
import React from 'react';
import { MapPin, Clock, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface JobDetailsHeaderProps {
  title: string;
  company: string;
  location: string;
  postedDate: string;
  employmentType: string;
  skills: string[];
  companyLogo: string;
}

const JobDetailsHeader: React.FC<JobDetailsHeaderProps> = ({
  title,
  company,
  location,
  postedDate,
  employmentType,
  skills,
  companyLogo,
}) => {
  return (
    <Card className="shadow-sm mb-6">
      <CardContent className="pt-6">
        <div className="flex items-start">
          <div className="w-16 h-16 bg-white rounded-lg mr-4 flex items-center justify-center border border-gray-100">
            <img src={companyLogo} alt={company} className="h-12 w-12 object-contain" />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-1">{title}</h1>
            <p className="text-gray-600 mb-2">{company}</p>
            
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{location}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>Posted {postedDate}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Briefcase className="h-4 w-4 mr-1" />
                <span>{employmentType}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill, index) => (
                <span key={index} className="badge">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobDetailsHeader;
