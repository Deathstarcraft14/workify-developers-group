
import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary?: string;
  posted?: string;
  skills?: string[];
  variant?: 'default' | 'quick-apply';
  bgColor?: string;
  children?: React.ReactNode;
}

const JobCard: React.FC<JobCardProps> = ({ 
  title, 
  company, 
  location, 
  salary, 
  posted, 
  skills = [],
  variant = 'default',
  bgColor,
  children
}) => {
  const cardClass = bgColor ? 
    `job-card-alt ${variant === 'quick-apply' ? 'h-full' : ''}` : 
    `job-card ${variant === 'quick-apply' ? 'h-full' : ''}`;
  
  const cardStyle = bgColor ? { backgroundColor: bgColor } : {};

  return (
    <div className={cardClass} style={cardStyle}>
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-gray-700 mb-2">{company}</p>
          
          <div className="flex items-center mb-2">
            <MapPin className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-gray-600 text-sm">{location}</span>
          </div>
          
          {salary && (
            <div className="mb-2">
              <span className="text-gray-700 font-medium">{salary}</span>
            </div>
          )}
          
          {posted && (
            <div className="flex items-center mb-3">
              <Clock className="h-4 w-4 text-gray-500 mr-1" />
              <span className="text-gray-600 text-sm">Posted: {posted}</span>
            </div>
          )}
          
          {skills.length > 0 && (
            <div className="flex flex-wrap mb-4">
              {skills.map((skill, index) => (
                <span key={index} className="badge">{skill}</span>
              ))}
            </div>
          )}
        </div>
        
        {children}
        
        {!children && (
          <div className={`mt-4 ${variant === 'quick-apply' ? 'text-center' : 'text-right'}`}>
            {variant === 'quick-apply' ? (
              <button className="btn-primary w-full">Apply</button>
            ) : (
              <Link to="/job-details" className="btn-primary">
                {variant === 'default' ? 'Learn More' : 'More Details'}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCard;
