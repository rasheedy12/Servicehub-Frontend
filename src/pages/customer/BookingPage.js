import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';

export default function BookingPage({ setPage, provider }) {
    const [formData, setFormData] = React.useState({
        date: '',
        time: '',
        service: '',
        notes: '',
        address: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Booking submitted:', formData);
        setPage('bookingConfirmation');
    };

    return (
        <DashboardLayout setPage={setPage}>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-2xl font-semibold text-gray-900">Book a Service</h1>

                <Card className="mt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Select Service
                            </label>
                            <select
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                value={formData.service}
                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                required
                            >
                                <option value="">Select a service</option>
                                <option value="basic">Basic Service ($80/hour)</option>
                                <option value="premium">Premium Service ($120/hour)</option>
                                <option value="emergency">Emergency Service ($150/hour)</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <Input
                                type="date"
                                label="Date"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                required
                            />
                            <Input
                                type="time"
                                label="Time"
                                value={formData.time}
                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Service Address
                            </label>
                            <textarea
                                rows={3}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Enter your address"
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Additional Notes
                            </label>
                            <textarea
                                rows={3}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Any special instructions or details about the service needed"
                                value={formData.notes}
                                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            />
                        </div>

                        <div className="flex justify-end space-x-3">
                            <Button
                                variant="outline"
                                onClick={() => setPage('providerProfile')}
                            >
                                Cancel
                            </Button>
                            <Button type="submit">
                                Confirm Booking
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </DashboardLayout>
    );
}
