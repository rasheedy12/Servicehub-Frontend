import React, { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';

export default function ProviderProfileSettings({ setPage }) {
    const [profile, setProfile] = useState({
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@example.com',
        phone: '(555) 123-4567',
        businessName: 'Smith\'s Plumbing',
        serviceCategory: 'Plumbing',
        description: 'Professional plumber with over 15 years of experience. Specializing in residential and commercial plumbing services.',
        businessLicense: 'PL-123456',
        insurance: 'INS-789012',
        serviceArea: 'Los Angeles County',
        availability: {
            monday: { start: '09:00', end: '17:00', isAvailable: true },
            tuesday: { start: '09:00', end: '17:00', isAvailable: true },
            wednesday: { start: '09:00', end: '17:00', isAvailable: true },
            thursday: { start: '09:00', end: '17:00', isAvailable: true },
            friday: { start: '09:00', end: '17:00', isAvailable: true },
            saturday: { start: '10:00', end: '15:00', isAvailable: true },
            sunday: { start: '00:00', end: '00:00', isAvailable: false }
        }
    });

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        console.log('Update profile:', profile);
    };

    const handleAvailabilityChange = (day, field, value) => {
        setProfile(prev => ({
            ...prev,
            availability: {
                ...prev.availability,
                [day]: {
                    ...prev.availability[day],
                    [field]: value
                }
            }
        }));
    };

    return (
        <DashboardLayout setPage={setPage} activeTab="profile">
            <h1 className="text-2xl font-semibold text-gray-900">Profile Settings</h1>

            <div className="mt-6 space-y-6">
                {/* Personal Information */}
                <Card>
                    <h2 className="text-lg font-medium text-gray-900">Personal Information</h2>
                    <form onSubmit={handleUpdateProfile} className="mt-4 space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <Input
                                label="First Name"
                                value={profile.firstName}
                                onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                            />
                            <Input
                                label="Last Name"
                                value={profile.lastName}
                                onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                            />
                        </div>
                        <Input
                            label="Email"
                            type="email"
                            value={profile.email}
                            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        />
                        <Input
                            label="Phone"
                            type="tel"
                            value={profile.phone}
                            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        />
                        <div className="flex justify-end">
                            <Button type="submit">Save Changes</Button>
                        </div>
                    </form>
                </Card>

                {/* Business Information */}
                <Card>
                    <h2 className="text-lg font-medium text-gray-900">Business Information</h2>
                    <form className="mt-4 space-y-4">
                        <Input
                            label="Business Name"
                            value={profile.businessName}
                            onChange={(e) => setProfile({ ...profile, businessName: e.target.value })}
                        />
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Business Description
                            </label>
                            <textarea
                                rows={4}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                value={profile.description}
                                onChange={(e) => setProfile({ ...profile, description: e.target.value })}
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <Input
                                label="Business License Number"
                                value={profile.businessLicense}
                                onChange={(e) => setProfile({ ...profile, businessLicense: e.target.value })}
                            />
                            <Input
                                label="Insurance Policy Number"
                                value={profile.insurance}
                                onChange={(e) => setProfile({ ...profile, insurance: e.target.value })}
                            />
                        </div>
                        <Input
                            label="Service Area"
                            value={profile.serviceArea}
                            onChange={(e) => setProfile({ ...profile, serviceArea: e.target.value })}
                        />
                        <div className="flex justify-end">
                            <Button type="submit">Save Changes</Button>
                        </div>
                    </form>
                </Card>

                {/* Availability Settings */}
                <Card>
                    <h2 className="text-lg font-medium text-gray-900">Availability Settings</h2>
                    <div className="mt-4 space-y-4">
                        {Object.entries(profile.availability).map(([day, hours]) => (
                            <div key={day} className="flex items-center space-x-4">
                                <div className="w-28">
                                    <label className="block text-sm font-medium text-gray-700 capitalize">
                                        {day}
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={hours.isAvailable}
                                        onChange={(e) => handleAvailabilityChange(day, 'isAvailable', e.target.checked)}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <span className="text-sm text-gray-500">Available</span>
                                </div>
                                {hours.isAvailable && (
                                    <>
                                        <input
                                            type="time"
                                            value={hours.start}
                                            onChange={(e) => handleAvailabilityChange(day, 'start', e.target.value)}
                                            className="block w-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                        <span className="text-gray-500">to</span>
                                        <input
                                            type="time"
                                            value={hours.end}
                                            onChange={(e) => handleAvailabilityChange(day, 'end', e.target.value)}
                                            className="block w-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </>
                                )}
                            </div>
                        ))}
                        <div className="flex justify-end">
                            <Button type="button" onClick={() => console.log('Save availability:', profile.availability)}>
                                Save Changes
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </DashboardLayout>
    );
}
