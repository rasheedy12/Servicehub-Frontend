import React from 'react';

export function Button({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    disabled = false,
    type = 'button',
    onClick,
    ...props 
}) {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variants = {
        primary: 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
        secondary: 'text-blue-700 bg-blue-100 hover:bg-blue-200 focus:ring-blue-500',
        outline: 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:ring-blue-500',
        danger: 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500'
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg'
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
        <button
            type={type}
            className={classes}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
}
