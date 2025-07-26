import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { DataTable } from '../../components/shared/DataTable';
import { FilterDropdown } from '../../components/shared/FilterDropdown';

export default function AdminUserManagement({ setPage }) {
    const users = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            type: 'Customer',
            status: 'Active',
            joinDate: '2025-01-15'
        },
        // Add more mock data as needed
    ];

    const columns = [
        { header: 'ID', field: 'id' },
        { header: 'Name', field: 'name' },
        { header: 'Email', field: 'email' },
        { header: 'Type', field: 'type' },
        { header: 'Status', field: 'status' },
        { header: 'Join Date', field: 'joinDate' },
        {
            header: 'Actions',
            render: (user) => (
                <div className="flex space-x-2">
                    <button
                        onClick={() => handleEditUser(user)}
                        className="text-blue-600 hover:text-blue-800"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => handleDeleteUser(user)}
                        className="text-red-600 hover:text-red-800"
                    >
                        Delete
                    </button>
                </div>
            )
        }
    ];

    const handleEditUser = (user) => {
        console.log('Edit user:', user);
    };

    const handleDeleteUser = (user) => {
        console.log('Delete user:', user);
    };

    return (
        <DashboardLayout setPage={setPage} activeTab="users">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-900">User Management</h1>
                <div className="flex space-x-4">
                    <FilterDropdown
                        options={['All Users', 'Customers', 'Providers', 'Admins']}
                        value="All Users"
                        onChange={(value) => console.log('User type filter:', value)}
                        className="w-48"
                    />
                    <FilterDropdown
                        options={['All Status', 'Active', 'Inactive', 'Suspended']}
                        value="All Status"
                        onChange={(value) => console.log('Status filter:', value)}
                        className="w-48"
                    />
                </div>
            </div>

            <div className="mt-6">
                <DataTable
                    columns={columns}
                    data={users}
                />
            </div>
        </DashboardLayout>
    );
}
