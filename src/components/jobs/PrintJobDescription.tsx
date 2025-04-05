
import React from 'react';
import { Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PrintJobDescriptionProps {
  jobTitle: string;
  company: string;
}

const PrintJobDescription: React.FC<PrintJobDescriptionProps> = ({ jobTitle, company }) => {
  const handlePrint = () => {
    const printContents = document.getElementById('job-description-container')?.innerHTML;
    const originalContents = document.body.innerHTML;

    if (printContents) {
      document.body.innerHTML = `
        <div style="padding: 20px;">
          <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 8px;">${jobTitle}</h1>
          <h2 style="font-size: 18px; color: #555; margin-bottom: 20px;">${company}</h2>
          <div>${printContents}</div>
        </div>
      `;

      window.print();
      document.body.innerHTML = originalContents;
    }
  };

  return (
    <Button 
      variant="outline" 
      className="flex items-center gap-2" 
      onClick={handlePrint}
    >
      <Printer className="h-4 w-4" />
      Print Job
    </Button>
  );
};

export default PrintJobDescription;
