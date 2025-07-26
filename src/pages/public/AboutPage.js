import React from 'react';
import { Icon as CommonIcon } from '../../components/common/Icon';
import { ICONS as ASSET_ICONS } from '../../assets/icons';

export default function AboutPage() {
    const missionStatement = {
        title: "Our Mission",
        description: "To connect homeowners with trusted service professionals, making home maintenance and improvement simple, reliable, and hassle-free."
    };

    const values = [
        {
            icon: ASSET_ICONS.trust,
            title: "Trust & Reliability",
            description: "We verify all service providers and maintain high quality standards."
        },
        {
            icon: ASSET_ICONS.convenience,
            title: "Convenience",
            description: "Book services easily and manage everything from one platform."
        },
        {
            icon: ASSET_ICONS.quality,
            title: "Quality Service",
            description: "We ensure top-notch service delivery and customer satisfaction."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gray-50 py-20 px-4 sm:px-8 lg:px-16">
                <div className="container mx-auto text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About ServiceHub</h1>
                    <p className="text-gray-600 text-lg mb-8">Your trusted platform for finding reliable home service professionals</p>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-20 px-4 sm:px-8 lg:px-16">
                <div className="container mx-auto text-center max-w-3xl">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{missionStatement.title}</h2>
                    <p className="text-gray-600 text-lg">{missionStatement.description}</p>
                </div>
            </section>

            {/* Our Values */}
            <section className="bg-gray-50 py-20 px-4 sm:px-8 lg:px-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {values.map((value, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4 inline-block">
                                    <CommonIcon path={value.icon} className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-20 px-4 sm:px-8 lg:px-16">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Story</h2>
                    <div className="prose prose-lg mx-auto text-gray-600">
                        <p className="mb-4">
                            Founded in 2025, ServiceHub was born from a simple idea: making it easier for homeowners 
                            to find and hire trusted service professionals. We understand the challenges of finding 
                            reliable help for home maintenance and improvement projects.
                        </p>
                        <p className="mb-4">
                            What started as a small platform has grown into a comprehensive service marketplace, 
                            connecting thousands of qualified professionals with homeowners across the country. 
                            Our commitment to quality, trust, and customer satisfaction remains at the core of 
                            everything we do.
                        </p>
                        <p>
                            Today, we're proud to be the go-to platform for home services, continuously innovating 
                            to make home maintenance and improvement more accessible and hassle-free for everyone.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
