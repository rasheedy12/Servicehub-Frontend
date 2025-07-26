import React, { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';

export default function ServicesAndPricingPage({ setPage }) {
    const [services, setServices] = useState([
        {
            id: 1,
            name: 'Basic Plumbing Service',
            description: 'General plumbing repairs and maintenance',
            price: 80,
            duration: 60,
            isActive: true
        },
        {
            id: 2,
            name: 'Emergency Service',
            description: '24/7 emergency plumbing services',
            price: 120,
            duration: 60,
            isActive: true
        }
    ]);

    const [newService, setNewService] = useState({
        name: '',
        description: '',
        price: '',
        duration: '',
        isActive: true
    });

    const handleAddService = (e) => {
        e.preventDefault();
        setServices([
            ...services,
            {
                id: services.length + 1,
                ...newService,
                price: Number(newService.price),
                duration: Number(newService.duration)
            }
        ]);
        setNewService({
            name: '',
            description: '',
            price: '',
            duration: '',
            isActive: true
        });
    };

    const handleToggleService = (id) => {
        setServices(services.map(service =>
            service.id === id
                ? { ...service, isActive: !service.isActive }
                : service
        ));
    };

    const handleDeleteService = (id) => {
        setServices(services.filter(service => service.id !== id));
    };

    return (
        <DashboardLayout setPage={setPage} activeTab="services">
            <h1 className="text-2xl font-semibold text-gray-900">Services & Pricing</h1>

            <div className="mt-6 space-y-6">
                {/* Existing Services */}
                {services.map(service => (
                    <Card key={service.id}>
                        <div className="flex items-start justify-between">
                            <div>
                                <div className="flex items-center">
                                    <h3 className="text-lg font-medium text-gray-900">{service.name}</h3>
                                    <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                        service.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                    }`}>
                                        {service.isActive ? 'Active' : 'Inactive'}
                                    </span>
                                </div>
                                <p className="mt-1 text-sm text-gray-600">{service.description}</p>
                                <div className="mt-2 text-sm text-gray-500">
                                    <span>${service.price}/hour</span>
                                    <span className="mx-2">•</span>
                                    <span>{service.duration} minutes</span>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                <Button
                                    variant="outline"
                                    onClick={() => handleToggleService(service.id)}
                                >
                                    {service.isActive ? 'Deactivate' : 'Activate'}
                                </Button>
                                <Button
                                    variant="danger"
                                    onClick={() => handleDeleteService(service.id)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}

                {/* Add New Service Form */}
                <Card>
                    <h2 className="text-lg font-medium text-gray-900">Add New Service</h2>
                    <form onSubmit={handleAddService} className="mt-4 space-y-4">
                        <Input
                            label="Service Name"
                            value={newService.name}
                            onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                            required
                        />
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <textarea
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                rows={3}
                                value={newService.description}
                                onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <Input
                                label="Price per Hour ($)"
                                type="number"
                                min="0"
                                step="0.01"
                                value={newService.price}
                                onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                                required
                            />
                            <Input
                                label="Duration (minutes)"
                                type="number"
                                min="15"
                                step="15"
                                value={newService.duration}
                                onChange={(e) => setNewService({ ...newService, duration: e.target.value })}
                                required
                            />
                        </div>
                        <div className="flex justify-end">
                            <Button type="submit">
                                Add Service
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </DashboardLayout>
    );
}
