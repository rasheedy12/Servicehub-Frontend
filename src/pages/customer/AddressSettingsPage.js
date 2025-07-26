import React, { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';

export default function AddressSettingsPage({ setPage }) {
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            label: 'Home',
            address: '123 Main Street',
            unit: 'Apt 4B',
            city: 'Los Angeles',
            state: 'CA',
            zipCode: '90012',
            isDefault: true
        }
    ]);

    const [newAddress, setNewAddress] = useState({
        label: '',
        address: '',
        unit: '',
        city: '',
        state: '',
        zipCode: '',
        isDefault: false
    });

    const handleAddAddress = (e) => {
        e.preventDefault();
        setAddresses([
            ...addresses,
            {
                id: addresses.length + 1,
                ...newAddress
            }
        ]);
        setNewAddress({
            label: '',
            address: '',
            unit: '',
            city: '',
            state: '',
            zipCode: '',
            isDefault: false
        });
    };

    const handleDeleteAddress = (id) => {
        setAddresses(addresses.filter(address => address.id !== id));
    };

    const handleSetDefault = (id) => {
        setAddresses(addresses.map(address => ({
            ...address,
            isDefault: address.id === id
        })));
    };

    return (
        <DashboardLayout setPage={setPage}>
            <h1 className="text-2xl font-semibold text-gray-900">Address Settings</h1>

            <div className="mt-6 space-y-6">
                {/* Existing Addresses */}
                {addresses.map(address => (
                    <Card key={address.id}>
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">
                                    {address.label}
                                    {address.isDefault && (
                                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            Default
                                        </span>
                                    )}
                                </h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    {address.address}{address.unit ? `, ${address.unit}` : ''}<br />
                                    {address.city}, {address.state} {address.zipCode}
                                </p>
                            </div>
                            <div className="flex space-x-3">
                                {!address.isDefault && (
                                    <Button
                                        variant="outline"
                                        onClick={() => handleSetDefault(address.id)}
                                    >
                                        Set as Default
                                    </Button>
                                )}
                                <Button
                                    variant="danger"
                                    onClick={() => handleDeleteAddress(address.id)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}

                {/* Add New Address Form */}
                <Card>
                    <h2 className="text-lg font-medium text-gray-900">Add New Address</h2>
                    <form onSubmit={handleAddAddress} className="mt-4 space-y-4">
                        <Input
                            label="Label (e.g., Home, Work)"
                            value={newAddress.label}
                            onChange={(e) => setNewAddress({ ...newAddress, label: e.target.value })}
                            required
                        />
                        <Input
                            label="Street Address"
                            value={newAddress.address}
                            onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
                            required
                        />
                        <Input
                            label="Apartment, suite, etc. (optional)"
                            value={newAddress.unit}
                            onChange={(e) => setNewAddress({ ...newAddress, unit: e.target.value })}
                        />
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <Input
                                label="City"
                                value={newAddress.city}
                                onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                                required
                            />
                            <Input
                                label="State"
                                value={newAddress.state}
                                onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                                required
                            />
                            <Input
                                label="ZIP Code"
                                value={newAddress.zipCode}
                                onChange={(e) => setNewAddress({ ...newAddress, zipCode: e.target.value })}
                                required
                            />
                        </div>
                        <div className="flex items-center">
                            <input
                                id="default"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                checked={newAddress.isDefault}
                                onChange={(e) => setNewAddress({ ...newAddress, isDefault: e.target.checked })}
                            />
                            <label htmlFor="default" className="ml-2 block text-sm text-gray-900">
                                Set as default address
                            </label>
                        </div>
                        <div className="flex justify-end">
                            <Button type="submit">
                                Add Address
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </DashboardLayout>
    );
}
