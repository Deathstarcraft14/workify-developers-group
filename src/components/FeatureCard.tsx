
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, imageSrc }) => {
  return (
    <div className="feature-card">
      <div className="mb-4 text-workify-blue">
        {icon}
      </div>
      {imageSrc && (
        <div className="mb-4">
          <img src={imageSrc} alt={title} className="h-16 w-16 mx-auto object-contain" />
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
