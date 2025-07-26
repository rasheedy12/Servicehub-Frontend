import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Icon } from '../../components/common/Icon';
import { ICONS } from '../../assets/icons';

export default function RateExperiencePage({ setPage, booking }) {
    const [rating, setRating] = React.useState(0);
    const [comment, setComment] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Review submitted:', { rating, comment });
        setPage('customerDashboard');
    };

    return (
        <DashboardLayout setPage={setPage}>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-2xl font-semibold text-gray-900">Rate Your Experience</h1>

                <Card className="mt-6">
                    <div className="mb-6">
                        <h2 className="text-lg font-medium text-gray-900">Service Details</h2>
                        <dl className="mt-4 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                            <div>
                                <dt className="text-sm font-medium text-gray-500">Service</dt>
                                <dd className="mt-1 text-sm text-gray-900">{booking?.service || 'Plumbing Service'}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-500">Provider</dt>
                                <dd className="mt-1 text-sm text-gray-900">{booking?.provider || 'John Smith'}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-500">Date</dt>
                                <dd className="mt-1 text-sm text-gray-900">{booking?.date || '2025-07-26'}</dd>
                            </div>
                        </dl>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Rate your experience
                            </label>
                            <div className="mt-2 flex space-x-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setRating(star)}
                                        className={`p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                                    >
                                        <Icon
                                            path={ICONS.star}
                                            className={`h-8 w-8 ${
                                                star <= rating ? 'text-yellow-400' : 'text-gray-300'
                                            }`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Your Review
                            </label>
                            <textarea
                                rows={4}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Share your experience with this service provider..."
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                        </div>

                        <div className="flex justify-end space-x-3">
                            <Button
                                variant="outline"
                                onClick={() => setPage('customerDashboard')}
                            >
                                Skip
                            </Button>
                            <Button
                                type="submit"
                                disabled={!rating}
                            >
                                Submit Review
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </DashboardLayout>
    );
}
