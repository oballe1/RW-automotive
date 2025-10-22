import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calendar, CheckCircle, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Brake Repair Douglasville GA | Pads, Rotors & Inspection | RW Automotive',
  description: 'Expert brake repair in Douglasville, GA. Brake pads, rotors, calipers & fluid service. Same-day service available. Get a free brake inspection. Call (404) 429-0256.',
  keywords: ['brake repair Douglasville GA', 'brake service Douglasville', 'brake pads replacement', 'rotor replacement Douglasville'],
};

export default function RepairsPage() {
  const brakeServices = [
    {
      title: 'Brake Pad Replacement',
      description: 'High-quality brake pad installation with lifetime warranty options available.',
    },
    {
      title: 'Rotor Resurfacing & Replacement',
      description: 'Precision rotor work to ensure smooth, safe braking performance.',
    },
    {
      title: 'Brake Fluid Flush',
      description: 'Complete brake fluid replacement to maintain optimal braking power.',
    },
    {
      title: 'Caliper Repair & Replacement',
      description: 'Expert caliper service to restore proper brake function.',
    },
  ];

  const warningSigns = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
      title: 'Squealing or Grinding Noises',
      description: 'High-pitched squealing or metal grinding sounds when braking indicate worn pads.',
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
      title: 'Pulsating Brake Pedal',
      description: 'Vibration or pulsation in the pedal suggests warped rotors that need attention.',
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
      title: 'Longer Stopping Distances',
      description: 'If your vehicle takes longer to stop, your brakes need immediate inspection.',
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
      title: 'Brake Warning Light',
      description: 'Dashboard warning lights indicate potential brake system issues.',
    },
  ];

  const repairServices = [
    {
      title: 'Engine Diagnostics & Repair',
      description: 'Advanced diagnostic equipment to identify and fix engine problems quickly and accurately.',
    },
    {
      title: 'CV Joint Replacement',
      description: 'Expert CV joint and axle repair to eliminate clicking noises and restore smooth operation.',
    },
    {
      title: 'A/C & Heating Repair',
      description: 'Complete climate control system service including compressor replacement and refrigerant recharge.',
    },
    {
      title: 'Suspension & Steering',
      description: 'Comprehensive suspension and steering system diagnosis and repair for a smooth, safe ride.',
    },
    {
      title: 'Electrical System Repair',
      description: 'Expert electrical diagnostics and repair for starting, charging, and electronic systems.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Brake Repair Services in Douglasville, Georgia
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your brakes are your vehicle&apos;s most important safety feature. Trust RW
              Automotive for expert brake repair, inspection, and maintenance services
              in Douglasville, GA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Brake Inspection
              </Link>
              <a
                href="tel:4044290256"
                className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call for Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Brake Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Comprehensive Brake Services
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            From routine brake inspections to complete system overhauls, we provide all
            the brake services your vehicle needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {brakeServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Signs Your Brakes Need Service
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Don&apos;t ignore these warning signs. If you notice any of these symptoms,
            schedule a brake inspection immediately.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {warningSigns.map((sign, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">{sign.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {sign.title}
                    </h3>
                    <p className="text-gray-600">{sign.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Brake Repair Process
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Free Brake Inspection
                  </h3>
                  <p className="text-gray-600">
                    We perform a comprehensive visual inspection of your brake system
                    including pads, rotors, calipers, and fluid.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Detailed Estimate
                  </h3>
                  <p className="text-gray-600">
                    You receive a clear, itemized estimate with no hidden fees before
                    any work begins.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Expert Repair
                  </h3>
                  <p className="text-gray-600">
                    Our certified technicians use quality parts and precision tools to
                    restore your brakes to optimal condition.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Quality Testing
                  </h3>
                  <p className="text-gray-600">
                    Every brake repair includes a road test to ensure proper performance
                    and your complete safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Repair Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Additional Repair Services
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Expert automotive repair for all vehicle systems
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose RW for Brake Repair */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose RW for Brake Repair?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Lifetime Warranty on Brake Pads*
              </h3>
              <p className="text-gray-600">
                Select brake pads come with a lifetime warranty for your peace of mind.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Premium Quality Parts
              </h3>
              <p className="text-gray-600">
                We use only high-quality brake components that meet or exceed OEM
                standards.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Same-Day Service Available
              </h3>
              <p className="text-gray-600">
                Most brake repairs can be completed the same day you bring your vehicle
                in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Brake Service FAQs
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How often should I replace my brake pads?
              </h3>
              <p className="text-gray-600">
                Brake pad life varies based on driving habits and conditions, but most
                pads last 30,000-70,000 miles. We recommend inspection every 12,000
                miles or annually.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What causes brake rotors to warp?
              </h3>
              <p className="text-gray-600">
                Excessive heat from hard braking, improper installation, or worn brake
                pads can cause rotors to warp. Regular maintenance helps prevent this
                issue.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How long does brake fluid last?
              </h3>
              <p className="text-gray-600">
                Brake fluid should be flushed every 2-3 years as it absorbs moisture
                over time, which reduces braking performance and can cause corrosion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Schedule Your Brake Inspection
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don&apos;t wait until it&apos;s too late. Get your brakes inspected by our
            expert technicians today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Link>
            <a
              href="tel:4044290256"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-colors font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (404) 429-0256
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
