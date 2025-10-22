import { Metadata } from 'next';
import Link from 'next/link';
import { Truck, Users, Clock, DollarSign, Wrench, ClipboardCheck, TrendingDown, Shield, Phone, CheckCircle, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: "Fleet Maintenance Services Douglasville GA | RW Automotive",
  description: "Professional fleet maintenance and repair services in Douglasville, GA. Keep your business vehicles running with scheduled maintenance, priority service, and volume discounts.",
};

export default function FleetServicesPage() {
  const fleetServices = [
    {
      icon: Wrench,
      title: 'Preventive Maintenance',
      description: 'Scheduled maintenance programs to keep your fleet on the road and minimize downtime.',
      items: [
        'Oil changes & fluid services',
        'Brake inspections & service',
        'Tire rotation & replacement',
        'Multi-point inspections',
        'Filter replacements',
        'Belt & hose inspections',
      ],
    },
    {
      icon: Truck,
      title: 'Commercial Vehicle Repair',
      description: 'Expert repairs for all types of commercial vehicles and equipment.',
      items: [
        'Engine diagnostics & repair',
        'Transmission service',
        'Brake system repair',
        'Suspension & steering',
        'Electrical system repair',
        'A/C & heating service',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'DOT Inspections',
      description: 'Certified DOT inspections to keep your fleet compliant and safe.',
      items: [
        'Annual DOT inspections',
        'Pre-trip inspections',
        'Safety compliance checks',
        'Documentation & reporting',
        'Violation corrections',
        'Re-inspection services',
      ],
    },
    {
      icon: Clock,
      title: 'Priority Service',
      description: 'Get your vehicles back on the road faster with dedicated fleet service.',
      items: [
        'Priority scheduling',
        'After-hours drop-off',
        'Express service options',
        'Mobile service available',
        'Dedicated service advisor',
        'Flexible appointment times',
      ],
    },
    {
      icon: DollarSign,
      title: 'Fleet Discounts',
      description: 'Volume pricing and special rates for fleet customers.',
      items: [
        'Discounted labor rates',
        'Parts volume pricing',
        'Tire program discounts',
        'Monthly billing options',
        'No-interest payment plans',
        'Loyalty rewards program',
      ],
    },
    {
      icon: TrendingDown,
      title: 'Cost Management',
      description: 'Tools and services to help manage and reduce fleet operating costs.',
      items: [
        'Maintenance tracking',
        'Detailed service records',
        'Cost analysis reports',
        'Fuel efficiency monitoring',
        'Preventive scheduling',
        'Budget planning assistance',
      ],
    },
  ];

  const fleetTypes = [
    'Delivery Vans',
    'Box Trucks',
    'Pickup Trucks',
    'Service Vehicles',
    'Cargo Vans',
    'Passenger Vans',
    'SUVs & Sedans',
    'Light-Duty Trucks',
    'Landscaping Equipment',
    'Construction Vehicles',
    'Utility Vehicles',
    'Municipal Vehicles',
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Minimize Downtime',
      description: 'Keep your vehicles on the road with preventive maintenance and fast repair turnaround.',
    },
    {
      icon: DollarSign,
      title: 'Reduce Costs',
      description: 'Save money with fleet pricing, preventive maintenance, and improved fuel efficiency.',
    },
    {
      icon: Shield,
      title: 'Improve Safety',
      description: 'Regular inspections and maintenance ensure your fleet meets safety standards.',
    },
    {
      icon: ClipboardCheck,
      title: 'Stay Compliant',
      description: 'DOT inspections and detailed records keep you compliant with regulations.',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Work with a dedicated service advisor who knows your fleet and business needs.',
    },
    {
      icon: TrendingDown,
      title: 'Track Performance',
      description: 'Detailed maintenance records and cost analysis help optimize fleet performance.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fleet Maintenance & Repair Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Keep your business moving with reliable fleet maintenance from RW Automotive.
              We provide comprehensive service for all types of commercial vehicles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold text-center"
              >
                Request Fleet Quote
              </Link>
              <a
                href="tel:4044290256"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold"
              >
                <Phone className="w-5 h-5" />
                Call (404) 429-0256
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Why Choose RW Automotive for Fleet Service?
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Partner with us to reduce costs, minimize downtime, and keep your fleet running smoothly
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Comprehensive Fleet Services
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Everything you need to keep your commercial vehicles operating at peak performance
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {fleetServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Vehicles We Service
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            We work on all types of commercial and fleet vehicles
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {fleetTypes.map((type, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-red-50 hover:shadow-md transition-all border-2 border-transparent hover:border-red-600"
              >
                <Truck className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900 text-sm">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Program Features */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Fleet Program Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <Calendar className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Scheduled Maintenance</h3>
                <p className="text-red-100">
                  Custom maintenance schedules tailored to your fleet&apos;s specific needs and usage patterns.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <ClipboardCheck className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Detailed Reporting</h3>
                <p className="text-red-100">
                  Comprehensive service records, cost tracking, and fleet performance analytics.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Dedicated Account Manager</h3>
                <p className="text-red-100">
                  A single point of contact who understands your business and fleet requirements.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <DollarSign className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Flexible Billing</h3>
                <p className="text-red-100">
                  Monthly invoicing, fleet accounts, and customized payment terms to fit your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Getting Started is Easy
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h3>
                  <p className="text-gray-600">
                    Call us or fill out our fleet inquiry form. We&apos;ll discuss your fleet size, types of vehicles,
                    and service needs.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Quote</h3>
                  <p className="text-gray-600">
                    We&apos;ll create a customized fleet maintenance program with volume pricing and flexible
                    scheduling options.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Set Up Account</h3>
                  <p className="text-gray-600">
                    We&apos;ll establish your fleet account, assign a dedicated service advisor, and schedule your
                    first service.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Start Saving</h3>
                  <p className="text-gray-600">
                    Begin enjoying reduced maintenance costs, less downtime, and peace of mind knowing your
                    fleet is in expert hands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What Fleet Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;RW Automotive has been servicing our delivery fleet for over two years. Their preventive
                maintenance program has significantly reduced our downtime and repair costs. Highly recommended!&quot;
              </p>
              <p className="font-semibold text-gray-900">- Local Delivery Company</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;The team at RW Automotive understands the importance of keeping our service trucks on the road.
                Their priority service and fair pricing have made them our go-to for all fleet maintenance.&quot;
              </p>
              <p className="font-semibold text-gray-900">- HVAC Service Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your Fleet?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Contact us today to learn more about our fleet services and get a custom quote for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              Request Fleet Quote
            </Link>
            <a
              href="tel:4044290256"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold"
            >
              <Phone className="w-5 h-5" />
              Call (404) 429-0256
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Serving Douglasville and surrounding areas | Available for on-site consultations
          </p>
        </div>
      </section>
    </div>
  );
}
