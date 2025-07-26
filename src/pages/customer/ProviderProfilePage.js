import React from 'react';
import { Icon as CommonIcon } from '../../components/common/Icon';
import { ICONS as ASSET_ICONS } from '../../assets/icons';

export default function ProviderProfilePage() {
    const provider = {
        id: 1,
        name: "John Smith",
        business: "Smith's Plumbing",
        category: "Plumbing",
        rating: 4.8,
        reviewCount: 156,
        location: "Los Angeles, CA",
        image: "https://example.com/provider1.jpg",
        description: "Professional plumber with over 15 years of experience. Specializing in residential and commercial plumbing services.",
        services: [
            {
                name: "Basic Plumbing Service",
                price: "$80/hour",
                description: "General plumbing repairs and maintenance"
            },
            {
                name: "Emergency Service",
                price: "$120/hour",
                description: "24/7 emergency plumbing services"
            },
            {
                name: "Installation",
                price: "Varies",
                description: "Installation of new fixtures and appliances"
            }
        ],
        reviews: [
            {
                id: 1,
                author: "Jane Doe",
                rating: 5,
                date: "2025-07-20",
                comment: "Excellent service! Fixed our leak quickly and professionally."
            },
            {
                id: 2,
                author: "Mike Johnson",
                rating: 4,
                date: "2025-07-15",
                comment: "Good work, arrived on time and cleaned up afterward."
            }
        ]
    };

    const handleBooking = () => {
        // Add booking logic here
        console.log('Booking service with provider:', provider.id);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-24 w-24 rounded-full"
                                src={provider.image}
                                alt={provider.name}
                            />
                        </div>
                        <div className="ml-6">
                            <h1 className="text-3xl font-bold text-gray-900">{provider.business}</h1>
                            <div className="mt-2">
                                <p className="text-gray-600">{provider.name}</p>
                                <div className="flex items-center mt-1">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <CommonIcon
                                                key={i}
                                                path={ASSET_ICONS.star}
                                                className={`h-5 w-5 ${
                                                    i < Math.floor(provider.rating)
                                                        ? 'text-yellow-400'
                                                        : 'text-gray-300'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <p className="ml-2 text-sm text-gray-600">
                                        {provider.rating} ({provider.reviewCount} reviews)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Left Column - Info */}
                    <div className="lg:col-span-2">
                        {/* About */}
                        <div className="bg-white shadow sm:rounded-lg mb-6">
                            <div className="px-4 py-5 sm:p-6">
                                <h2 className="text-lg font-medium text-gray-900 mb-4">About</h2>
                                <p className="text-gray-600">{provider.description}</p>
                                <div className="mt-4 grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            <CommonIcon path={ASSET_ICONS.category} className="inline h-4 w-4 mr-1" />
                                            {provider.category}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            <CommonIcon path={ASSET_ICONS.location} className="inline h-4 w-4 mr-1" />
                                            {provider.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="bg-white shadow sm:rounded-lg mb-6">
                            <div className="px-4 py-5 sm:p-6">
                                <h2 className="text-lg font-medium text-gray-900 mb-4">Services</h2>
                                <div className="space-y-4">
                                    {provider.services.map((service, index) => (
                                        <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="text-base font-medium text-gray-900">{service.name}</h3>
                                                    <p className="mt-1 text-sm text-gray-600">{service.description}</p>
                                                </div>
                                                <p className="text-sm font-medium text-gray-900">{service.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Reviews */}
                        <div className="bg-white shadow sm:rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <h2 className="text-lg font-medium text-gray-900 mb-4">Reviews</h2>
                                <div className="space-y-6">
                                    {provider.reviews.map((review) => (
                                        <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-medium text-gray-900">{review.author}</p>
                                                    <p className="text-sm text-gray-500">{review.date}</p>
                                                </div>
                                                <div className="flex items-center">
                                                    {[...Array(5)].map((_, i) => (
                                                        <CommonIcon
                                                            key={i}
                                                            path={ASSET_ICONS.star}
                                                            className={`h-4 w-4 ${
                                                                i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                                            }`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="mt-2 text-gray-600">{review.comment}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Booking */}
                    <div className="lg:col-span-1">
                        <div className="bg-white shadow sm:rounded-lg sticky top-6">
                            <div className="px-4 py-5 sm:p-6">
                                <h2 className="text-lg font-medium text-gray-900 mb-4">Book a Service</h2>
                                <form onSubmit={(e) => { e.preventDefault(); handleBooking(); }}>
                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                                                Service Type
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
                                            >
                                                {provider.services.map((service, index) => (
                                                    <option key={index} value={service.name}>{service.name}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                                                Preferred Date
                                            </label>
                                            <input
                                                type="date"
                                                id="date"
                                                name="date"
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                                                Preferred Time
                                            </label>
                                            <input
                                                type="time"
                                                id="time"
                                                name="time"
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                                                Additional Notes
                                            </label>
                                            <textarea
                                                id="notes"
                                                name="notes"
                                                rows={3}
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Describe your service needs..."
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Book Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
