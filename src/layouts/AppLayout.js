import React from 'react';
import { SolidIcon } from '../components/common/Icon';
import { ICONS } from '../assets/icons';

function Header({ setPage }) {
  return (
    <header className="bg-white py-4 px-4 sm:px-8 lg:px-16 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={() => setPage('home')} className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg"><SolidIcon path={ICONS.logo} className="w-6 h-6 text-white" /></div>
          <h1 className="text-2xl font-bold text-gray-800">ServiceHub</h1>
        </button>
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => setPage('home')} className="text-gray-600 hover:text-blue-600">How It Works</button>
          <button onClick={() => setPage('findProviders')} className="text-gray-600 hover:text-blue-600">Categories</button>
          <button onClick={() => setPage('providerSignup')} className="text-gray-600 hover:text-blue-600">For Providers</button>
          <button onClick={() => setPage('about')} className="text-gray-600 hover:text-blue-600">About Us</button>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={() => setPage('login')} className="text-gray-600 font-semibold hover:text-blue-600">Login</button>
          <button onClick={() => setPage('signup')} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

function Footer({ setPage }) {
    return (
        <footer className="bg-gray-50 text-gray-600 py-16 px-4 sm:px-8 lg:px-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-2">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-blue-600 p-2 rounded-lg"><SolidIcon path={ICONS.logo} className="w-6 h-6 text-white" /></div>
                        <h1 className="text-2xl font-bold text-gray-800">ServiceHub</h1>
                    </div>
                    <p className="mb-6">ServiceHub connects homeowners with trusted service providers for repairs, maintenance, and home improvement projects.</p>
                </div>
                <div>
                    <h5 className="font-bold text-gray-800 mb-4">Company</h5>
                    <ul className="space-y-2">
                        <li><button onClick={() => setPage('about')} className="hover:text-blue-600">About Us</button></li>
                        <li><button className="hover:text-blue-600">Careers</button></li>
                        <li><button className="hover:text-blue-600">Press</button></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold text-gray-800 mb-4">For Customers</h5>
                    <ul className="space-y-2">
                        <li><button onClick={() => setPage('findProviders')} className="hover:text-blue-600">Find Services</button></li>
                        <li><button onClick={() => setPage('home')} className="hover:text-blue-600">How to Book</button></li>
                        <li><button onClick={() => setPage('help')} className="hover:text-blue-600">FAQ</button></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold text-gray-800 mb-4">For Providers</h5>
                    <ul className="space-y-2">
                        <li><button onClick={() => setPage('providerSignup')} className="hover:text-blue-600">Become a Provider</button></li>
                        <li><button onClick={() => setPage('providerLogin')} className="hover:text-blue-600">Provider Login</button></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto mt-12 pt-8 border-t border-gray-200 text-center text-sm flex flex-col sm:flex-row justify-between">
                <p>&copy; 2025 ServiceHub. All rights reserved.</p>
                <div className="space-x-4 mt-4 sm:mt-0">
                    <button className="hover:text-blue-600">Privacy Policy</button>
                    <button onClick={() => setPage('terms')} className="hover:text-blue-600">Terms of Service</button>
                </div>
            </div>
        </footer>
    );
}

export default function AppLayout({ children, setPage }) {
    return (
        <div className="bg-white font-sans">
            <Header setPage={setPage} />
            <main>{children}</main>
            <Footer setPage={setPage} />
        </div>
    );
}
