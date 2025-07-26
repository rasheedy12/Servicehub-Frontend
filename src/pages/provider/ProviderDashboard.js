import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { StatCard } from '../../components/shared/StatCard';
import { DataTable } from '../../components/shared/DataTable';
import { Card } from '../../components/common/Card';
import { ICONS } from '../../assets/icons';

export default function ProviderDashboard({ setPage }) {
    const stats = [
        { title: 'Today\'s Bookings', value: '5', icon: ICONS.calendar, change: '+2 from yesterday' },
        { title: 'This Week\'s Earnings', value: '$1,234', icon: ICONS.money, change: '+15% from last week' },
        { title: 'Rating', value: '4.8/5', icon: ICONS.star, change: '+0.2 from last month' },
        { title: 'Completed Jobs', value: '156', icon: ICONS.check, change: '+8 this week' }
    ];

    const upcomingBookings = [
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
        { header: 'Status', field: 'status' },
        {
            header: 'Actions',
            render: (booking) => (
                <div className="flex space-x-2">
                    <button
                        onClick={() => console.log('View details:', booking)}
                        className="text-blue-600 hover:text-blue-800"
                    >
                        View
                    </button>
                    <button
                        onClick={() => console.log('Start service:', booking)}
                        className="text-green-600 hover:text-green-800"
                    >
                        Start
                    </button>
                </div>
            )
        }
    ];

    return (
        <DashboardLayout setPage={setPage} activeTab="dashboard">
            <h1 className="text-2xl font-semibold text-gray-900">Provider Dashboard</h1>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <StatCard
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        icon={stat.icon}
                        change={stat.change}
                    />
                ))}
            </div>

            <div className="mt-8">
                <Card>
                    <h2 className="text-lg font-medium text-gray-900">Today's Schedule</h2>
                    <div className="mt-4">
                        <DataTable
                            columns={columns}
                            data={upcomingBookings}
                        />
                    </div>
                </Card>
            </div>
        </DashboardLayout>
    );
}
