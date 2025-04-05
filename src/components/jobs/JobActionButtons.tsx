
import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, Bookmark, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface JobActionButtonsProps {
  jobId: string;
  jobTitle: string;
  company: string;
  onApply: () => void;
  onSave: () => void;
  onShare: () => void;
}

const JobActionButtons: React.FC<JobActionButtonsProps> = ({
  jobId,
  jobTitle,
  company,
  onApply,
  onSave,
  onShare
}) => {
  return (
    <div className="space-y-3">
      <Button className="w-full bg-workify-blue" onClick={onApply}>
        Apply Now
      </Button>
      
      <div className="flex space-x-2">
        <Button variant="outline" className="flex-1" onClick={onSave}>
          <Bookmark className="h-4 w-4 mr-2" />
          Save
        </Button>
        <Button variant="outline" className="flex-1" onClick={onShare}>
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
      </div>
      
      <Link to="/quick-apply">
        <Button variant="outline" className="w-full">
          <FileText className="h-4 w-4 mr-2" />
          Quick Apply
        </Button>
      </Link>
    </div>
  );
};

export default JobActionButtons;
