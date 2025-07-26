import React, { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Icon } from '../../components/common/Icon';
import { ICONS } from '../../assets/icons';

export default function PaymentSettingsPage({ setPage }) {
    const [paymentMethods, setPaymentMethods] = useState([
        {
            id: 1,
            type: 'credit',
            last4: '4242',
            brand: 'Visa',
            expMonth: 12,
            expYear: 2025,
            isDefault: true
        }
    ]);

    const [showAddForm, setShowAddForm] = useState(false);
    const [newCard, setNewCard] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        isDefault: false
    });

    const handleAddCard = (e) => {
        e.preventDefault();
        // In a real application, you would handle the card addition through a payment processor
        console.log('Add card:', newCard);
        setShowAddForm(false);
        setNewCard({
            number: '',
            expiry: '',
            cvc: '',
            name: '',
            isDefault: false
        });
    };

    const handleDeleteCard = (id) => {
        setPaymentMethods(paymentMethods.filter(method => method.id !== id));
    };

    const handleSetDefault = (id) => {
        setPaymentMethods(paymentMethods.map(method => ({
            ...method,
            isDefault: method.id === id
        })));
    };

    return (
        <DashboardLayout setPage={setPage}>
            <h1 className="text-2xl font-semibold text-gray-900">Payment Settings</h1>

            <div className="mt-6 space-y-6">
                {/* Existing Payment Methods */}
                {paymentMethods.map(method => (
                    <Card key={method.id}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    {method.brand === 'Visa' ? (
                                        <Icon path={ICONS.visa} className="h-8 w-8" />
                                    ) : (
                                        <Icon path={ICONS.creditCard} className="h-8 w-8" />
                                    )}
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-900">
                                        {method.brand} ending in {method.last4}
                                        {method.isDefault && (
                                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                Default
                                            </span>
                                        )}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Expires {method.expMonth}/{method.expYear}
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                {!method.isDefault && (
                                    <Button
                                        variant="outline"
                                        onClick={() => handleSetDefault(method.id)}
                                    >
                                        Set as Default
                                    </Button>
                                )}
                                <Button
                                    variant="danger"
                                    onClick={() => handleDeleteCard(method.id)}
                                >
                                    Remove
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}

                {/* Add New Card Button/Form */}
                <Card>
                    {!showAddForm ? (
                        <Button onClick={() => setShowAddForm(true)}>
                            Add New Payment Method
                        </Button>
                    ) : (
                        <form onSubmit={handleAddCard} className="space-y-4">
                            <Input
                                label="Card Number"
                                value={newCard.number}
                                onChange={(e) => setNewCard({ ...newCard, number: e.target.value })}
                                placeholder="1234 1234 1234 1234"
                                required
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    label="Expiry Date"
                                    value={newCard.expiry}
                                    onChange={(e) => setNewCard({ ...newCard, expiry: e.target.value })}
                                    placeholder="MM/YY"
                                    required
                                />
                                <Input
                                    label="CVC"
                                    value={newCard.cvc}
                                    onChange={(e) => setNewCard({ ...newCard, cvc: e.target.value })}
                                    placeholder="123"
                                    required
                                />
                            </div>
                            <Input
                                label="Name on Card"
                                value={newCard.name}
                                onChange={(e) => setNewCard({ ...newCard, name: e.target.value })}
                                required
                            />
                            <div className="flex items-center">
                                <input
                                    id="defaultCard"
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    checked={newCard.isDefault}
                                    onChange={(e) => setNewCard({ ...newCard, isDefault: e.target.checked })}
                                />
                                <label htmlFor="defaultCard" className="ml-2 block text-sm text-gray-900">
                                    Set as default payment method
                                </label>
                            </div>
                            <div className="flex justify-end space-x-3">
                                <Button
                                    variant="outline"
                                    onClick={() => setShowAddForm(false)}
                                >
                                    Cancel
                                </Button>
                                <Button type="submit">
                                    Add Card
                                </Button>
                            </div>
                        </form>
                    )}
                </Card>
            </div>
        </DashboardLayout>
    );
}
