import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';

export default function AdminSettings({ setPage }) {
    const handleSave = (section) => {
        console.log('Save settings for section:', section);
    };

    return (
        <DashboardLayout setPage={setPage} activeTab="settings">
            <h1 className="text-2xl font-semibold text-gray-900">Admin Settings</h1>

            <div className="mt-6 space-y-6">
                {/* General Settings */}
                <Card>
                    <h2 className="text-lg font-medium text-gray-900">General Settings</h2>
                    <div className="mt-4 space-y-4">
                        <Input
                            label="Platform Name"
                            defaultValue="ServiceHub"
                        />
                        <Input
                            label="Support Email"
                            type="email"
                            defaultValue="support@servicehub.com"
                        />
                        <Input
                            label="Contact Phone"
                            type="tel"
                            defaultValue="+1 (555) 123-4567"
                        />
                        <Button onClick={() => handleSave('general')}>
                            Save Changes
                        </Button>
                    </div>
                </Card>

                {/* Email Settings */}
                <Card>
                    <h2 className="text-lg font-medium text-gray-900">Email Settings</h2>
                    <div className="mt-4 space-y-4">
                        <Input
                            label="SMTP Host"
                            defaultValue="smtp.example.com"
                        />
                        <Input
                            label="SMTP Port"
                            type="number"
                            defaultValue="587"
                        />
                        <Input
                            label="SMTP Username"
                            type="email"
                            defaultValue="noreply@servicehub.com"
                        />
                        <Input
                            label="SMTP Password"
                            type="password"
                            defaultValue="••••••••"
                        />
                        <Button onClick={() => handleSave('email')}>
                            Save Changes
                        </Button>
                    </div>
                </Card>

                {/* Payment Settings */}
                <Card>
                    <h2 className="text-lg font-medium text-gray-900">Payment Settings</h2>
                    <div className="mt-4 space-y-4">
                        <Input
                            label="Stripe Public Key"
                            defaultValue="pk_test_..."
                        />
                        <Input
                            label="Stripe Secret Key"
                            type="password"
                            defaultValue="••••••••"
                        />
                        <Input
                            label="Platform Fee (%)"
                            type="number"
                            defaultValue="10"
                        />
                        <Button onClick={() => handleSave('payment')}>
                            Save Changes
                        </Button>
                    </div>
                </Card>

                {/* Security Settings */}
                <Card>
                    <h2 className="text-lg font-medium text-gray-900">Security Settings</h2>
                    <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                            <input
                                id="twoFactor"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="twoFactor" className="ml-2 block text-sm text-gray-900">
                                Enable Two-Factor Authentication
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="forceSsl"
                                type="checkbox"
                                defaultChecked
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="forceSsl" className="ml-2 block text-sm text-gray-900">
                                Force SSL
                            </label>
                        </div>
                        <Button onClick={() => handleSave('security')}>
                            Save Changes
                        </Button>
                    </div>
                </Card>
            </div>
        </DashboardLayout>
    );
}
