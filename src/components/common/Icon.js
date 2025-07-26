import React from 'react';

export function Icon({ path, className = "w-6 h-6" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d={path} />
        </svg>
    );
}

export function SolidIcon({ path, className = "w-6 h-6" }) {
     return (
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path fillRule="evenodd" d={path} clipRule="evenodd" />
        </svg>
    );
}
