
import { jsPDF } from 'jspdf';
import { ResumeData } from '../context/ResumeContext';

export const generateResumePdf = (resumeData: ResumeData): jsPDF => {
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

  return doc;
};

export const downloadResumePdf = (resumeData: ResumeData): string => {
  const doc = generateResumePdf(resumeData);
  
  // Generate file name
  const fileName = resumeData.contact.fullName 
    ? resumeData.contact.fullName.replace(/\s+/g, '_') + '_Resume.pdf'
    : 'resume.pdf';
  
  // Save the PDF
  doc.save(fileName);
  
  return fileName;
};
