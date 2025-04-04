
import React, { useRef } from 'react';
import { useResume } from '../../context/ResumeContext';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ResumePreview = () => {
  const { resumeData } = useResume();
  const resumeRef = useRef<HTMLDivElement>(null);

  const downloadAsPDF = async () => {
    if (!resumeRef.current) return;
    
    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${resumeData.contact.fullName || 'resume'}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Preview</h2>
        <Button onClick={downloadAsPDF} className="bg-workify-blue hover:bg-blue-700">
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </div>
      
      <div 
        ref={resumeRef} 
        className="border border-gray-200 rounded-lg p-8 bg-white shadow-sm min-h-[700px]"
        style={{ fontFamily: 'Arial, sans-serif' }}
      >
        {/* Header with contact info */}
        {resumeData.contact.fullName && (
          <div className="mb-6 pb-4 border-b border-gray-300">
            <h1 className="text-3xl font-bold text-center mb-2">{resumeData.contact.fullName}</h1>
            <div className="flex flex-wrap justify-center gap-x-4 text-sm text-gray-600">
              {resumeData.contact.email && <div>{resumeData.contact.email}</div>}
              {resumeData.contact.phone && <div>{resumeData.contact.phone}</div>}
              {resumeData.contact.location && <div>{resumeData.contact.location}</div>}
              {resumeData.contact.linkedin && <div>{resumeData.contact.linkedin}</div>}
              {resumeData.contact.website && <div>{resumeData.contact.website}</div>}
            </div>
          </div>
        )}

        {/* Summary Section */}
        {resumeData.summary && (
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2 text-workify-blue">Professional Summary</h2>
            <p>{resumeData.summary}</p>
          </div>
        )}

        {/* Experience Section */}
        {resumeData.experiences.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-workify-blue">Work Experience</h2>
            {resumeData.experiences.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between">
                  <h3 className="font-bold">{exp.position}</h3>
                  <span className="text-sm">
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </span>
                </div>
                <p className="font-semibold">{exp.company}{exp.location && `, ${exp.location}`}</p>
                <p className="text-sm mt-1">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Education Section */}
        {resumeData.education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-workify-blue">Education</h2>
            {resumeData.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <div className="flex justify-between">
                  <h3 className="font-bold">{edu.school}</h3>
                  <span className="text-sm">
                    {edu.startDate} - {edu.endDate || 'Present'}
                  </span>
                </div>
                <p className="font-semibold">{edu.degree}{edu.fieldOfStudy && `, ${edu.fieldOfStudy}`}</p>
                {edu.description && <p className="text-sm mt-1">{edu.description}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Skills Section */}
        {resumeData.skills.length > 0 && (
          <div>
            <h2 className="text-xl font-bold mb-3 text-workify-blue">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill) => (
                <span 
                  key={skill.id} 
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
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
