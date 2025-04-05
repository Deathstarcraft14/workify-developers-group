
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface JobDescriptionProps {
  description: string;
}

const JobDescription: React.FC<JobDescriptionProps> = ({ description }) => {
  // Function to process the description HTML and enhance section formatting
  const enhanceDescriptionSections = (html: string) => {
    // Add custom classes to section headings (h4 tags)
    let enhancedHtml = html.replace(
      /<h4>(.*?)<\/h4>/g, 
      '<h4 class="text-lg font-semibold text-primary mt-6 mb-3">$1</h4>'
    );
    
    // Add a subtle left border to lists for better visual hierarchy
    enhancedHtml = enhancedHtml.replace(
      /<ul>/g,
      '<ul class="border-l-2 border-gray-100 pl-4">'
    );
    
    return enhancedHtml;
  };

  const enhancedDescription = enhanceDescriptionSections(description);

  return (
    <Card className="shadow-sm mb-6 border-t-4 border-t-workify-blue">
      <CardContent className="pt-6">
        <h2 className="text-xl font-bold mb-4 text-workify-navy">Job Description</h2>
        <Separator className="mb-4" />
        <div 
          className="prose max-w-none space-y-4" 
          dangerouslySetInnerHTML={{ __html: enhancedDescription }} 
        />
        <style>
          {`
            .prose ul {
              list-style-type: disc;
              padding-left: 1.5rem;
              margin-bottom: 1.5rem;
            }
            .prose ul li {
              margin-bottom: 0.5rem;
              position: relative;
            }
            .prose p {
              margin-bottom: 1rem;
              line-height: 1.6;
            }
            .prose h4 {
              position: relative;
              padding-bottom: 0.5rem;
            }
            .prose h4:after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 40px;
              height: 2px;
              background-color: #e5e7eb;
            }
          `}
        </style>
      </CardContent>
    </Card>
  );
};

export default JobDescription;
