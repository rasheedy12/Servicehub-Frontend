import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Card } from '../../components/common/Card';

export default function ProviderCalendarPage({ setPage }) {
    // In a real application, this would be populated with actual bookings
    const events = [
        {
            id: 1,
            title: 'Plumbing Service - John Doe',
            start: '2025-07-26T10:00',
            end: '2025-07-26T12:00',
            customer: 'John Doe',
            address: '123 Main St, Los Angeles'
        },
        // Add more events as needed
    ];

    return (
        <DashboardLayout setPage={setPage} activeTab="calendar">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-900">Calendar</h1>
                <div className="flex space-x-4">
                    <button className="text-gray-600 hover:text-gray-900">Day</button>
                    <button className="text-gray-600 hover:text-gray-900">Week</button>
                    <button className="text-blue-600 font-medium">Month</button>
                </div>
            </div>

            <Card className="mt-6">
                <div className="flex flex-col h-screen max-h-[600px]">
                    {/* Calendar Header */}
                    <div className="grid grid-cols-7 gap-px bg-gray-200">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                            <div key={day} className="bg-white p-2 text-center text-sm font-medium text-gray-900">
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="flex-1 grid grid-cols-7 grid-rows-5 gap-px bg-gray-200">
                        {Array.from({ length: 35 }).map((_, index) => (
                            <div
                                key={index}
                                className={`bg-white p-2 min-h-[100px] ${
                                    index % 7 === 0 || index % 7 === 6 ? 'bg-gray-50' : ''
                                }`}
                            >
                                <span className="text-sm text-gray-500">{index + 1}</span>
                                {/* Event dots or small event cards would go here */}
                            </div>
                        ))}
                    </div>
                </div>
            </Card>

            {/* Event List for the Selected Day */}
            <Card className="mt-6">
                <h2 className="text-lg font-medium text-gray-900">Today's Schedule</h2>
                <div className="mt-4 space-y-4">
                    {events.map((event) => (
                        <div key={event.id} className="flex space-x-4 p-4 hover:bg-gray-50 rounded-lg">
                            <div className="flex-1">
                                <p className="font-medium text-gray-900">{event.title}</p>
                                <p className="text-sm text-gray-500">
                                    {new Date(event.start).toLocaleTimeString()} - {new Date(event.end).toLocaleTimeString()}
                                </p>
                                <p className="text-sm text-gray-500">{event.address}</p>
                            </div>
                            <button className="text-blue-600 hover:text-blue-800">
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </Card>
        </DashboardLayout>
    );
}
