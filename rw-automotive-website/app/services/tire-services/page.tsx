import { Metadata } from 'next';
import Link from 'next/link';
import { Wrench, RotateCw, Shield, Gauge, AlertTriangle, CheckCircle, DollarSign, Clock, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "Tire Services Douglasville GA | Installation, Repair, Rotation | RW Automotive",
  description: "Professional tire services in Douglasville, GA. Tire installation, rotation, balancing, repair, and alignment. New and used tires available. Expert service guaranteed.",
};

export default function TireServicesPage() {
  const tireServices = [
    {
      icon: Wrench,
      title: 'Tire Installation',
      description: 'Professional mounting and balancing for new and used tires.',
      services: [
        'Tire mounting',
        'Wheel balancing',
        'Valve stem replacement',
        'TPMS service',
        'Tire disposal',
        'Road force balancing',
      ],
      price: 'Starting at $20/tire',
    },
    {
      icon: RotateCw,
      title: 'Tire Rotation',
      description: 'Extend tire life with regular rotation service.',
      services: [
        ' 4-wheel rotation',
        'Tire pressure check',
        'Tread depth inspection',
        'Visual damage check',
        'Torque to spec',
        'TPMS reset',
      ],
      price: 'Starting at $25',
    },
    {
      icon: Shield,
      title: 'Tire Repair',
      description: 'Fast, reliable tire repair to get you back on the road.',
      services: [
        'Puncture repair',
        'Plug and patch',
        'Leak detection',
        'Valve replacement',
        'Bead seal repair',
        'TPMS sensor service',
      ],
      price: 'Starting at $15',
    },
    {
      icon: Gauge,
      title: 'Wheel Alignment',
      description: 'Precision alignment for better handling and tire life.',
      services: [
        'Front-end alignment',
        '4-wheel alignment',
        'Thrust angle alignment',
        'Computerized measuring',
        'Adjustment to specs',
        'Test drive verification',
      ],
      price: 'Starting at $75',
    },
    {
      icon: AlertTriangle,
      title: 'Flat Tire Service',
      description: 'Emergency flat tire repair and replacement.',
      services: [
        'Flat tire diagnosis',
        'Emergency repair',
        'Tire replacement',
        'Spare tire installation',
        'Mobile service available',
        'Same-day service',
      ],
      price: 'Call for pricing',
    },
    {
      icon: CheckCircle,
      title: 'TPMS Service',
      description: 'Tire pressure monitoring system diagnosis and repair.',
      services: [
        'TPMS diagnostics',
        'Sensor replacement',
        'Battery replacement',
        'System reset',
        'Programming',
        'Valve service',
      ],
      price: 'Starting at $50',
    },
  ];

  const tireBrands = [
    'Falken', 'Prinx', 'Michelin', 'Goodyear', 'Bridgestone',
    'Continental', 'Pirelli', 'Dunlop', 'BFGoodrich',
    'Yokohama', 'Hankook', 'Cooper'
  ];

  const whyChooseUs = [
    {
      icon: DollarSign,
      title: 'Great Prices',
      description: 'Competitive pricing on both new and quality used tires. We work with your budget.',
    },
    {
      icon: Award,
      title: 'Expert Service',
      description: 'Trained technicians with years of experience in tire service and wheel care.',
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Most tire services completed while you wait. Get back on the road quickly.',
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'All work backed by our warranty. Your satisfaction is our priority.',
    },
  ];

  const tireTips = [
    {
      title: 'Check Tire Pressure Monthly',
      description: 'Proper inflation improves fuel economy and extends tire life. Check when tires are cold.',
    },
    {
      title: 'Rotate Every 5,000-7,500 Miles',
      description: 'Regular rotation ensures even wear and maximizes the life of your tires.',
    },
    {
      title: 'Inspect Tread Depth',
      description: 'Use the penny test. If you can see all of Lincoln\'s head, it\'s time for new tires.',
    },
    {
      title: 'Watch for Uneven Wear',
      description: 'Uneven wear patterns can indicate alignment issues or improper inflation.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Complete Tire Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              From installation to repair, rotation to alignment - we provide comprehensive tire
              services to keep you safe on the road. New and used tires available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tires"
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold text-center"
              >
                Shop Tires
              </Link>
              <Link
                href="/appointment"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold text-center"
              >
                Schedule Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose RW Automotive for Tires?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tire Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Our Tire Services
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Professional tire care for all makes and models
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {tireServices.map((service, index) => (
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
                    Schedule Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tire Brands */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Tire Brands We Carry
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Quality tires from trusted manufacturers
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {tireBrands.map((brand, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-red-50 hover:shadow-md transition-all cursor-pointer border-2 border-transparent hover:border-red-600"
              >
                <p className="font-bold text-gray-900 text-lg">{brand}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/tires"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              Browse Available Tires
            </Link>
          </div>
        </div>
      </section>

      {/* Tire Care Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Tire Care Tips
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Maximize tire life and performance with these simple tips
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tireTips.map((tip, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-600">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quality Used Tires
            </h2>
            <p className="text-xl mb-2">
              Starting at just $45 per tire
            </p>
            <p className="text-lg text-red-100 mb-8">
              Inspected for safety and quality. Installation available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tires"
                className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Check Availability
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

      {/* Signs You Need New Tires */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Signs You Need New Tires
            </h2>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tread Depth Below 2/32"</h3>
                    <p className="text-gray-600">
                      Use the penny test. Insert a penny into the tread with Lincoln's head upside down.
                      If you can see all of his head, it's time for new tires.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Uneven Wear Patterns</h3>
                    <p className="text-gray-600">
                      Excessive wear on one side, center, or edges can indicate alignment issues or
                      improper inflation. May require tire replacement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Visible Cracks or Bulges</h3>
                    <p className="text-gray-600">
                      Cracks in the sidewall or bulges indicate structural damage. These tires should
                      be replaced immediately for safety.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Age Over 6 Years</h3>
                    <p className="text-gray-600">
                      Even with good tread, tires degrade over time. Most manufacturers recommend
                      replacement after 6-10 years regardless of use.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Vibration While Driving</h3>
                    <p className="text-gray-600">
                      Unusual vibration could indicate tire damage, improper balance, or internal issues
                      that warrant inspection and possible replacement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t text-center">
                <p className="text-gray-700 mb-4">
                  Not sure if you need new tires? We offer free tire inspections!
                </p>
                <Link
                  href="/appointment"
                  className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                  Schedule Free Inspection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Tire Service Today?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Don't wait until it's too late. Schedule your tire service or shop for new tires today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              Schedule Service
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
