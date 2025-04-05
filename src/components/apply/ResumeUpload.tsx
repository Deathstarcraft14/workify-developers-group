
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { UseFormSetValue } from 'react-hook-form';

interface ResumeUploadProps {
  setValue: UseFormSetValue<any>;
}

const ResumeUpload: React.FC<ResumeUploadProps> = ({ setValue }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setValue('resume', file);
    }
  };

  return (
    <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center">
      <input
        type="file"
        id="resume"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        className="hidden"
      />
      <label 
        htmlFor="resume" 
        className="cursor-pointer flex flex-col items-center justify-center gap-2"
      >
        <FileText className="h-8 w-8 text-gray-400" />
        <span className="text-sm font-medium">
          {selectedFile ? selectedFile.name : "Upload Resume (Optional)"}
        </span>
        <span className="text-xs text-gray-500">
          {!selectedFile && "PDF, DOC, DOCX up to 5MB"}
        </span>
      </label>
      {selectedFile && (
        <Button
          type="button"
          variant="ghost"
          className="mt-2 h-auto p-1 text-xs"
          onClick={() => {
            setSelectedFile(null);
            setValue('resume', undefined);
          }}
        >
          Remove
        </Button>
      )}
    </div>
  );
};

export default ResumeUpload;
