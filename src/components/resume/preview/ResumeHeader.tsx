
import React from 'react';
import { Contact } from '../../../context/ResumeContext';

interface ResumeHeaderProps {
  contact: Contact;
}

const ResumeHeader: React.FC<ResumeHeaderProps> = ({ contact }) => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold">
        {contact.fullName}
      </h1>
      <div className="text-sm text-gray-600 mt-1">
        {contact.email && <span className="mr-2">{contact.email}</span>}
        {contact.phone && <span className="mr-2">• {contact.phone}</span>}
        {contact.location && <span>• {contact.location}</span>}
      </div>
    </div>
  );
};

export default ResumeHeader;
