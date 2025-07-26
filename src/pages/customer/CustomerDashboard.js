import React, { useState } from 'react';
import { Icon as CommonIcon } from '../../components/common/Icon';
import { ICONS as ASSET_ICONS } from '../../assets/icons';

export default function CustomerDashboard() {
    const [activeTab, setActiveTab] = useState('appointments');

    const upcomingAppointments = [
        {
            id: 1,
            service: 'Plumbing Repair',
            provider: 'John Smith',
            date: '2025-07-28',
            time: '10:00 AM',
            status: 'confirmed'
        },
        // Add more appointments as needed
    ];

    const serviceHistory = [
        {
            id: 101,
            service: 'House Cleaning',
            provider: 'Clean Pro Services',
            date: '2025-07-20',
            status: 'completed',
            rating: 5
        },
        // Add more history items as needed
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Customer Dashboard</h1>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {/* Navigation Tabs */}
                <div className="border-b border-gray-200 mb-6">
                    <nav className="-mb-px flex space-x-8">
                        <button
                            onClick={() => setActiveTab('appointments')}
                            className={`${
                                activeTab === 'appointments'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                        >
                            Upcoming Appointments
                        </button>
                        <button
                            onClick={() => setActiveTab('history')}
                            className={`${
                                activeTab === 'history'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                        >
                            Service History
                        </button>
                    </nav>
                </div>

                {/* Content */}
                <div className="mt-6">
                    {activeTab === 'appointments' && (
                        <div className="bg-white shadow overflow-hidden sm:rounded-md">
                            <ul className="divide-y divide-gray-200">
                                {upcomingAppointments.map((appointment) => (
                                    <li key={appointment.id}>
                                        <div className="px-4 py-4 sm:px-6">
                                            <div className="flex items-center justify-between">
                                                <div className="flex-1">
                                                    <h3 className="text-lg font-medium text-gray-900">{appointment.service}</h3>
                                                    <p className="mt-1 text-sm text-gray-500">Provider: {appointment.provider}</p>
                                                </div>
                                                <div className="ml-4">
                                                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                                        {appointment.status}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mt-2 sm:flex sm:justify-between">
                                                <div className="sm:flex">
                                                    <p className="flex items-center text-sm text-gray-500">
                                                        <CommonIcon path={ASSET_ICONS.calendar} className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                                                        {appointment.date}
                                                    </p>
                                                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                                        <CommonIcon path={ASSET_ICONS.clock} className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                                                        {appointment.time}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === 'history' && (
                        <div className="bg-white shadow overflow-hidden sm:rounded-md">
                            <ul className="divide-y divide-gray-200">
                                {serviceHistory.map((service) => (
                                    <li key={service.id}>
                                        <div className="px-4 py-4 sm:px-6">
                                            <div className="flex items-center justify-between">
                                                <div className="flex-1">
                                                    <h3 className="text-lg font-medium text-gray-900">{service.service}</h3>
                                                    <p className="mt-1 text-sm text-gray-500">Provider: {service.provider}</p>
                                                </div>
                                                <div className="ml-4 flex items-center space-x-4">
                                                    <div className="flex items-center">
                                                        {[...Array(service.rating)].map((_, i) => (
                                                            <CommonIcon
                                                                key={i}
                                                                path={ASSET_ICONS.star}
                                                                className="h-5 w-5 text-yellow-400"
                                                            />
                                                        ))}
                                                    </div>
                                                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                                                        {service.status}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <p className="flex items-center text-sm text-gray-500">
                                                    <CommonIcon path={ASSET_ICONS.calendar} className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                                                    {service.date}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
