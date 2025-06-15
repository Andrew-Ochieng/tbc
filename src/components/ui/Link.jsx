import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({ href, children, className, external = false, ...props }) => {
  if (external) {
    return (
      <a 
        href={href} 
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <RouterLink 
      to={href} 
      className={className}
      {...props}
    >
      {children}
    </RouterLink>
  );
};

export default Link;