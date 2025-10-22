'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Car, DollarSign, Gauge, Calendar, Fuel, Phone, Filter } from 'lucide-react';

export default function UsedCarsPage() {
  const [selectedType, setSelectedType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  // Sample used car inventory
  const cars = [
    {
      id: 1,
      year: 2015,
      make: 'Honda',
      model: 'Civic',
      trim: 'LX',
      price: 9500,
      mileage: 98000,
      type: 'Sedan',
      fuel: 'Gasoline',
      transmission: 'Automatic',
      color: 'Silver',
      image: '/placeholder-car.jpg',
      features: ['Bluetooth', 'Backup Camera', 'Power Windows', 'A/C'],
      description: 'Clean title, well-maintained, single owner vehicle.',
    },
    {
      id: 2,
      year: 2016,
      make: 'Toyota',
      model: 'Camry',
      trim: 'SE',
      price: 12800,
      mileage: 85000,
      type: 'Sedan',
      fuel: 'Gasoline',
      transmission: 'Automatic',
      color: 'Blue',
      image: '/placeholder-car.jpg',
      features: ['Navigation', 'Sunroof', 'Heated Seats', 'Bluetooth'],
      description: 'Excellent condition, regular maintenance, clean CarFax.',
    },
    {
      id: 3,
      year: 2017,
      make: 'Ford',
      model: 'F-150',
      trim: 'XLT',
      price: 24500,
      mileage: 72000,
      type: 'Truck',
      fuel: 'Gasoline',
      transmission: 'Automatic',
      color: 'Black',
      image: '/placeholder-car.jpg',
      features: ['4WD', 'Tow Package', 'Crew Cab', 'Bed Liner'],
      description: 'Work-ready truck, well-maintained, clean interior.',
    },
    {
      id: 4,
      year: 2014,
      make: 'Nissan',
      model: 'Altima',
      trim: 'S',
      price: 7900,
      mileage: 115000,
      type: 'Sedan',
      fuel: 'Gasoline',
      transmission: 'Automatic',
      color: 'White',
      image: '/placeholder-car.jpg',
      features: ['Cruise Control', 'Power Locks', 'A/C', 'CD Player'],
      description: 'Great commuter car, fuel efficient, runs excellent.',
    },
    {
      id: 5,
      year: 2018,
      make: 'Chevrolet',
      model: 'Equinox',
      trim: 'LT',
      price: 16500,
      mileage: 68000,
      type: 'SUV',
      fuel: 'Gasoline',
      transmission: 'Automatic',
      color: 'Red',
      image: '/placeholder-car.jpg',
      features: ['Apple CarPlay', 'Backup Camera', 'Blind Spot Monitor', 'Remote Start'],
      description: 'Family-friendly SUV, excellent safety features.',
    },
    {
      id: 6,
      year: 2016,
      make: 'Mazda',
      model: 'CX-5',
      trim: 'Touring',
      price: 13900,
      mileage: 78000,
      type: 'SUV',
      fuel: 'Gasoline',
      transmission: 'Automatic',
      color: 'Gray',
      image: '/placeholder-car.jpg',
      features: ['Leather Seats', 'Sunroof', 'Navigation', 'Heated Seats'],
      description: 'Sporty SUV with great handling, well cared for.',
    },
  ];

  const carTypes = ['all', 'Sedan', 'SUV', 'Truck'];
  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under $10,000', value: '0-10000' },
    { label: '$10,000 - $15,000', value: '10000-15000' },
    { label: '$15,000 - $20,000', value: '15000-20000' },
    { label: 'Over $20,000', value: '20000+' },
  ];

  const filteredCars = cars.filter((car) => {
    const typeMatch = selectedType === 'all' || car.type === selectedType;

    let priceMatch = true;
    if (priceRange !== 'all') {
      if (priceRange === '0-10000') {
        priceMatch = car.price < 10000;
      } else if (priceRange === '10000-15000') {
        priceMatch = car.price >= 10000 && car.price <= 15000;
      } else if (priceRange === '15000-20000') {
        priceMatch = car.price >= 15000 && car.price <= 20000;
      } else if (priceRange === '20000+') {
        priceMatch = car.price > 20000;
      }
    }

    return typeMatch && priceMatch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Quality Used Cars in Douglasville
            </h1>
            <p className="text-xl text-gray-300">
              Find your next reliable vehicle at RW Automotive. All cars inspected and ready to drive.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-red-600" />
            <h2 className="text-xl font-semibold text-gray-900">Filter Inventory</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            {/* Type Filter */}
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle Type
              </label>
              <select
                id="type"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
              >
                {carTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <select
                id="price"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Showing {filteredCars.length} {filteredCars.length === 1 ? 'vehicle' : 'vehicles'}
          </p>
        </div>
      </section>

      {/* Inventory Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <div
                  key={car.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Car Image Placeholder */}
                  <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-48 flex items-center justify-center">
                    <Car className="w-20 h-20 text-gray-400" />
                  </div>

                  {/* Car Details */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {car.year} {car.make} {car.model}
                        </h3>
                        <p className="text-gray-600">{car.trim}</p>
                      </div>
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {car.type}
                      </span>
                    </div>

                    <div className="text-3xl font-bold text-red-600 mb-4">
                      ${car.price.toLocaleString()}
                    </div>

                    {/* Key Specs */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Gauge className="w-4 h-4 text-red-600" />
                        <span>{car.mileage.toLocaleString()} mi</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Calendar className="w-4 h-4 text-red-600" />
                        <span>{car.year}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Fuel className="w-4 h-4 text-red-600" />
                        <span>{car.fuel}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Car className="w-4 h-4 text-red-600" />
                        <span>{car.transmission}</span>
                      </div>
                    </div>

                    {/* Color */}
                    <div className="mb-4">
                      <span className="text-sm text-gray-600">Color: </span>
                      <span className="text-sm font-semibold text-gray-900">{car.color}</span>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {car.features.slice(0, 3).map((feature, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                        {car.features.length > 3 && (
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            +{car.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {car.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex gap-2">
                      <a
                        href="tel:4044290256"
                        className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors font-semibold text-center text-sm"
                      >
                        Call Now
                      </a>
                      <Link
                        href="/contact"
                        className="flex-1 bg-gray-100 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors font-semibold text-center text-sm"
                      >
                        Inquire
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg">
              <Car className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600 mb-2">No vehicles found</p>
              <p className="text-gray-500">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Buy From RW Automotive?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Car className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quality Inspected
              </h3>
              <p className="text-gray-600">
                Every vehicle is thoroughly inspected by our expert technicians before sale.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Fair Pricing
              </h3>
              <p className="text-gray-600">
                Honest, competitive pricing with no hidden fees or surprises.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Local Support
              </h3>
              <p className="text-gray-600">
                We&apos;re here to help after your purchase with service and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Next Car?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit our lot in Douglasville or give us a call. We&apos;ll help you find the perfect vehicle for your needs and budget.
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Financing Info */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Financing & Trade-Ins
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Financing Available:</strong> We work with local lenders to help you get financing for your vehicle purchase.
              </p>
              <p>
                <strong>Trade-Ins Welcome:</strong> Have a vehicle to trade? We&apos;ll give you a fair trade-in value toward your next car.
              </p>
              <p>
                <strong>Cash Purchases:</strong> We offer discounts for cash buyers. Contact us for our best cash price.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Inventory changes frequently. Call ahead to confirm availability and schedule a test drive.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
