import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { DataTable } from '../../components/shared/DataTable';
import { FilterDropdown } from '../../components/shared/FilterDropdown';

export default function AdminBookingManagement({ setPage }) {
    const bookings = [
        {
            id: 1,
            customer: 'John Doe',
            provider: 'ABC Plumbing',
            service: 'Plumbing Repair',
            date: '2025-07-26',
            status: 'Completed'
        },
        // Add more mock data as needed
    ];

    const columns = [
        { header: 'ID', field: 'id' },
        { header: 'Customer', field: 'customer' },
        { header: 'Provider', field: 'provider' },
        { header: 'Service', field: 'service' },
        { header: 'Date', field: 'date' },
        { header: 'Status', field: 'status' },
        {
            header: 'Actions',
            render: (booking) => (
                <div className="flex space-x-2">
                    <button
                        onClick={() => handleEditBooking(booking)}
                        className="text-blue-600 hover:text-blue-800"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => handleDeleteBooking(booking)}
                        className="text-red-600 hover:text-red-800"
                    >
                        Delete
                    </button>
                </div>
            )
        }
    ];

    const handleEditBooking = (booking) => {
        console.log('Edit booking:', booking);
    };

    const handleDeleteBooking = (booking) => {
        console.log('Delete booking:', booking);
    };

    return (
        <DashboardLayout setPage={setPage} activeTab="bookings">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-900">Booking Management</h1>
                <FilterDropdown
                    options={['All', 'Pending', 'Confirmed', 'Completed', 'Cancelled']}
                    value="All"
                    onChange={(value) => console.log('Filter changed:', value)}
                    className="w-48"
                />
            </div>

            <div className="mt-6">
                <DataTable
                    columns={columns}
                    data={bookings}
                />
            </div>
        </DashboardLayout>
    );
}
