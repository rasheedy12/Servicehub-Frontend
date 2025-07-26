import React, { useState } from 'react';
import { Icon as CommonIcon } from '../../components/common/Icon';
import { ICONS as ASSET_ICONS } from '../../assets/icons';

export default function FindProvidersPage() {
    const [searchParams, setSearchParams] = useState({
        serviceCategory: '',
        location: '',
        rating: 0
    });

    const providers = [
        {
            id: 1,
            name: "John Smith",
            business: "Smith's Plumbing",
            category: "Plumbing",
            rating: 4.8,
            reviewCount: 156,
            location: "Los Angeles, CA",
            image: "https://example.com/provider1.jpg"
        },
        // Add more providers as needed
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        // Add search logic here
        console.log('Searching with params:', searchParams);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Find Service Providers</h1>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {/* Search Form */}
                <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 mb-6">
                    <form onSubmit={handleSearch}>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                            <div>
                                <label htmlFor="serviceCategory" className="block text-sm font-medium text-gray-700">
                                    Service Category
                                </label>
                                <select
                                    id="serviceCategory"
                                    name="serviceCategory"
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
                                    value={searchParams.serviceCategory}
                                    onChange={(e) => setSearchParams({ ...searchParams, serviceCategory: e.target.value })}
                                >
                                    <option value="">Select a category</option>
                                    <option value="plumbing">Plumbing</option>
                                    <option value="electrical">Electrical</option>
                                    <option value="cleaning">Cleaning</option>
                                    {/* Add more categories */}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                    Location
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <CommonIcon path={ASSET_ICONS.location} className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        id="location"
                                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Enter your location"
                                        value={searchParams.location}
                                        onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                                    Minimum Rating
                                </label>
                                <select
                                    id="rating"
                                    name="rating"
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
                                    value={searchParams.rating}
                                    onChange={(e) => setSearchParams({ ...searchParams, rating: Number(e.target.value) })}
                                >
                                    <option value="0">Any rating</option>
                                    <option value="4">4+ stars</option>
                                    <option value="4.5">4.5+ stars</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                <CommonIcon path={ASSET_ICONS.search} className="h-5 w-5 mr-2" />
                                Search Providers
                            </button>
                        </div>
                    </form>
                </div>

                {/* Results */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {providers.map((provider) => (
                        <div key={provider.id} className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-12 w-12 rounded-full"
                                            src={provider.image}
                                            alt={provider.name}
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">{provider.business}</h3>
                                        <p className="text-sm text-gray-500">{provider.name}</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-sm text-gray-500">
                                        <CommonIcon path={ASSET_ICONS.category} className="inline h-4 w-4 mr-1" />
                                        {provider.category}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        <CommonIcon path={ASSET_ICONS.location} className="inline h-4 w-4 mr-1" />
                                        {provider.location}
                                    </p>
                                    <div className="flex items-center mt-2">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <CommonIcon
                                                    key={i}
                                                    path={ASSET_ICONS.star}
                                                    className={`h-4 w-4 ${
                                                        i < Math.floor(provider.rating)
                                                            ? 'text-yellow-400'
                                                            : 'text-gray-300'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                        <p className="ml-2 text-sm text-gray-500">
                                            {provider.rating} ({provider.reviewCount} reviews)
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
