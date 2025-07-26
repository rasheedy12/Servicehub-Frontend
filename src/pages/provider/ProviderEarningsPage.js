import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Card } from '../../components/common/Card';
import { StatCard } from '../../components/shared/StatCard';
import { DataTable } from '../../components/shared/DataTable';
import { ICONS } from '../../assets/icons';

export default function ProviderEarningsPage({ setPage }) {
    const stats = [
        { title: 'Total Earnings', value: '$12,345', icon: ICONS.money, change: '+15% from last month' },
        { title: 'Completed Jobs', value: '156', icon: ICONS.check, change: '+8 this week' },
        { title: 'Average Job Value', value: '$79', icon: ICONS.chart, change: '+5% from last month' },
        { title: 'Pending Payments', value: '$450', icon: ICONS.clock, change: '3 jobs pending' }
    ];

    const transactions = [
        {
            id: 1,
            date: '2025-07-26',
            customer: 'John Doe',
            service: 'Plumbing Repair',
            amount: 120,
            status: 'Paid',
            serviceDate: '2025-07-25'
        },
        // Add more transactions as needed
    ];

    const columns = [
        { header: 'Date', field: 'date' },
        { header: 'Customer', field: 'customer' },
        { header: 'Service', field: 'service' },
        { 
            header: 'Amount',
            render: (row) => `$${row.amount.toFixed(2)}`
        },
        { header: 'Status', field: 'status' },
        { header: 'Service Date', field: 'serviceDate' }
    ];

    return (
        <DashboardLayout setPage={setPage} activeTab="earnings">
            <h1 className="text-2xl font-semibold text-gray-900">Earnings</h1>

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

            {/* Earnings Chart */}
            <Card className="mt-6">
                <h2 className="text-lg font-medium text-gray-900">Earnings Overview</h2>
                <div className="mt-4 h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Chart will be displayed here</p>
                </div>
            </Card>

            {/* Transaction History */}
            <div className="mt-6">
                <Card>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-medium text-gray-900">Transaction History</h2>
                        <select className="mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                            <option>This Month</option>
                            <option>Last Month</option>
                            <option>Last 3 Months</option>
                            <option>This Year</option>
                        </select>
                    </div>
                    <DataTable
                        columns={columns}
                        data={transactions}
                    />
                </Card>
            </div>

            {/* Payment Schedule */}
            <Card className="mt-6">
                <h2 className="text-lg font-medium text-gray-900">Payment Schedule</h2>
                <div className="mt-4 space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-medium text-gray-900">Next Payout</p>
                            <p className="text-sm text-gray-500">Scheduled for July 31, 2025</p>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-semibold text-gray-900">$450.00</p>
                            <p className="text-sm text-gray-500">3 jobs included</p>
                        </div>
                    </div>
                </div>
            </Card>
        </DashboardLayout>
    );
}
