
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, backgroundImage }) => {
  const style = backgroundImage ? {
    backgroundImage: `linear-gradient(to right, rgba(248, 250, 252, 0.95), rgba(241, 245, 249, 0.9)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  } : {};

  return (
    <div className="header-section" style={style}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gray-900">
              {title.split(' ').map((word, i, arr) => {
                if (i === arr.length - 1) {
                  return <span key={i} className="text-workify-blue">{word}</span>;
                }
                return <span key={i}>{word} </span>;
              })}
            </span>
          </h1>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
