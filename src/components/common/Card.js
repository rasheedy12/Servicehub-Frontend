import React from 'react';

export function Card({ 
    children, 
    className = '', 
    hover = false,
    padding = true 
}) {
    const baseClasses = 'bg-white rounded-lg shadow';
    const hoverClasses = hover ? 'transition-transform duration-200 hover:scale-105' : '';
    const paddingClasses = padding ? 'p-6' : '';
    
    return (
        <div className={`${baseClasses} ${hoverClasses} ${paddingClasses} ${className}`}>
            {children}
        </div>
    );
}
