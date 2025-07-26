import React, { useState } from 'react';
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/public/HomePage';
import AboutPage from './pages/public/AboutPage';
import TermsPage from './pages/public/TermsPage';
import HelpCenterPage from './pages/public/HelpCenterPage';
import CustomerLoginPage from './pages/auth/CustomerLoginPage';
import CustomerSignupPage from './pages/auth/CustomerSignupPage';
import ProviderLoginPage from './pages/auth/ProviderLoginPage';
import ProviderSignupPage from './pages/auth/ProviderSignupPage';
import AdminLoginPage from './pages/auth/AdminLoginPage';
import CustomerDashboard from './pages/customer/CustomerDashboard';
import FindProvidersPage from './pages/customer/FindProvidersPage';
import ProviderProfilePage from './pages/customer/ProviderProfilePage';
import BookingPage from './pages/customer/BookingPage';
import BookingConfirmationPage from './pages/customer/BookingConfirmationPage';
import RateExperiencePage from './pages/customer/RateExperiencePage';
import AddressSettingsPage from './pages/customer/AddressSettingsPage';
import PaymentSettingsPage from './pages/customer/PaymentSettingsPage';
import ProviderDashboard from './pages/provider/ProviderDashboard';
import ProviderBookingsPage from './pages/provider/ProviderBookingsPage';
import ProviderCalendarPage from './pages/provider/ProviderCalendarPage';
import ProviderProfileSettings from './pages/provider/ProviderProfileSettings';
import ServicesAndPricingPage from './pages/provider/ServicesAndPricingPage';
import ProviderEarningsPage from './pages/provider/ProviderEarningsPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminBookingManagement from './pages/admin/AdminBookingManagement';
import AdminUserManagement from './pages/admin/AdminUserManagement';
import AdminContentManagement from './pages/admin/AdminContentManagement';
import AdminSettings from './pages/admin/AdminSettings';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      // Public Pages
      case 'home': return <AppLayout setPage={setCurrentPage}><HomePage setPage={setCurrentPage} /></AppLayout>;
      case 'about': return <AppLayout setPage={setCurrentPage}><AboutPage /></AppLayout>;
      case 'terms': return <AppLayout setPage={setCurrentPage}><TermsPage /></AppLayout>;
      case 'help': return <AppLayout setPage={setCurrentPage}><HelpCenterPage /></AppLayout>;
      case 'findProviders': return <AppLayout setPage={setCurrentPage}><FindProvidersPage setPage={setCurrentPage} /></AppLayout>;
      
      // Auth Pages
      case 'login': return <CustomerLoginPage setPage={setCurrentPage} />;
      case 'signup': return <CustomerSignupPage setPage={setCurrentPage} />;
      case 'providerLogin': return <ProviderLoginPage setPage={setCurrentPage} />;
      case 'providerSignup': return <ProviderSignupPage setPage={setCurrentPage} />;
      case 'adminLogin': return <AdminLoginPage setPage={setCurrentPage} />;

      // Customer Dashboard
      case 'customerDashboard': return <CustomerDashboard setPage={setCurrentPage} />;
      case 'providerProfile': return <AppLayout setPage={setCurrentPage}><ProviderProfilePage setPage={setCurrentPage} /></AppLayout>;
      case 'booking': return <AppLayout setPage={setCurrentPage}><BookingPage setPage={setCurrentPage} /></AppLayout>;
      case 'bookingConfirmation': return <AppLayout setPage={setCurrentPage}><BookingConfirmationPage setPage={setCurrentPage} /></AppLayout>;
      case 'rateExperience': return <RateExperiencePage setPage={setCurrentPage} />;
      case 'addressSettings': return <AddressSettingsPage setPage={setCurrentPage} />;
      case 'paymentSettings': return <PaymentSettingsPage setPage={setCurrentPage} />;

      // Provider Dashboard
      case 'providerDashboard': return <ProviderDashboard setPage={setCurrentPage} />;
      case 'providerBookings': return <ProviderBookingsPage setPage={setCurrentPage} />;
      case 'providerCalendar': return <ProviderCalendarPage setPage={setCurrentPage} />;
      case 'providerProfileSettings': return <ProviderProfileSettings setPage={setCurrentPage} />;
      case 'servicesAndPricing': return <ServicesAndPricingPage setPage={setCurrentPage} />;
      case 'providerEarnings': return <ProviderEarningsPage setPage={setCurrentPage} />;

      // Admin Dashboard
      case 'adminDashboard': return <AdminDashboard setPage={setCurrentPage} />;
      case 'adminBookings': return <AdminBookingManagement setPage={setCurrentPage} />;
      case 'adminUsers': return <AdminUserManagement setPage={setCurrentPage} />;
      case 'adminContent': return <AdminContentManagement setPage={setCurrentPage} />;
      case 'adminSettings': return <AdminSettings setPage={setCurrentPage} />;

      default: return <AppLayout setPage={setCurrentPage}><HomePage setPage={setCurrentPage} /></AppLayout>;
    }
  };

  return <>{renderPage()}</>;
}