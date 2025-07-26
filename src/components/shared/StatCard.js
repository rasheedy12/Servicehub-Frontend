import React from 'react';
import { Card } from '../common/Card';

export function StatCard({
    title,
    value,
    icon: Icon,
    change,
    changeType = 'increase',
    className = ''
}) {
    return (
        <Card className={className}>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                    <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
                </div>
                {Icon && (
                    <div className="p-3 bg-blue-100 rounded-full">
                        <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                )}
            </div>
            {change && (
                <div className="mt-4">
                    <div className={`flex items-center text-sm ${
                        changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                    }`}>
                        {changeType === 'increase' ? (
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
                            </svg>
                        )}
                        <span>{change}</span>
                    </div>
                </div>
            )}
        </Card>
    );
}
