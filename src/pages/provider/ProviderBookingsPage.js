import React, { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { DataTable } from '../../components/shared/DataTable';
import { Card } from '../../components/common/Card';
import { FilterDropdown } from '../../components/shared/FilterDropdown';

export default function ProviderBookingsPage({ setPage }) {
    const [filter, setFilter] = useState('all');
    
    const bookings = [
        {
            id: 1,
            customer: 'John Doe',
            service: 'Plumbing Repair',
            date: '2025-07-26',
            time: '10:00 AM',
            address: '123 Main St, Los Angeles',
            status: 'Confirmed'
        },
        // Add more bookings as needed
    ];

    const columns = [
        { header: 'Customer', field: 'customer' },
        { header: 'Service', field: 'service' },
        { header: 'Date', field: 'date' },
        { header: 'Time', field: 'time' },
        { header: 'Address', field: 'address' },
        { header: 'Status', field: 'status' },
        {
            header: 'Actions',
            render: (booking) => (
                <div className="flex space-x-2">
                    <button
                        onClick={() => console.log('View details:', booking)}
                        className="text-blue-600 hover:text-blue-800"
                    >
                        Details
                    </button>
                    {booking.status === 'Confirmed' && (
                        <button
                            onClick={() => console.log('Start service:', booking)}
                            className="text-green-600 hover:text-green-800"
                        >
                            Start
                        </button>
                    )}
                    {booking.status === 'Pending' && (
                        <>
                            <button
                                onClick={() => console.log('Accept booking:', booking)}
                                className="text-green-600 hover:text-green-800"
                            >
                                Accept
                            </button>
                            <button
                                onClick={() => console.log('Decline booking:', booking)}
                                className="text-red-600 hover:text-red-800"
                            >
                                Decline
                            </button>
                        </>
                    )}
                </div>
            )
        }
    ];

    return (
        <DashboardLayout setPage={setPage} activeTab="bookings">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-900">Bookings</h1>
                <FilterDropdown
                    options={['All', 'Pending', 'Confirmed', 'In Progress', 'Completed', 'Cancelled']}
                    value={filter}
                    onChange={setFilter}
                    className="w-48"
                />
            </div>

            <Card className="mt-6">
                <DataTable
                    columns={columns}
                    data={bookings.filter(booking => 
                        filter === 'all' || 
                        booking.status.toLowerCase() === filter.toLowerCase()
                    )}
                />
            </Card>
        </DashboardLayout>
    );
}
