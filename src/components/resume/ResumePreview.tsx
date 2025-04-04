
import React from 'react';
import { useResume } from '../../context/ResumeContext';
import { Button } from '@/components/ui/button';
import { Download, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { jsPDF } from 'jspdf';

const ResumePreview = () => {
  const { resumeData } = useResume();
  const { toast } = useToast();
  const resumeRef = React.useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    if (!resumeRef.current) return;

    try {
      const doc = new jsPDF({
        format: 'a4',
        unit: 'mm',
      });

      // Add content to PDF
      const margins = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      };
      
      // Header - Name and Contact
      doc.setFontSize(24);
      doc.setFont('helvetica', 'bold');
      doc.text(resumeData.contact.fullName, margins.left, margins.top);
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      const contactText = [
        resumeData.contact.email,
        resumeData.contact.phone,
        resumeData.contact.location
      ].filter(Boolean).join(' • ');
      doc.text(contactText, margins.left, margins.top + 10);
      
      // Summary
      let currentY = margins.top + 20;
      
      if (resumeData.summary) {
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('SUMMARY', margins.left, currentY);
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        const summaryLines = doc.splitTextToSize(resumeData.summary, 170);
        doc.text(summaryLines, margins.left, currentY + 5);
        
        currentY += 15 + (summaryLines.length * 5);
      }
      
      // Experience
      if (resumeData.experiences && resumeData.experiences.length > 0) {
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('EXPERIENCE', margins.left, currentY);
        
        currentY += 5;
        
        resumeData.experiences.forEach((exp) => {
          doc.setFontSize(12);
          doc.setFont('helvetica', 'bold');
          doc.text(exp.position, margins.left, currentY);
          
          doc.setFontSize(10);
          doc.setFont('helvetica', 'italic');
          const companyText = `${exp.company} • ${exp.startDate} - ${exp.endDate || 'Present'}`;
          doc.text(companyText, margins.left, currentY + 5);
          
          doc.setFont('helvetica', 'normal');
          const descriptionLines = doc.splitTextToSize(exp.description, 170);
          doc.text(descriptionLines, margins.left, currentY + 10);
          
          currentY += 20 + (descriptionLines.length * 5);
        });
      }
      
      // Education
      if (resumeData.education && resumeData.education.length > 0) {
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('EDUCATION', margins.left, currentY);
        
        currentY += 5;
        
        resumeData.education.forEach((edu) => {
          doc.setFontSize(12);
          doc.setFont('helvetica', 'bold');
          doc.text(edu.degree, margins.left, currentY);
          
          doc.setFontSize(10);
          doc.setFont('helvetica', 'italic');
          const schoolText = `${edu.school} • ${edu.startDate} - ${edu.endDate || 'Present'}`;
          doc.text(schoolText, margins.left, currentY + 5);
          
          currentY += 15;
        });
      }
      
      // Skills
      if (resumeData.skills && resumeData.skills.length > 0) {
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('SKILLS', margins.left, currentY);
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        const skillsText = resumeData.skills.map(skill => skill.name).join(', ');
        const skillsLines = doc.splitTextToSize(skillsText, 170);
        doc.text(skillsLines, margins.left, currentY + 5);
      }

      // Save the PDF
      const fileName = resumeData.contact.fullName 
        ? resumeData.contact.fullName.replace(/\s+/g, '_') + '_Resume.pdf'
        : 'resume.pdf';
      
      doc.save(fileName);

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
    <div className="bg-white rounded-lg shadow-sm p-6">
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
      
      <div 
        ref={resumeRef}
        className="border border-gray-200 rounded-lg p-8 min-h-[600px] bg-white"
      >
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">
            {resumeData.contact.fullName}
          </h1>
          <div className="text-sm text-gray-600 mt-1">
            {resumeData.contact.email && <span className="mr-2">{resumeData.contact.email}</span>}
            {resumeData.contact.phone && <span className="mr-2">• {resumeData.contact.phone}</span>}
            {resumeData.contact.location && <span>• {resumeData.contact.location}</span>}
          </div>
        </div>
        
        {/* Summary */}
        {resumeData.summary && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold border-b pb-1 mb-2">SUMMARY</h2>
            <p className="text-sm text-gray-700">{resumeData.summary}</p>
          </div>
        )}
        
        {/* Experience */}
        {resumeData.experiences && resumeData.experiences.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold border-b pb-1 mb-2">EXPERIENCE</h2>
            {resumeData.experiences.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <h3 className="font-medium">{exp.position}</h3>
                  <span className="text-sm text-gray-600">
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </span>
                </div>
                <p className="text-sm italic">{exp.company}</p>
                <p className="text-sm mt-1">{exp.description}</p>
              </div>
            ))}
          </div>
        )}
        
        {/* Education */}
        {resumeData.education && resumeData.education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold border-b pb-1 mb-2">EDUCATION</h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <h3 className="font-medium">{edu.degree}</h3>
                  <span className="text-sm text-gray-600">
                    {edu.startDate} - {edu.endDate || 'Present'}
                  </span>
                </div>
                <p className="text-sm italic">{edu.school}</p>
              </div>
            ))}
          </div>
        )}
        
        {/* Skills */}
        {resumeData.skills && resumeData.skills.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold border-b pb-1 mb-2">SKILLS</h2>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill, index) => (
                <span key={index} className="bg-gray-100 px-2 py-1 text-sm rounded">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
