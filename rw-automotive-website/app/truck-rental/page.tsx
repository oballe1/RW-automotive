'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Truck, Calendar, DollarSign, Shield, CheckCircle, Phone, MapPin, Clock } from 'lucide-react';

export default function TruckRentalPage() {
  const [rentalData, setRentalData] = useState({
    pickupDate: '',
    returnDate: '',
    truckSize: '',
  });

  const [showQuote, setShowQuote] = useState(false);

  const trucks = [
    {
      id: 1,
      name: '10\' Cargo Van',
      capacity: '2-3 Rooms',
      payload: '3,000 lbs',
      price: 19.95,
      features: ['Easy to Drive', 'Fuel Efficient', 'Great for Small Moves'],
      image: 'cargo-van',
    },
    {
      id: 2,
      name: '15\' Moving Truck',
      capacity: '1-2 Bedroom',
      payload: '6,000 lbs',
      price: 29.95,
      features: ['Loading Ramp', 'Mom\'s Attic Storage', 'Towing Capable'],
      image: 'small-truck',
    },
    {
      id: 3,
      name: '20\' Moving Truck',
      capacity: '2-3 Bedroom',
      payload: '8,000 lbs',
      price: 39.95,
      features: ['Loading Ramp', 'Lift Gate Available', 'Extra Storage'],
      image: 'medium-truck',
    },
    {
      id: 4,
      name: '26\' Moving Truck',
      capacity: '4+ Bedroom',
      payload: '10,000 lbs',
      price: 49.95,
      features: ['Lift Gate', 'Extra Wide Ramp', 'Maximum Capacity'],
      image: 'large-truck',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setRentalData({
      ...rentalData,
      [e.target.name]: e.target.value,
    });
  };

  const handleQuoteRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setShowQuote(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Truck Rental in Douglasville, GA
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Affordable, reliable truck rentals for moving, hauling, and deliveries.
              Reserve your truck today and get moving!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:4044290256"
                className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                <Phone className="w-5 h-5" />
                Call to Reserve
              </a>
              <a
                href="#quote"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold text-center"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-red-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <DollarSign className="w-6 h-6" />
              <div className="text-left">
                <div className="font-semibold">Starting at $19.95/day</div>
                <div className="text-sm text-red-100">Plus mileage</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-6 h-6" />
              <div className="text-left">
                <div className="font-semibold">Flexible Rental Periods</div>
                <div className="text-sm text-red-100">Daily, weekly rates available</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6" />
              <div className="text-left">
                <div className="font-semibold">Convenient Location</div>
                <div className="text-sm text-red-100">3795 Kings Hwy, Douglasville</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Trucks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Choose Your Truck
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Select the perfect size truck for your moving or hauling needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {trucks.map((truck) => (
              <div
                key={truck.id}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 hover:shadow-lg transition-all"
              >
                {/* Truck Icon/Image */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg h-32 flex items-center justify-center mb-4">
                  <Truck className="w-16 h-16 text-red-600" />
                </div>

                {/* Truck Info */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {truck.name}
                </h3>
                <p className="text-gray-600 mb-1">
                  <strong>Capacity:</strong> {truck.capacity}
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Payload:</strong> {truck.payload}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {truck.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="border-t pt-4">
                  <div className="text-center mb-4">
                    <div className="text-sm text-gray-600">Starting at</div>
                    <div className="text-3xl font-bold text-red-600">
                      ${truck.price}
                    </div>
                    <div className="text-sm text-gray-600">per day*</div>
                  </div>
                  <a
                    href="tel:4044290256"
                    className="block w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors font-semibold text-center"
                  >
                    Reserve Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-600 text-center mt-8">
            *Plus mileage charges. Additional fees may apply. Call for exact pricing.
          </p>
        </div>
      </section>

      {/* Quote Request Form */}
      <section id="quote" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get a Rental Quote
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we&apos;ll provide you with a detailed quote.
              </p>

              {showQuote ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-green-900 mb-2">
                        Quote Request Received!
                      </h3>
                      <p className="text-green-800 mb-4">
                        Thank you for your interest. We&apos;ll call you shortly at the number you provided
                        to confirm availability and provide an exact quote.
                      </p>
                      <p className="text-green-800 font-semibold">
                        Need immediate assistance? Call us at (404) 429-0256
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleQuoteRequest} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Pickup Date *
                      </label>
                      <input
                        type="date"
                        id="pickupDate"
                        name="pickupDate"
                        value={rentalData.pickupDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Return Date *
                      </label>
                      <input
                        type="date"
                        id="returnDate"
                        name="returnDate"
                        value={rentalData.returnDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="truckSize" className="block text-sm font-medium text-gray-700 mb-2">
                      Truck Size *
                    </label>
                    <select
                      id="truckSize"
                      name="truckSize"
                      value={rentalData.truckSize}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    >
                      <option value="">Select a truck size...</option>
                      {trucks.map((truck) => (
                        <option key={truck.id} value={truck.name}>
                          {truck.name} - {truck.capacity}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                  >
                    Request Quote
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    Or call us directly at{' '}
                    <a href="tel:4044290256" className="text-red-600 font-semibold hover:underline">
                      (404) 429-0256
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Rental Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Rental Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What You&apos;ll Need</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Valid driver&apos;s license</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Proof of insurance (or purchase our coverage)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Credit or debit card for deposit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Minimum age: 21 years old</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Included in Rental</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">24-hour roadside assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Moving blankets available</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited local mileage options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Clean, well-maintained trucks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Additional Services & Supplies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Moving Supplies</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Moving blankets</li>
                <li>• Dollies and hand trucks</li>
                <li>• Tie-down straps</li>
                <li>• Boxes available</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Insurance Options</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Damage waiver protection</li>
                <li>• Supplemental liability</li>
                <li>• Cargo coverage</li>
                <li>• Personal accident insurance</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Flexible Options</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• One-way rentals available</li>
                <li>• Weekend specials</li>
                <li>• Weekly rates</li>
                <li>• Extended rental discounts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How much does mileage cost?
              </h3>
              <p className="text-gray-700">
                Mileage rates vary by truck size and rental duration. We offer unlimited local mileage
                packages. Contact us for specific pricing.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do I need to return the truck with a full tank?
              </h3>
              <p className="text-gray-700">
                Yes, please return the truck with the same fuel level as when you picked it up.
                Otherwise, refueling charges will apply.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I rent a truck for just a few hours?
              </h3>
              <p className="text-gray-700">
                Our minimum rental period is one day. However, we offer competitive daily rates that
                make short-term rentals affordable.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What if I need to extend my rental?
              </h3>
              <p className="text-gray-700">
                Call us before your return time to extend your rental. Additional charges will apply
                based on our daily rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Reserve Your Truck?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Call us today or stop by our location in Douglasville. We&apos;ll have you on the road in no time!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:4044290256"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              <Phone className="w-5 h-5" />
              Call (404) 429-0256
            </a>
            <Link
              href="/contact"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-colors font-semibold"
            >
              Get Directions
            </Link>
          </div>
          <p className="text-sm text-red-100 mt-6">
            3795 Kings Hwy, Douglasville, GA 30135 | Mon-Sat: 8:30 AM - 6:00 PM
          </p>
        </div>
      </section>
    </div>
  );
}
