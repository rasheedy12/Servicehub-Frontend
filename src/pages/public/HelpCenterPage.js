import React from 'react';
import { Icon as CommonIcon } from '../../components/common/Icon';
import { ICONS as ASSET_ICONS } from '../../assets/icons';

export default function HelpCenterPage() {
    const categories = [
        {
            icon: ASSET_ICONS.faq,
            title: "Frequently Asked Questions",
            description: "Find answers to common questions about using ServiceHub."
        },
        {
            icon: ASSET_ICONS.guide,
            title: "User Guides",
            description: "Step-by-step guides on how to use our platform effectively."
        },
        {
            icon: ASSET_ICONS.contact,
            title: "Contact Support",
            description: "Get in touch with our customer support team."
        }
    ];

    const faqs = [
        {
            question: "How do I book a service?",
            answer: "To book a service, simply search for the service category you need, browse available providers, compare ratings and reviews, and schedule an appointment with your chosen professional."
        },
        {
            question: "What if I'm not satisfied with the service?",
            answer: "Your satisfaction is our priority. If you're not happy with the service provided, please contact our support team within 48 hours of service completion, and we'll work to resolve the issue."
        },
        {
            question: "How are service providers verified?",
            answer: "All service providers undergo a thorough verification process including background checks, license verification, and insurance coverage validation before being listed on our platform."
        },
        {
            question: "Can I cancel or reschedule a booking?",
            answer: "Yes, you can cancel or reschedule a booking up to 24 hours before the scheduled service time without any penalty. Late cancellations may incur a fee."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16">
                <div className="container mx-auto text-center max-w-4xl">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Help Center</h1>
                    <p className="text-gray-600 mb-8">Find answers and support for all your ServiceHub needs</p>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <div className="flex items-center border border-gray-200 rounded-lg p-2">
                            <CommonIcon path={ASSET_ICONS.search} className="w-6 h-6 text-gray-400 mr-3" />
                            <input 
                                type="text" 
                                placeholder="Search for help articles..." 
                                className="w-full bg-transparent focus:outline-none"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Help Categories */}
            <section className="py-16 px-4 sm:px-8 lg:px-16">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {categories.map((category, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <div className="bg-blue-100 text-blue-600 rounded-lg p-3 mb-4 inline-block">
                                    <CommonIcon path={category.icon} className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{category.title}</h3>
                                <p className="text-gray-600 mb-4">{category.description}</p>
                                <button className="text-blue-600 font-semibold hover:text-blue-700">
                                    Learn More →
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Support */}
            <section className="py-16 px-4 sm:px-8 lg:px-16">
                <div className="container mx-auto text-center max-w-4xl">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Still Need Help?</h2>
                    <p className="text-gray-600 mb-8">Our support team is available 24/7 to assist you</p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            Contact Support
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                            Live Chat
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
