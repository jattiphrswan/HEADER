import React from 'react';

/**
 * SoRun spiral/labyrinth coiled logo as seen in the reference screenshot
 */
export const SoRunLogo = ({ className = "w-8 h-8 text-white" }) => {
  return (
    <svg 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="SoRun Logo"
    >
      {/* Outer rounded pill/circle border */}
      <circle 
        cx="20" 
        cy="20" 
        r="18" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeOpacity="0.9"
      />
      {/* Intricate continuous spiral curve matching reference */}
      <path 
        d="M20 9C13.925 9 9 13.925 9 20C9 26.075 13.925 31 20 31C25.247 31 29.5 26.747 29.5 21.5C29.5 16.806 25.694 13 21 13C16.858 13 13.5 16.358 13.5 20.5C13.5 24.09 16.41 27 20 27C23.038 27 25.5 24.538 25.5 21.5C25.5 18.96 23.46 16.92 20.92 16.92C18.88 16.92 17.23 18.57 17.23 20.61C17.23 22.15 18.46 23.38 20 23.38" 
        stroke="currentColor" 
        strokeWidth="2.2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
};

export default SoRunLogo;
