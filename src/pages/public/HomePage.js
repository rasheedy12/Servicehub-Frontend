import React from 'react';
import { Icon as CommonIcon, SolidIcon as CommonSolidIcon } from '../../components/common/Icon';
import { ICONS as ASSET_ICONS } from '../../assets/icons';
import { mockData as MOCK_DATA } from '../../utils/mockData';

export default function HomePage({ setPage }) {
    const howItWorksSteps = [
        { icon: ASSET_ICONS.search, title: "Search", description: "Enter your location and select the service category you need help with." },
        { icon: ASSET_ICONS.quote, title: "Compare", description: "Browse profiles, compare ratings, and read reviews from other customers." },
        { icon: ASSET_ICONS.book, title: "Book", description: "Schedule an appointment with your chosen service provider at a time that works for you." }
    ];
    const popularServices = [
        { icon: ASSET_ICONS.plumbing, title: "Plumbing", description: "Leaky faucets, clogged drains, pipe repairs, and more." },
        { icon: ASSET_ICONS.electrician, title: "Electrical", description: "Wiring, lighting installation, electrical repairs, and upgrades." },
        { icon: ASSET_ICONS.cleaning, title: "Cleaning", description: "Home cleaning, deep cleaning, move-in/out cleaning services." },
        { icon: ASSET_ICONS.hvac, title: "HVAC", description: "Heating, ventilation, air conditioning installation and repair." },
    ];
    
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gray-50 py-20 px-4 sm:px-8 lg:px-16">
                <div className="container mx-auto text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Find Trusted Service Providers Near You</h1>
                    <p className="text-gray-600 mb-10">Connect with qualified professionals for home repairs, maintenance, and improvements.</p>
                    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-4">
                        <div className="w-full md:w-1/2 flex items-center border border-gray-200 rounded-lg p-2">
                            <CommonIcon path={ASSET_ICONS.search} className="w-6 h-6 text-gray-400 mr-3" />
                            <input type="text" placeholder="Select Category" className="w-full bg-transparent focus:outline-none" />
                        </div>
                        <div className="w-full md:w-1/2 flex items-center border border-gray-200 rounded-lg p-2">
                            <CommonIcon path={ASSET_ICONS.location} className="w-6 h-6 text-gray-400 mr-3" />
                            <input type="text" placeholder="Enter your location" className="w-full bg-transparent focus:outline-none" />
                        </div>
                        <button onClick={() => setPage('findProviders')} className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex-shrink-0">
                            Search
                        </button>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 px-4 sm:px-8 lg:px-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">How it Works</h2>
                    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Find and book trusted service providers in just a few simple steps.</p>
                    <div className="grid md:grid-cols-3 gap-12">
                        {howItWorksSteps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
                                    <CommonSolidIcon path={step.icon} className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Service Categories */}
            <section className="bg-gray-50 py-20 px-4 sm:px-8 lg:px-16">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Popular Service Categories</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Browse our most requested service categories.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {popularServices.map((cat, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-left">
                                <div className="bg-blue-100 text-blue-600 rounded-lg p-3 mb-4 inline-block">
                                    <CommonSolidIcon path={cat.icon} className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{cat.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm">{cat.description}</p>
                                <button onClick={() => setPage('findProviders')} className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                    Find Help
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <button onClick={() => setPage('findProviders')} className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                            View All Categories
                        </button>
                    </div>
                </div>
            </section>
            
            {/* Testimonials */}
            <section className="py-20 px-4 sm:px-8 lg:px-16">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Hear from people who have used ServiceHub to find trusted professionals.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {MOCK_DATA.testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                                <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                                    <div>
                                        <p className="font-bold text-gray-800">{testimonial.name}</p>
                                        <p className="text-gray-500 text-sm">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-blue-600 text-white py-20 px-4 sm:px-8 lg:px-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Ready to Find Help for Your Home?</h2>
                    <p className="mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers who have found reliable service providers through ServiceHub.</p>
                    <div className="flex justify-center items-center gap-4">
                        <button onClick={() => setPage('findProviders')} className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                            Find Help Now
                        </button>
                        <button onClick={() => setPage('signup')} className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-500 transition-colors">
                            Sign Up
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
