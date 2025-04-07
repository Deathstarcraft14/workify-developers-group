
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ResumeData } from '../../../context/ResumeContext';
import { downloadResumePdf } from '../../../utils/resumePdfGenerator';

interface ResumeActionsProps {
  resumeData: ResumeData;
}

const ResumeActions: React.FC<ResumeActionsProps> = ({ resumeData }) => {
  const { toast } = useToast();

  const handleDownloadPDF = () => {
    try {
      const fileName = downloadResumePdf(resumeData);

      toast({
        title: "Success!",
        description: "Your resume has been downloaded as a PDF.",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold">Resume Preview</h2>
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-2"
          onClick={() => {
            toast({
              title: "Preview mode",
              description: "You're now viewing how your resume will look to employers",
            });
          }}
        >
          <Eye size={16} />
          <span>Preview</span>
        </Button>
        <Button 
          size="sm" 
          className="flex items-center gap-2 bg-workify-blue hover:bg-blue-700"
          onClick={handleDownloadPDF}
        >
          <Download size={16} />
          <span>Download PDF</span>
        </Button>
      </div>
    </div>
  );
};

export default ResumeActions;
