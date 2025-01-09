import React, { useState } from 'react';
import { ArrowLeft, MapPin, CreditCard, Wallet } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

interface CheckoutProps {
  onBack: () => void;
  cartItems: Array<{
    itemId: string;
    quantity: number;
    name: string;
    price: number;
  }>;
  total: number;
}

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export default function Checkout({ onBack, cartItems, total }: CheckoutProps) {
  const [step, setStep] = useState<'location' | 'payment'>('location');
  const [deliveryAddress, setDeliveryAddress] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    instructions: ''
  });
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'wallet' | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLocationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate address
    if (!deliveryAddress.street || !deliveryAddress.city || !deliveryAddress.state || !deliveryAddress.zipCode) {
      setError('Please fill in all required address fields');
      return;
    }
    setStep('payment');
  };

  const handlePayment = async () => {
    if (!paymentMethod) {
      setError('Please select a payment method');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // In a real application, you would:
      // 1. Create a payment intent on your server
      // 2. Use Stripe Elements for secure card collection
      // 3. Process the payment
      // 4. Handle the response

      // Simulated payment process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message and redirect
      alert('Order placed successfully! You will receive a confirmation email shortly.');
      window.location.href = '/dashboard'; // Redirect to dashboard or order confirmation
    } catch (err) {
      setError('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-sage-50 p-8">
      <button
        onClick={onBack}
        className="fixed top-8 left-8 text-sage-600 hover:text-sage-700 flex items-center gap-2"
      >
        <ArrowLeft className="h-5 w-5" />
        Back
      </button>

      <div className="max-w-2xl mx-auto pt-20">
        <h1 className="text-3xl font-bold text-sage-900 mb-8 text-center">Checkout</h1>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === 'location' ? 'bg-sage-600 text-white' : 'bg-sage-100 text-sage-600'
            }`}>
              1
            </div>
            <div className="w-16 h-1 bg-sage-100">
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === 'payment' ? 'bg-sage-600 text-white' : 'bg-sage-100 text-sage-600'
            }`}>
              2
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {step === 'location' ? (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-semibold text-sage-900 mb-6 flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Delivery Address
            </h2>

            <form onSubmit={handleLocationSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-sage-700 mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  value={deliveryAddress.street}
                  onChange={(e) => setDeliveryAddress({ ...deliveryAddress, street: e.target.value })}
                  className="w-full p-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    value={deliveryAddress.city}
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, city: e.target.value })}
                    className="w-full p-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-2">
                    State *
                  </label>
                  <input
                    type="text"
                    value={deliveryAddress.state}
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, state: e.target.value })}
                    className="w-full p-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-sage-700 mb-2">
                  ZIP Code *
                </label>
                <input
                  type="text"
                  value={deliveryAddress.zipCode}
                  onChange={(e) => setDeliveryAddress({ ...deliveryAddress, zipCode: e.target.value })}
                  className="w-full p-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sage-700 mb-2">
                  Delivery Instructions (Optional)
                </label>
                <textarea
                  value={deliveryAddress.instructions}
                  onChange={(e) => setDeliveryAddress({ ...deliveryAddress, instructions: e.target.value })}
                  className="w-full p-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                  rows={3}
                  placeholder="Any specific instructions for delivery..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700"
              >
                Continue to Payment
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-semibold text-sage-900 mb-6 flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Payment Method
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 border rounded-lg flex flex-col items-center gap-2 ${
                    paymentMethod === 'card'
                      ? 'border-sage-600 bg-sage-50'
                      : 'border-sage-200 hover:bg-sage-50'
                  }`}
                >
                  <CreditCard className="h-6 w-6 text-sage-600" />
                  <span className="text-sage-900 font-medium">Credit Card</span>
                </button>
                <button
                  onClick={() => setPaymentMethod('wallet')}
                  className={`p-4 border rounded-lg flex flex-col items-center gap-2 ${
                    paymentMethod === 'wallet'
                      ? 'border-sage-600 bg-sage-50'
                      : 'border-sage-200 hover:bg-sage-50'
                  }`}
                >
                  <Wallet className="h-6 w-6 text-sage-600" />
                  <span className="text-sage-900 font-medium">Digital Wallet</span>
                </button>
              </div>

              <div className="border-t border-sage-100 pt-6">
                <h3 className="text-lg font-semibold text-sage-900 mb-4">Order Summary</h3>
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.itemId} className="flex justify-between text-sage-600">
                      <span>{item.quantity}x {item.name}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t border-sage-100 pt-3">
                    <div className="flex justify-between text-lg font-semibold text-sage-900">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePayment}
                disabled={loading || !paymentMethod}
                className="w-full py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : 'Place Order'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}