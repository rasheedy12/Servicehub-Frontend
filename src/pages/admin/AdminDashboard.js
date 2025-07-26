import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { StatCard } from '../../components/shared/StatCard';
import { DataTable } from '../../components/shared/DataTable';
import { ICONS } from '../../assets/icons';

export default function AdminDashboard({ setPage }) {
    const stats = [
        { title: 'Total Users', value: '1,234', icon: ICONS.users, change: '+12% from last month' },
        { title: 'Active Bookings', value: '56', icon: ICONS.calendar, change: '+8% from last week' },
        { title: 'Revenue', value: '$12,345', icon: ICONS.money, change: '+15% from last month' },
        { title: 'Active Providers', value: '89', icon: ICONS.providers, change: '+5% from last month' }
    ];

    const recentBookings = [
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
        { header: 'Customer', field: 'customer' },
        { header: 'Provider', field: 'provider' },
        { header: 'Service', field: 'service' },
        { header: 'Date', field: 'date' },
        { header: 'Status', field: 'status' }
    ];

    return (
        <DashboardLayout setPage={setPage} activeTab="dashboard">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            
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
                <h2 className="text-lg font-medium text-gray-900">Recent Bookings</h2>
                <div className="mt-4">
                    <DataTable
                        columns={columns}
                        data={recentBookings}
                        onRowClick={(booking) => console.log('Booking clicked:', booking)}
                    />
                </div>
            </div>
        </DashboardLayout>
    );
}
