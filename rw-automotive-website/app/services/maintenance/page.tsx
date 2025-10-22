import { Metadata } from 'next';
import Link from 'next/link';
import { Wrench, Droplet, Filter, Battery, Wind, CheckCircle, Clock, DollarSign, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: "Auto Maintenance Services Douglasville GA | RW Automotive",
  description: "Professional auto maintenance services in Douglasville, GA. Oil changes, fluid services, filter replacements, and preventive maintenance to keep your vehicle running smoothly.",
};

export default function MaintenancePage() {
  const maintenanceServices = [
    {
      icon: Droplet,
      title: 'Oil Changes',
      description: 'Regular oil changes to keep your engine running smoothly and extend its life.',
      services: [
        'Conventional oil change',
        'Synthetic oil change',
        'High-mileage oil change',
        'Oil filter replacement',
        'Fluid level check',
        'Multi-point inspection',
      ],
      price: 'Starting at $35',
    },
    {
      icon: Filter,
      title: 'Filter Replacements',
      description: 'Replace dirty filters to improve performance, fuel efficiency, and air quality.',
      services: [
        'Engine air filter',
        'Cabin air filter',
        'Fuel filter',
        'Transmission filter',
        'Oil filter',
        'PCV valve',
      ],
      price: 'Starting at $25',
    },
    {
      icon: Droplet,
      title: 'Fluid Services',
      description: 'Complete fluid maintenance to protect vital vehicle systems.',
      services: [
        'Transmission fluid exchange',
        'Coolant flush',
        'Brake fluid flush',
        'Power steering fluid',
        'Differential fluid',
        'Windshield washer refill',
      ],
      price: 'Starting at $49',
    },
    {
      icon: Battery,
      title: 'Battery Service',
      description: 'Battery testing, cleaning, and replacement to ensure reliable starting.',
      services: [
        'Battery testing',
        'Battery replacement',
        'Terminal cleaning',
        'Charging system test',
        'Alternator testing',
        'Starter testing',
      ],
      price: 'Starting at $15',
    },
    {
      icon: Wind,
      title: 'Belts & Hoses',
      description: 'Inspect and replace worn belts and hoses before they fail.',
      services: [
        'Serpentine belt replacement',
        'Timing belt service',
        'Radiator hose replacement',
        'Heater hose replacement',
        'Belt tension adjustment',
        'Visual inspection',
      ],
      price: 'Starting at $45',
    },
    {
      icon: Wrench,
      title: 'Tune-Ups',
      description: 'Complete engine tune-up to restore performance and fuel economy.',
      services: [
        'Spark plug replacement',
        'Ignition coil inspection',
        'Fuel system cleaning',
        'Throttle body cleaning',
        'Engine performance test',
        'Computer diagnostic scan',
      ],
      price: 'Starting at $89',
    },
  ];

  const maintenanceSchedule = [
    {
      interval: 'Every 3,000 - 5,000 Miles',
      items: ['Oil & filter change', 'Tire rotation', 'Fluid level check', 'Visual inspection'],
    },
    {
      interval: 'Every 15,000 - 30,000 Miles',
      items: ['Air filter replacement', 'Cabin filter replacement', 'Brake inspection', 'Battery test'],
    },
    {
      interval: 'Every 30,000 - 60,000 Miles',
      items: ['Transmission service', 'Coolant flush', 'Spark plug replacement', 'Fuel filter'],
    },
    {
      interval: 'Every 60,000+ Miles',
      items: ['Timing belt replacement', 'Major service', 'Differential service', 'Complete inspection'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Auto Maintenance Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Keep your vehicle running at its best with regular maintenance from RW Automotive.
              Prevent breakdowns and extend the life of your car with our comprehensive services.
            </p>
            <Link
              href="/appointment"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              Schedule Maintenance
            </Link>
          </div>
        </div>
      </section>

      {/* Why Regular Maintenance Matters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Regular Maintenance Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Save Money
              </h3>
              <p className="text-gray-600">
                Regular maintenance prevents costly repairs down the road and improves fuel efficiency.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Stay Safe
              </h3>
              <p className="text-gray-600">
                Well-maintained vehicles are safer on the road with properly functioning brakes and systems.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Extend Vehicle Life
              </h3>
              <p className="text-gray-600">
                Proper maintenance keeps your vehicle running longer and maintains its resale value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Our Maintenance Services
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Comprehensive preventive maintenance to keep your vehicle in top condition
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {maintenanceServices.map((service, index) => (
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

                <ul className="space-y-2 mb-4">
                  {service.services.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-4">
                  <p className="text-red-600 font-semibold mb-3">{service.price}</p>
                  <Link
                    href="/appointment"
                    className="block w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors font-semibold text-center"
                  >
                    Book Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Schedule */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Recommended Maintenance Schedule
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Follow this general guide to keep your vehicle in optimal condition. Your owner&apos;s manual may have specific recommendations.
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {maintenanceSchedule.map((schedule, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{schedule.interval}</h3>
                </div>
                <ul className="space-y-2">
                  {schedule.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              *These are general guidelines. Always consult your vehicle&apos;s owner manual for manufacturer-specific recommendations.
              Our technicians can help create a custom maintenance schedule for your vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* Oil Change Special */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Droplet className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Oil Change Special
            </h2>
            <p className="text-xl mb-2">
              Conventional Oil Change
            </p>
            <div className="text-5xl font-bold mb-4">$35</div>
            <p className="text-lg text-red-100 mb-8">
              Includes oil filter, up to 5 quarts of oil, and multi-point inspection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Schedule Now
              </Link>
              <a
                href="tel:4044290256"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-colors font-semibold"
              >
                Call (404) 429-0256
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What&apos;s Included in Every Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Multi-Point Inspection</h3>
              <p className="text-sm text-gray-600">
                Comprehensive check of all major systems
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Quality Parts</h3>
              <p className="text-sm text-gray-600">
                OEM or equivalent quality replacement parts
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <Wrench className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Expert Technicians</h3>
              <p className="text-sm text-gray-600">
                Experienced, certified automotive professionals
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Fast Service</h3>
              <p className="text-sm text-gray-600">
                Most services completed while you wait
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Maintenance FAQs
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How often should I get an oil change?
              </h3>
              <p className="text-gray-700">
                Most vehicles need an oil change every 3,000-5,000 miles for conventional oil, or 7,500-10,000 miles
                for synthetic oil. Check your owner&apos;s manual for specific recommendations for your vehicle.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What&apos;s the difference between conventional and synthetic oil?
              </h3>
              <p className="text-gray-700">
                Synthetic oil is engineered to provide better performance, protection, and longer intervals between changes.
                It costs more upfront but can save money long-term. We can help you choose the best option for your vehicle.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do I need to follow the maintenance schedule if my car runs fine?
              </h3>
              <p className="text-gray-700">
                Yes! Preventive maintenance catches problems before they become major issues. Regular service keeps your
                vehicle running smoothly, prevents breakdowns, and can save you thousands in repair costs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How long does a typical maintenance service take?
              </h3>
              <p className="text-gray-700">
                Most routine maintenance like oil changes take 30-45 minutes. More comprehensive services may take 1-2 hours.
                We offer while-you-wait service for most maintenance needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Keep Your Vehicle Running Smoothly
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Don&apos;t wait for a breakdown. Schedule your maintenance service today and enjoy peace of mind on the road.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              Schedule Service
            </Link>
            <Link
              href="/services"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
