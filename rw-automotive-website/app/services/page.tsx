import { Metadata } from 'next';
import Link from 'next/link';
import { Wrench, Car, CircleDollarSign, Gauge, Wind, Zap, Settings, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Auto Repair Services Douglasville GA | RW Automotive',
  description: 'Complete auto repair services in Douglasville: tire service, oil changes, brake repair, engine diagnostics, A/C repair & more. Expert technicians, fair pricing.',
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      icon: <Car className="w-16 h-16 text-red-600" />,
      title: 'Tire Services',
      description: 'New & used tire sales, installation, rotation, balancing, and wheel alignment services.',
      services: [
        'New Tire Sales & Installation',
        'Quality Used Tires',
        'Tire Repair & Patching',
        'Wheel Alignment',
        'Tire Rotation & Balancing',
      ],
      link: '/services/tire-services',
    },
    {
      icon: <Settings className="w-16 h-16 text-red-600" />,
      title: 'Maintenance Services',
      description: 'Preventive maintenance to keep your vehicle running smoothly and avoid costly repairs.',
      services: [
        'Oil Changes (Conventional & Synthetic)',
        'Brake Inspection & Service',
        'Fluid Services & Replacement',
        'Battery Testing & Replacement',
        'Scheduled Maintenance Packages',
      ],
      link: '/services/maintenance',
    },
    {
      icon: <Wrench className="w-16 h-16 text-red-600" />,
      title: 'Repair Services',
      description: 'Expert diagnostic and repair services for all vehicle systems and components.',
      services: [
        'Engine Diagnostics & Repair',
        'CV Joint Replacement',
        'A/C & Heating Repair',
        'Suspension & Steering Repair',
        'Electrical System Diagnosis',
      ],
      link: '/services/repairs',
    },
    {
      icon: <Users className="w-16 h-16 text-red-600" />,
      title: 'Fleet Services',
      description: 'Comprehensive maintenance and repair solutions for business fleets of all sizes.',
      services: [
        'Fleet Maintenance Programs',
        'Priority Scheduling',
        'Volume Discounts',
        'Detailed Service Reports',
        'Preventive Maintenance Plans',
      ],
      link: '/services/fleet',
    },
  ];

  const additionalServices = [
    {
      icon: <CircleDollarSign className="w-12 h-12 text-red-600" />,
      title: 'Used Car Sales',
      description: 'Quality pre-owned vehicles starting at $4,500',
      link: '/used-cars',
    },
    {
      icon: <Gauge className="w-12 h-12 text-red-600" />,
      title: 'U-Haul Truck Rental',
      description: 'Convenient truck rental services for your moving needs',
      link: '/truck-rental',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Auto Repair Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              From routine maintenance to complex repairs, our experienced technicians
              provide comprehensive automotive services for all makes and models in
              Douglasville, GA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Schedule Service
              </Link>
              <a
                href="tel:4044290256"
                className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Call (404) 429-0256
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive automotive services to keep your vehicle in top condition
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-red-600 hover:shadow-xl transition-all"
              >
                <div className="mb-6">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-2 mb-6">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 mt-1">✓</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={category.link}
                  className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-red-600 font-semibold hover:text-red-700"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose RW Automotive?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Experienced Technicians
                  </h3>
                  <p className="text-gray-600">
                    ASE-certified mechanics with years of experience working on all
                    makes and models.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Honest, Transparent Pricing
                  </h3>
                  <p className="text-gray-600">
                    No hidden fees or surprise charges. Get a detailed estimate before
                    any work begins.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Quality Parts & Service
                  </h3>
                  <p className="text-gray-600">
                    We use high-quality parts and stand behind our work with solid
                    warranties.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Convenient Location & Hours
                  </h3>
                  <p className="text-gray-600">
                    Easy to find location in Douglasville with flexible hours and
                    after-hours drop-off available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your service appointment today or call us for a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Book Appointment
            </Link>
            <a
              href="tel:4044290256"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-colors font-semibold"
            >
              Call (404) 429-0256
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
