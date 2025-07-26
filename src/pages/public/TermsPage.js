import React from 'react';

export default function TermsPage() {
    const sections = [
        {
            title: "1. Acceptance of Terms",
            content: "By accessing and using ServiceHub, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this service."
        },
        {
            title: "2. User Registration",
            content: "To access certain features of ServiceHub, you may be required to register for an account. You agree to provide accurate and complete information during registration and to update such information to keep it accurate and current."
        },
        {
            title: "3. Service Provider Terms",
            content: "Service providers listed on ServiceHub are independent contractors. ServiceHub is not responsible for the performance, pricing, or conduct of service providers. We recommend reviewing ratings, reviews, and credentials before engaging any service provider."
        },
        {
            title: "4. User Responsibilities",
            content: "Users are responsible for all activities that occur under their account. Users must not misuse the service or help anyone else do so. This includes but is not limited to fraudulent bookings, harassment, or any illegal activities."
        },
        {
            title: "5. Privacy Policy",
            content: "Your use of ServiceHub is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding your personal information."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16">
                <div className="container mx-auto text-center max-w-4xl">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms of Service</h1>
                    <p className="text-gray-600">Last updated: July 26, 2025</p>
                </div>
            </section>

            {/* Terms Content */}
            <section className="py-16 px-4 sm:px-8 lg:px-16">
                <div className="container mx-auto max-w-4xl">
                    <div className="prose prose-lg mx-auto">
                        <p className="text-gray-600 mb-8">
                            Welcome to ServiceHub. These terms of service outline the rules and regulations
                            for the use of our platform. By using our service, you accept these terms in full.
                        </p>

                        {sections.map((section, index) => (
                            <div key={index} className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.title}</h2>
                                <p className="text-gray-600">{section.content}</p>
                            </div>
                        ))}

                        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h2>
                            <p className="text-gray-600">
                                If you have any questions about these Terms of Service, please contact us at:
                                <br />
                                Email: support@servicehub.com
                                <br />
                                Phone: 1-800-SERVICE-HUB
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
