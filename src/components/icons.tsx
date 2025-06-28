import React from 'react';

export const AppLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M30 85C49.5 85 65 69.5 65 50C65 30.5 49.5 15 30 15" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M70 85C89.5 85 105 69.5 105 50C105 30.5 89.5 15 70 15" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
