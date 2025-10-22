'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { Star, Quote, ThumbsUp, MessageCircle, Award, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function ReviewsPage() {
  const [filter, setFilter] = useState('all');

  const reviews = [
    {
      id: 1,
      name: 'John Martinez',
      rating: 5,
      date: '2 weeks ago',
      service: 'Brake Repair',
      review: 'Excellent service! My brakes were making a terrible noise and they diagnosed and fixed the problem the same day. Fair pricing and honest recommendations. I\'ll definitely be back for future service.',
      verified: true,
    },
    {
      id: 2,
      name: 'Sarah Thompson',
      rating: 5,
      date: '3 weeks ago',
      service: 'Oil Change',
      review: 'Best auto shop in Douglasville! Quick oil change and they performed a complimentary multi-point inspection. Found a potential issue with my battery and replaced it at a great price. Very trustworthy.',
      verified: true,
    },
    {
      id: 3,
      name: 'Michael Davis',
      rating: 5,
      date: '1 month ago',
      service: 'Tire Service',
      review: 'Got 4 used tires installed and balanced. The tires look great and the price was unbeatable. The staff was friendly and professional. Highly recommend for tire needs!',
      verified: true,
    },
    {
      id: 4,
      name: 'Jennifer Williams',
      rating: 5,
      date: '1 month ago',
      service: 'Engine Diagnostics',
      review: 'My check engine light came on and I was worried it would be expensive. They ran a diagnostic and it was just a loose gas cap! They didn\'t even charge me. That\'s honest service!',
      verified: true,
    },
    {
      id: 5,
      name: 'Robert Johnson',
      rating: 5,
      date: '1 month ago',
      service: 'A/C Repair',
      review: 'Fixed my A/C during the hottest week of summer. They got me in quickly and had it working perfectly. Great customer service and fair prices. Will definitely use them again.',
      verified: true,
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      rating: 4,
      date: '2 months ago',
      service: 'General Maintenance',
      review: 'Good service overall. They were busy when I arrived but got my car serviced within a reasonable time. Would have liked a bit more communication about the timeline, but the work was done well.',
      verified: true,
    },
    {
      id: 7,
      name: 'David Brown',
      rating: 5,
      date: '2 months ago',
      service: 'Transmission Service',
      review: 'Had my transmission fluid changed and they explained everything they were doing. Very professional and knowledgeable. The price was fair and the service was excellent.',
      verified: true,
    },
    {
      id: 8,
      name: 'Maria Garcia',
      rating: 5,
      date: '2 months ago',
      service: 'Brake Service',
      review: 'Needed new brake pads and rotors. They showed me the worn parts and explained why the work was necessary. No pressure, just honest advice. Great experience!',
      verified: true,
    },
    {
      id: 9,
      name: 'James Wilson',
      rating: 5,
      date: '3 months ago',
      service: 'Used Car Purchase',
      review: 'Bought a used Honda Civic from them. The car was in great condition and priced fairly. They were transparent about the vehicle history and stood behind their sale. Very happy with my purchase!',
      verified: true,
    },
    {
      id: 10,
      name: 'Patricia Moore',
      rating: 5,
      date: '3 months ago',
      service: 'Oil Change',
      review: 'Fast and friendly service. In and out in 30 minutes. They also topped off all my fluids and checked my tire pressure. Will be coming back for all my maintenance needs.',
      verified: true,
    },
    {
      id: 11,
      name: 'Christopher Taylor',
      rating: 5,
      date: '3 months ago',
      service: 'Fleet Service',
      review: 'We use RW Automotive for all our company vehicle maintenance. They\'re reliable, professional, and their fleet pricing is very competitive. Highly recommend for business vehicles.',
      verified: true,
    },
    {
      id: 12,
      name: 'Amanda White',
      rating: 5,
      date: '4 months ago',
      service: 'Tire Repair',
      review: 'Had a nail in my tire and they patched it quickly and affordably. Could have easily sold me a new tire but they were honest and saved me money. That\'s why I trust them!',
      verified: true,
    },
  ];

  const serviceTypes = ['all', 'Brake Service', 'Oil Change', 'Tire Service', 'Engine Diagnostics', 'A/C Repair'];

  const filteredReviews = filter === 'all'
    ? reviews
    : reviews.filter(review => review.service === filter);

  const averageRating = (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;
  const fiveStarReviews = reviews.filter(r => r.rating === 5).length;
  const fiveStarPercentage = Math.round((fiveStarReviews / totalReviews) * 100);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Customer Reviews & Testimonials
            </h1>
            <p className="text-xl text-gray-300">
              See what our satisfied customers have to say about RW Automotive. We pride ourselves
              on honest service and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Overall Rating Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Average Rating */}
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">{averageRating}</div>
                {renderStars(5)}
                <p className="text-gray-600 mt-2">{totalReviews} Reviews</p>
              </div>

              {/* 5-Star Percentage */}
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Award className="w-12 h-12 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{fiveStarPercentage}%</div>
                <p className="text-gray-600">5-Star Reviews</p>
              </div>

              {/* Verified Reviews */}
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <ThumbsUp className="w-12 h-12 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                <p className="text-gray-600">Verified Customers</p>
              </div>

              {/* Recommendation Rate */}
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <TrendingUp className="w-12 h-12 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
                <p className="text-gray-600">Would Recommend</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="w-5 h-5 text-red-600" />
              <h2 className="text-xl font-semibold text-gray-900">Filter by Service</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {serviceTypes.map((service) => (
                <button
                  key={service}
                  onClick={() => setFilter(service)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === service
                      ? 'bg-red-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {service === 'all' ? 'All Reviews' : service}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Showing {filteredReviews.length} {filteredReviews.length === 1 ? 'review' : 'reviews'}
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {filteredReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center text-red-600 font-bold text-lg">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{review.name}</h3>
                        <p className="text-sm text-gray-600">{review.date}</p>
                      </div>
                    </div>
                    {review.verified && (
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                        Verified
                      </span>
                    )}
                  </div>

                  <div className="mb-3">{renderStars(review.rating)}</div>

                  <div className="mb-3">
                    <span className="inline-block bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {review.service}
                    </span>
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-200" />
                    <p className="text-gray-700 leading-relaxed pl-6">{review.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Write a Review CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Had a Great Experience?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We&apos;d love to hear about your experience at RW Automotive. Your feedback helps us
            continue to provide excellent service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Write a Google Review
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

      {/* Trust Badges */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Why Customers Trust Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Quality Service</h3>
                <p className="text-sm text-gray-600">
                  Expert technicians and quality parts for every repair
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <ThumbsUp className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Honest Pricing</h3>
                <p className="text-sm text-gray-600">
                  Fair, transparent pricing with no hidden fees
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <MessageCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Great Communication</h3>
                <p className="text-sm text-gray-600">
                  Clear explanations and regular updates on your service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the RW Automotive Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Join hundreds of satisfied customers. Schedule your service today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              Schedule Appointment
            </Link>
            <a
              href="tel:4044290256"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold"
            >
              Call (404) 429-0256
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
