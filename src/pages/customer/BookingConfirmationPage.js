import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Icon } from '../../components/common/Icon';
import { ICONS } from '../../assets/icons';

export default function BookingConfirmationPage({ setPage, booking }) {
    return (
        <DashboardLayout setPage={setPage}>
            <div className="max-w-3xl mx-auto text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <Icon path={ICONS.check} className="h-6 w-6 text-green-600" />
                </div>
                <h1 className="mt-3 text-2xl font-semibold text-gray-900">Booking Confirmed!</h1>
                <p className="mt-2 text-gray-600">
                    Your service has been successfully booked. We've sent a confirmation email with all the details.
                </p>

                <Card className="mt-8 text-left">
                    <h2 className="text-lg font-medium text-gray-900">Booking Details</h2>
                    <dl className="mt-4 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                        <div>
                            <dt className="text-sm font-medium text-gray-500">Service</dt>
                            <dd className="mt-1 text-sm text-gray-900">{booking?.service || 'Basic Plumbing Service'}</dd>
                        </div>
                        <div>
                            <dt className="text-sm font-medium text-gray-500">Provider</dt>
                            <dd className="mt-1 text-sm text-gray-900">{booking?.provider || 'John Smith'}</dd>
                        </div>
                        <div>
                            <dt className="text-sm font-medium text-gray-500">Date</dt>
                            <dd className="mt-1 text-sm text-gray-900">{booking?.date || '2025-07-28'}</dd>
                        </div>
                        <div>
                            <dt className="text-sm font-medium text-gray-500">Time</dt>
                            <dd className="mt-1 text-sm text-gray-900">{booking?.time || '10:00 AM'}</dd>
                        </div>
                        <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">Address</dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {booking?.address || '123 Main Street, Apt 4B, Los Angeles, CA 90012'}
                            </dd>
                        </div>
                    </dl>
                </Card>

                <div className="mt-8 flex justify-center space-x-4">
                    <Button
                        variant="outline"
                        onClick={() => setPage('customerDashboard')}
                    >
                        Go to Dashboard
                    </Button>
                    <Button onClick={() => window.print()}>
                        Print Details
                    </Button>
                </div>
            </div>
        </DashboardLayout>
    );
}
