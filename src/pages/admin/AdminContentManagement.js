import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';

export default function AdminContentManagement({ setPage }) {
    const handleSaveChanges = (section) => {
        console.log('Save changes for section:', section);
    };

    return (
        <DashboardLayout setPage={setPage} activeTab="content">
            <h1 className="text-2xl font-semibold text-gray-900">Content Management</h1>

            <div className="mt-6 space-y-6">
                {/* Homepage Content */}
                <Card>
                    <h2 className="text-lg font-medium text-gray-900">Homepage Content</h2>
                    <div className="mt-4 space-y-4">
                        <Input
                            label="Hero Title"
                            defaultValue="Find Trusted Service Providers"
                        />
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Hero Description
                            </label>
                            <textarea
                                rows={3}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                defaultValue="Connect with verified service professionals in your area for all your home service needs."
                            />
                        </div>
                        <Button onClick={() => handleSaveChanges('homepage')}>
                            Save Changes
                        </Button>
                    </div>
                </Card>

                {/* FAQ Management */}
                <Card>
                    <h2 className="text-lg font-medium text-gray-900">FAQ Management</h2>
                    <div className="mt-4 space-y-4">
                        <div className="space-y-4">
                            {/* FAQ Item */}
                            <div className="border border-gray-200 rounded-md p-4">
                                <Input
                                    label="Question"
                                    defaultValue="How do I book a service?"
                                />
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Answer
                                    </label>
                                    <textarea
                                        rows={3}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        defaultValue="You can book a service by browsing our list of providers, selecting one that matches your needs, and clicking the 'Book Now' button on their profile."
                                    />
                                </div>
                            </div>
                        </div>
                        <Button onClick={() => handleSaveChanges('faq')}>
                            Save Changes
                        </Button>
                    </div>
                </Card>

                {/* Terms & Conditions */}
                <Card>
                    <h2 className="text-lg font-medium text-gray-900">Terms & Conditions</h2>
                    <div className="mt-4">
                        <textarea
                            rows={10}
                            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            defaultValue="Terms and conditions content..."
                        />
                        <div className="mt-4">
                            <Button onClick={() => handleSaveChanges('terms')}>
                                Save Changes
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </DashboardLayout>
    );
}
