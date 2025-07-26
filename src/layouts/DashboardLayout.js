import React from 'react';
import { Icon } from '../components/common/Icon';
import { ICONS } from '../assets/icons';

export default function DashboardLayout({ children, setPage, activeTab }) {
    const navigation = [
        { name: 'Overview', icon: ICONS.home, href: 'dashboard' },
        { name: 'Bookings', icon: ICONS.calendar, href: 'bookings' },
        { name: 'Messages', icon: ICONS.chat, href: 'messages' },
        { name: 'Settings', icon: ICONS.settings, href: 'settings' }
    ];

    return (
        <div className="h-screen flex overflow-hidden bg-gray-100">
            {/* Sidebar */}
            <div className="hidden md:flex md:flex-shrink-0">
                <div className="flex flex-col w-64">
                    <div className="flex flex-col h-0 flex-1">
                        <div className="flex items-center h-16 flex-shrink-0 px-4 bg-blue-600">
                            <div className="flex items-center space-x-3">
                                <div className="bg-white p-2 rounded-lg">
                                    <Icon path={ICONS.logo} className="h-6 w-6 text-blue-600" />
                                </div>
                                <span className="text-white text-lg font-semibold">ServiceHub</span>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col overflow-y-auto">
                            <nav className="flex-1 px-2 py-4 bg-white space-y-1">
                                {navigation.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => setPage(item.href)}
                                        className={`${
                                            activeTab === item.href
                                                ? 'bg-blue-50 text-blue-600'
                                                : 'text-gray-600 hover:bg-gray-50'
                                        } group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full`}
                                    >
                                        <Icon
                                            path={item.icon}
                                            className={`mr-3 flex-shrink-0 h-6 w-6 ${
                                                activeTab === item.href
                                                    ? 'text-blue-600'
                                                    : 'text-gray-400 group-hover:text-gray-500'
                                            }`}
                                        />
                                        {item.name}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="flex flex-col w-0 flex-1 overflow-hidden">
                <main className="flex-1 relative overflow-y-auto focus:outline-none">
                    <div className="py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
