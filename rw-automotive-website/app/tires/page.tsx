'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, DollarSign, Shield, Wrench, CheckCircle } from 'lucide-react';

export default function TiresPage() {
  const [vehicleInfo, setVehicleInfo] = useState({
    year: '',
    make: '',
    model: '',
  });

  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const tireBrands = ['Falken', 'Prinx', 'Michelin', 'Goodyear', 'Bridgestone', 'Continental'];

  // Sample tire data
  const sampleTires = [
    {
      id: 1,
      brand: 'Falken',
      model: 'Ziex ZE950',
      size: '225/65R17',
      type: 'Used',
      treadDepth: '7/32"',
      price: 45,
      quantity: 4,
    },
    {
      id: 2,
      brand: 'Prinx',
      model: 'HiCity HH2',
      size: '225/65R17',
      type: 'Used',
      treadDepth: '8/32"',
      price: 50,
      quantity: 4,
    },
    {
      id: 3,
      brand: 'Michelin',
      model: 'Defender',
      size: '225/65R17',
      type: 'New',
      treadDepth: 'New',
      price: 135,
      quantity: 4,
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate tire search
    setSearchResults(sampleTires);
    setHasSearched(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setVehicleInfo({
      ...vehicleInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Quality New & Used Tires in Douglasville
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Find the perfect tires for your vehicle at unbeatable prices. Expert
              installation included with every tire purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Tire Finder Tool */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg p-8 shadow-xl mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Search className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Tire Finder Tool</h2>
              </div>
              <p className="text-lg mb-6 text-red-100">
                Enter your vehicle information to find available tires
              </p>

              <form onSubmit={handleSearch} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium mb-2">
                      Year
                    </label>
                    <input
                      type="text"
                      id="year"
                      name="year"
                      value={vehicleInfo.year}
                      onChange={handleChange}
                      placeholder="2020"
                      required
                      className="w-full px-4 py-3 rounded-md text-gray-900 focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="make" className="block text-sm font-medium mb-2">
                      Make
                    </label>
                    <input
                      type="text"
                      id="make"
                      name="make"
                      value={vehicleInfo.make}
                      onChange={handleChange}
                      placeholder="Honda"
                      required
                      className="w-full px-4 py-3 rounded-md text-gray-900 focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="model" className="block text-sm font-medium mb-2">
                      Model
                    </label>
                    <input
                      type="text"
                      id="model"
                      name="model"
                      value={vehicleInfo.model}
                      onChange={handleChange}
                      placeholder="Accord"
                      required
                      className="w-full px-4 py-3 rounded-md text-gray-900 focus:ring-2 focus:ring-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-red-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold text-lg"
                >
                  <Search className="w-5 h-5 inline mr-2" />
                  Search Tires
                </button>
              </form>
            </div>

            {/* Search Results */}
            {hasSearched && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Available Tires for {vehicleInfo.year} {vehicleInfo.make} {vehicleInfo.model}
                </h3>
                {searchResults.length > 0 ? (
                  <div className="space-y-4">
                    {searchResults.map((tire) => (
                      <div
                        key={tire.id}
                        className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 transition-colors"
                      >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="text-xl font-bold text-gray-900">
                                {tire.brand} {tire.model}
                              </h4>
                              <span
                                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                  tire.type === 'New'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-blue-100 text-blue-800'
                                }`}
                              >
                                {tire.type}
                              </span>
                            </div>
                            <div className="text-gray-600 space-y-1">
                              <p>
                                <strong>Size:</strong> {tire.size}
                              </p>
                              <p>
                                <strong>Tread Depth:</strong> {tire.treadDepth}
                              </p>
                              <p>
                                <strong>Available:</strong> {tire.quantity} tires in stock
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="mb-3">
                              <div className="text-sm text-gray-600">Starting at</div>
                              <div className="text-3xl font-bold text-red-600">
                                ${tire.price}
                              </div>
                              <div className="text-sm text-gray-600">per tire</div>
                            </div>
                            <Link
                              href="/appointment"
                              className="inline-block bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors font-semibold"
                            >
                              Schedule Installation
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <p className="text-xl text-gray-600">
                      No tires found for this vehicle. Please call us at{' '}
                      <a href="tel:4044290256" className="text-red-600 font-semibold">
                        (404) 429-0256
                      </a>{' '}
                      for availability.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tire Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Complete Tire Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Wrench className="w-12 h-12 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Installation</h3>
              <p className="text-gray-600 text-sm">
                Expert tire mounting and balancing
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Rotation</h3>
              <p className="text-gray-600 text-sm">
                Regular rotation to extend tire life
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Shield className="w-12 h-12 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Repair</h3>
              <p className="text-gray-600 text-sm">Professional tire patching and repair</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="flex justify-center mb-4">
                <DollarSign className="w-12 h-12 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Great Prices</h3>
              <p className="text-gray-600 text-sm">
                Competitive pricing on all tires
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Brand */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Shop Tires by Brand
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            We carry quality tires from trusted brands
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {tireBrands.map((brand) => (
              <div
                key={brand}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-red-50 hover:shadow-md transition-all cursor-pointer border-2 border-transparent hover:border-red-600"
              >
                <p className="font-bold text-gray-900">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buy Tires From Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Buy Tires From RW Automotive?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Unbeatable Prices
              </h3>
              <p className="text-gray-600">
                Quality used tires starting at just $45. New tires at competitive prices.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600">
                Every tire is inspected for safety and quality before installation.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Wrench className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Expert Installation
              </h3>
              <p className="text-gray-600">
                Professional mounting, balancing, and alignment services available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Tires Today?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Call us or stop by our shop in Douglasville. We&apos;ll get you back on the
            road safely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:4044290256"
              className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Call (404) 429-0256
            </a>
            <Link
              href="/appointment"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-colors font-semibold"
            >
              Schedule Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
