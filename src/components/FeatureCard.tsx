
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, imageSrc }) => {
  return (
    <div className="feature-card transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
      {imageSrc && (
        <div className="feature-image mb-4">
          <img src={imageSrc} alt={title} className="w-16 h-16 object-contain mx-auto" />
        </div>
      )}
      <div className="mb-6 text-workify-blue">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
