import React from 'react';

const PageHeader = ({ 
  title, 
  subtitle, 
  bgImage, 
  overlayColor = 'rgba(0, 0, 0, 0.5)', 
  gradientFrom = 'from-indigo-900', 
  gradientTo = 'to-indigo-800',
  height = 'md',
  textColor = 'text-white',
  subtitleColor = 'text-indigo-100'
}) => {
  const heightClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20',
    xl: 'py-24'
  };

  return (
    <section 
      className={`relative ${heightClasses[height]} ${textColor}`}
    >
      {/* Background Image with Overlay */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div 
            className="absolute inset-0 w-full h-full"
            style={{ backgroundColor: overlayColor }}
          />
        </div>
      )}
      
      {/* Gradient Background (fallback if no image) */}
      {!bgImage && (
        <div className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientTo}`} />
      )}
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          {subtitle && (
            <p className={`text-xl md:text-2xl ${subtitleColor} max-w-3xl mx-auto`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;