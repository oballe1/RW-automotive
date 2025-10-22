'use client';

import { useState } from 'react';
import { Calendar, Clock, User, Car, Phone, Mail, MessageSquare } from 'lucide-react';

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    comments: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const serviceTypes = [
    'Oil Change',
    'Brake Service',
    'Tire Service',
    'Engine Diagnostics',
    'A/C Repair',
    'CV Joint Replacement',
    'Wheel Alignment',
    'General Inspection',
    'Other',
  ];

  const timeSlots = [
    '8:30 AM',
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you! Your appointment request has been received. We will contact you shortly to confirm your appointment.');
      setIsSubmitting(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        vehicleYear: '',
        vehicleMake: '',
        vehicleModel: '',
        serviceType: '',
        preferredDate: '',
        preferredTime: '',
        comments: '',
      });
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Schedule Your Service Appointment
            </h1>
            <p className="text-xl text-gray-300">
              Book your auto repair or maintenance service online 24/7. We&apos;ll confirm
              your appointment within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Appointment Request Form
                  </h2>

                  {submitMessage && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800">{submitMessage}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <User className="w-5 h-5 text-red-600" />
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Vehicle Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Car className="w-5 h-5 text-red-600" />
                        Vehicle Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label htmlFor="vehicleYear" className="block text-sm font-medium text-gray-700 mb-1">
                            Year *
                          </label>
                          <input
                            type="text"
                            id="vehicleYear"
                            name="vehicleYear"
                            value={formData.vehicleYear}
                            onChange={handleChange}
                            required
                            placeholder="2020"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="vehicleMake" className="block text-sm font-medium text-gray-700 mb-1">
                            Make *
                          </label>
                          <input
                            type="text"
                            id="vehicleMake"
                            name="vehicleMake"
                            value={formData.vehicleMake}
                            onChange={handleChange}
                            required
                            placeholder="Honda"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-700 mb-1">
                            Model *
                          </label>
                          <input
                            type="text"
                            id="vehicleModel"
                            name="vehicleModel"
                            value={formData.vehicleModel}
                            onChange={handleChange}
                            required
                            placeholder="Accord"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-red-600" />
                        Service Details
                      </h3>
                      <div className="mb-4">
                        <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                          Service Type *
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        >
                          <option value="">Select a service...</option>
                          {serviceTypes.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                            Preferred Date *
                          </label>
                          <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                            Preferred Time *
                          </label>
                          <select
                            id="preferredTime"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          >
                            <option value="">Select a time...</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                          Additional Comments
                        </label>
                        <textarea
                          id="comments"
                          name="comments"
                          value={formData.comments}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          placeholder="Please describe any issues or special requests..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Request Appointment'}
                    </button>

                    <p className="text-sm text-gray-600 text-center">
                      By submitting this form, you agree to be contacted by RW Automotive
                      to confirm your appointment.
                    </p>
                  </form>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-lg p-6 shadow-md sticky top-24">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What to Expect
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          1
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-700">
                          <strong>Submit Request:</strong> Fill out the form with your
                          details and preferred time.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          2
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-700">
                          <strong>Confirmation Call:</strong> We&apos;ll contact you within
                          one business day to confirm.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          3
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-700">
                          <strong>Service Day:</strong> Bring your vehicle at the
                          scheduled time for expert service.
                        </p>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Need Immediate Service?
                    </h4>
                    <a
                      href="tel:4044290256"
                      className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold mb-4"
                    >
                      <Phone className="w-5 h-5" />
                      Call (404) 429-0256
                    </a>
                    <p className="text-sm text-gray-600">
                      Monday - Saturday: 8:30 AM - 6:00 PM
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      After-Hours Drop-Off
                    </h4>
                    <p className="text-sm text-gray-600">
                      Can&apos;t make it during business hours? Ask about our convenient
                      after-hours drop-off service!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
