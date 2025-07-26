import React, { forwardRef } from 'react';

export const Input = forwardRef(({
    label,
    error,
    icon: Icon,
    type = 'text',
    className = '',
    ...props
}, ref) => {
    const baseInputClasses = 'appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm';
    const inputClasses = `${baseInputClasses} ${error ? 'border-red-300' : 'border-gray-300'} ${Icon ? 'pl-10' : ''} ${className}`;

    return (
        <div>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}
            <div className="relative">
                {Icon && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Icon className="h-5 w-5 text-gray-400" />
                    </div>
                )}
                <input
                    ref={ref}
                    type={type}
                    className={inputClasses}
                    {...props}
                />
            </div>
            {error && (
                <p className="mt-1 text-sm text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
});
